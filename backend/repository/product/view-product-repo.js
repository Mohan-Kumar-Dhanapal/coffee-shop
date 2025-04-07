import Product from "../../models/add-product.js";
import {
  INTERNAL_SERVER_ERROR,
  PRODUCT_PER_PAGE,
} from "../../utils/constants.js";

const viewProductRepository = async (filters, fetchOptions, res) => {
  try {
    const { sortField, sortOrder, offset, limit } = fetchOptions;

    const productDetails = await Product.find(filters)
      .sort({ [sortField]: sortOrder })
      .skip(offset)
      .limit(limit);

    return res.status(200).send({ data: productDetails });
  } catch (err) {
    return res.send(INTERNAL_SERVER_ERROR);
  }
};

export default viewProductRepository;
