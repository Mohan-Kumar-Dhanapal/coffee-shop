import Ajv from "ajv";
import { viewStaffService as service } from "../../service/staff/view-staff-srvc.js";
import { VIEW_STAFF_SCHEMA } from "../../validator-schema/staff/view-staff-schema.js";
import { trimStrings } from "../../utils/utils.js";

export const viewStaffController = async (req, res) => {
  try {
    const data = trimStrings(req.body);

    const ajv = new Ajv({ allErrors: true });
    const validate = ajv.compile(VIEW_STAFF_SCHEMA);

    if (!validate(data)) {
      return res.status(422).json(validate.errors);
    }

    return await service(data, res);
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
