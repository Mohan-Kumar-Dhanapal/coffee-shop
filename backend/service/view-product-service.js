import repository from "../repository/view-product-repo.js";
import { INTERNAL_SERVER_ERROR, PRODUCT_PER_PAGE } from "../utils/constants.js";

const viewProductService = async (req, res) => {
  try {
    const fieldExists = (field) => {
      return field && field !== "";
    };

    const { filterQuery, price, category, dealer, sortField, sortOrder, page } =
      req.body;

    const filters = {};

    if (fieldExists(filterQuery)) {
      filters.name = { $regex: filterQuery, $options: "i" };
    }

    if (fieldExists(price)) {
      filters.price = price;
    }

    if (fieldExists(category)) {
      filters.category = { $regex: category, $options: "i" };
    }

    if (fieldExists(dealer)) {
      filters.dealer = { $regex: dealer, $options: "i" };
    }

    const fetchOptions = {
      sortField: "name",
      sortOrder: 1,
      offset: page ? (+page - 1) * PRODUCT_PER_PAGE : 0,
      limit: PRODUCT_PER_PAGE,
    };

    if (fieldExists(sortField)) {
      fetchOptions.sortField = sortField;
    }

    if (fieldExists(sortOrder) && sortOrder == "desc") {
      fetchOptions.sortOrder = -1;
    }

    return await repository(filters, fetchOptions, res);
  } catch (err) {
    res.send(INTERNAL_SERVER_ERROR);
  }
};

export default viewProductService;
