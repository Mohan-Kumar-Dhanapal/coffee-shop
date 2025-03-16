import Product from "../models/add-product.js";
import { INTERNAL_SERVER_ERROR } from "../utils/constants.js";

const addProuctRepository = async (req, res) => {
  try {
    const { name, price, dealer } = req.body;
    let productInfo = { name: name.trim(), price: +price };

    if (!!dealer) {
      productInfo = { ...productInfo, dealer: dealer };
    }

    const product = new Product(productInfo);

    await product
      .save()
      .then(() => {
        return res.send({ status: 200, message: "Product added successfully" });
      })
      .catch((err) => {
        return res.send({ status: 500, message: "Error in DB insertion" });
      });
  } catch (err) {
    return res.send(INTERNAL_SERVER_ERROR);
  }
};

export default addProuctRepository;
