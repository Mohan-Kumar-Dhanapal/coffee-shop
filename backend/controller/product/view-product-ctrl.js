import Ajv from "ajv";

import VIEW_PRODUCT_SCHEMA from "../../validator-schema/product/view-product-schema.js";
import service from "../../service/product/view-product-srvc.js";

const viewProductController = async (req, res) => {
  try {
    const ajv = new Ajv({ allErrors: true });

    const validate = ajv.compile(VIEW_PRODUCT_SCHEMA);

    if (!validate(req.body)) {
      return res.status(422).json(validate.errors);
    }

    return await service(req, res);
  } catch (error) {
    console.error("Error in viewProductController fn", error);
    return res.status(500).json({ message: "internal Server Error" });
  }
};

export default viewProductController;
