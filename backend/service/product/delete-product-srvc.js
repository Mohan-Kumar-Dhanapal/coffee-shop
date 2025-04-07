import mongoose from "mongoose";

import repository from "../../repository/product/delete-product-repo.js";
import { INTERNAL_SERVER_ERROR } from "../../utils/constants.js";

const deleteProductService = async (req, res) => {
  try {
    const { productId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(productId)) {
      return res.status(400).json({ message: "Invalid product ID format" });
    }

    return await repository(productId, res);
  } catch (err) {
    res.send(INTERNAL_SERVER_ERROR);
  }
};

export default deleteProductService;
