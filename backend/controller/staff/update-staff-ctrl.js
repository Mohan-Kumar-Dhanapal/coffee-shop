import Ajv from "ajv";
import { updateStaffService as service } from "../../service/staff/upadte-staff-srvc.js";
import { trimStrings } from "../../utils/utils.js";
import { UPDATE_SCHEMA } from "../../validator-schema/staff/update-schema.js";

export const updateStaffController = async (req, res) => {
  try {
    const data = trimStrings(req.body);
    const ajv = new Ajv({ allErrors: true });

    const validate = ajv.compile(UPDATE_SCHEMA);

    if (!validate(req.body)) {
      return res.status(422).json(validate.errors);
    }
    return await service(data, res);
  } catch (error) {
    return res.status().json({ message: "Error in updateStaffController" });
  }
};
