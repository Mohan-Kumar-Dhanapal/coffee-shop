import repository from "../repository/view-product-repo.js";
import { INTERNAL_SERVER_ERROR, PRODUCT_PER_PAGE } from "../utils/constants.js";
import { isNotEmptyString } from "../utils/utils.js";

const viewProductService = async (req, res) => {
  try {
    const { filterQuery, price, category, dealer, sortField, sortOrder, page } =
      req.body;

    const filters = {};

    if (isNotEmptyString(filterQuery)) {
      filters.name = { $regex: filterQuery, $options: "i" };
    }

    if (isNotEmptyString(price)) {
      filters.price = price;
    }

    if (isNotEmptyString(category)) {
      filters.category = { $regex: category, $options: "i" };
    }

    if (isNotEmptyString(dealer)) {
      filters.dealer = { $regex: dealer, $options: "i" };
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

export default viewProductService;
