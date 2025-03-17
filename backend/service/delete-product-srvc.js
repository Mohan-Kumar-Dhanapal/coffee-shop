import repository from "../repository/delete-product-repo.js";
import { INTERNAL_SERVER_ERROR } from "../utils/constants.js";

const deleteProductService = async (req, res) => {
  try {
    return await repository(req, res);
  } catch (err) {
    res.send(INTERNAL_SERVER_ERROR);
  }
};

export default deleteProductService;
