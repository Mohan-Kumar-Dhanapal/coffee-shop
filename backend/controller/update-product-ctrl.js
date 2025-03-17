import Ajv from "ajv";

import UPDATE_PRODUCT_SCHEMA from "../validator-schema/update-product-schema.js";
import service from "../service/update-product-srvc.js";

const addProducrController = async (req, res) => {
  const ajv = new Ajv({ allErrors: true });

  const validate = ajv.compile(UPDATE_PRODUCT_SCHEMA);

  if (!validate(req.body)) {
    return res.status(422).json(validate.errors);
  }

  const { name, dealer, category } = req.body;

  if (
    !isNotEmptyString(name) ||
    (dealer && !isNotEmptyString(dealer)) ||
    (category && !isNotEmptyString(category))
  ) {
    return res.status(422).json({ message: "Value cannot be an empty string" });
  }

  return await service(req, res);
};

export default addProducrController;
