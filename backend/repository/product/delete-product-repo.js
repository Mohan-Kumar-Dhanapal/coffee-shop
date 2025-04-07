import Product from "../../models/add-product.js";
import { INTERNAL_SERVER_ERROR } from "../../utils/constants.js";

const deleteProuctRepository = async (productId, res) => {
  try {
    const deleteResponse = await Product.deleteOne({ _id: productId });

    if (deleteResponse?.deletedCount > 0) {
      return res.status(200).json({ message: "Data deleted successfully" });
    } else {
      return res.status(200).json({ message: "No data found with this ID." });
    }
  } catch (err) {
    return res.send(INTERNAL_SERVER_ERROR);
  }
};

export default deleteProuctRepository;
