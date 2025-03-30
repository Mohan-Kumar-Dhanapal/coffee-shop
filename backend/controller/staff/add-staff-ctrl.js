import Ajv from "ajv";
import { addStaffService as service } from "../../service/staff/add-staff-srvc.js";
import { STAFF_SCHEMA } from "../../validator-schema/staff/staff-schema.js";
import { trimStrings } from "../../utils/utils.js";

export const addStaffcontroller = async (req, res) => {
  try {
    const data = trimStrings(req.body);

    const ajv = new Ajv({ allErrors: true });
    const validate = ajv.compile(STAFF_SCHEMA);

    if (!validate(data)) {
      return res.status(422).json(validate.errors);
    }

    return await service(data, res);
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
