import Product from "../models/add-product.js";
import { INTERNAL_SERVER_ERROR } from "../utils/constants.js";

const deleteProuctRepository = async (req, res) => {
  try {
    const { productId } = req.params;

    const deleteResponse = await Product.findByIdAndDelete(productId);
    console.log(deleteResponse);

    return res.send({ status: 200, message: "Product added successfully" });
  } catch (err) {
    return res.send(INTERNAL_SERVER_ERROR);
  }
};

export default deleteProuctRepository;
