import Product from "../../models/add-product.js";
import { INTERNAL_SERVER_ERROR } from "../../utils/constants.js";

const updateProuctRepository = async (productId, productInfo, res) => {
  try {
    const updateRespose = await Product.updateOne(
      { _id: productId },
      { $set: productInfo }
    );

    if (updateRespose.acknowledged) {
      return res.send({ status: 200, message: "Product updated successfully" });
    } else {
      return res.send({ status: 500, message: "Error in DB updation" });
    }
  } catch (err) {
    return res.send(INTERNAL_SERVER_ERROR);
  }
};

export default updateProuctRepository;
