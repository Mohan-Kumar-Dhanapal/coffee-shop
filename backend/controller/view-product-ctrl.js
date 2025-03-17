import Ajv from "ajv";

import VIEW_PRODUCT_SCHEMA from "../validator-schema/view-product-schema.js";
import service from "../service/view-product-srvc.js";

const viewProducrController = async (req, res) => {
  const ajv = new Ajv({ allErrors: true });

  const validate = ajv.compile(VIEW_PRODUCT_SCHEMA);

  if (!validate(req.body)) {
    return res.status(422).json(validate.errors);
  }

  return await service(req, res);
};

export default viewProducrController;
