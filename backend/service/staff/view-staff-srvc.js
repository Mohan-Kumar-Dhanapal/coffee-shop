import { viewStaffRepository as repository } from "../../repository/staff/view-staff-repo.js";
import {
  INTERNAL_SERVER_ERROR,
  PRODUCT_PER_PAGE,
} from "../../utils/constants.js";
import { isNotEmptyString } from "../../utils/utils.js";

export const viewStaffService = async (data, res) => {
  try {
    const {
      name,
      contact,
      address,
      dob,
      salary,
      advance,
      sortField,
      sortOrder,
      page,
    } = data;

    const filters = { active: 1 };

    if (isNotEmptyString(name)) {
      filters.name = { $regex: name, $options: "i" };
    }

    if (isNotEmptyString(salary)) {
      filters.price = salary;
    }

    if (isNotEmptyString(address)) {
      filters.category = { $regex: address, $options: "i" };
    }

    if (isNotEmptyString(contact)) {
      filters.dealer = { $regex: contact, $options: "i" };
    }

    const fetchOptions = {
      sortField: "name",
      sortOrder: 1,
      offset: page ? (+page - 1) * PRODUCT_PER_PAGE : 0,
      limit: PRODUCT_PER_PAGE,
    };

    if (isNotEmptyString(sortField)) {
      fetchOptions.sortField = sortField;
    }

    if (isNotEmptyString(sortOrder) && sortOrder == "desc") {
      fetchOptions.sortOrder = -1;
    }

    return await repository(filters, fetchOptions, res);
  } catch (err) {
    res.send(INTERNAL_SERVER_ERROR);
  }
};
