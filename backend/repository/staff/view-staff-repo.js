import Staff from "../../models/Staffs.js";
import { INTERNAL_SERVER_ERROR } from "../../utils/constants.js";

export const viewStaffRepository = async (filters, fetchOptions, res) => {
  try {
    const { sortField, sortOrder, offset, limit } = fetchOptions;

    const productDetails = await Staff.find(filters)
      .sort({ [sortField]: sortOrder })
      .skip(offset)
      .limit(limit);

    return res.status(200).send({ data: productDetails });
  } catch (err) {
    return res.send(INTERNAL_SERVER_ERROR);
  }
};
