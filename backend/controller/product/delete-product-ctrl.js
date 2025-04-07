import service from "../../service/product/delete-product-srvc.js";
import { INTERNAL_SERVER_ERROR } from "../../utils/constants.js";

const deleteProductController = async (req, res) => {
  try {
    return await service(req, res);
  } catch (err) {
    return res.send(INTERNAL_SERVER_ERROR);
  }
};

export default deleteProductController;
