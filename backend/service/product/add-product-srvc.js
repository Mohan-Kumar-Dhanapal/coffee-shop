import repository from "../../repository/product/add-product-repo.js";
import { INTERNAL_SERVER_ERROR } from "../../utils/constants.js";

const addProductService = async (req, res) => {
  try {
    const { name, price, dealer, category } = req.body;
    let productInfo = { name: name.trim(), price: +price };

    if (category) {
      productInfo = { ...productInfo, category: category };
    }

    if (dealer) {
      productInfo = { ...productInfo, dealer: dealer };
    }

    return await repository(productInfo, res);
  } catch (err) {
    res.send(INTERNAL_SERVER_ERROR);
  }
};

export default addProductService;
