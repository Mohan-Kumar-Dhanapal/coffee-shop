import mongoose from "mongoose";

import repository from "../repository/update-product-repo.js";
import { INTERNAL_SERVER_ERROR } from "../utils/constants.js";

const updateProductService = async (req, res) => {
  try {
    const { productId, name, price, dealer, category } = req.body;

    if (!mongoose.Types.ObjectId.isValid(productId)) {
      return res.status(400).json({ message: "Invalid product ID format" });
    }

    let productInfo = { name: name.trim(), price: +price };

    if (category) {
      productInfo = { ...productInfo, category: category };
    }

    if (dealer) {
      productInfo = { ...productInfo, dealer: dealer };
    }

    return await repository(productId, productInfo, res);
  } catch (err) {
    res.send(INTERNAL_SERVER_ERROR);
  }
};

export default updateProductService;
