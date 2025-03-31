import Ajv from "ajv";

import { createBillSchema } from "../../validator-schema/order/create-bill-scheme.js";
import { createOrderService as service } from "../../service/order/create-order-srvc.js";
import { trimStrings } from "../../utils/utils.js";

export const createOrderController = async (req, res) => {
  try {
    const data = trimStrings(req.body);

    const ajv = new Ajv({ allErrors: true });

    const validate = ajv.compile(createBillSchema);

    if (!validate(data)) {
      return res.status(422).json(validate.errors);
    }

    return await service(data.order, res);
  } catch (error) {
    console.error("Error in createOrderController Fn", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
