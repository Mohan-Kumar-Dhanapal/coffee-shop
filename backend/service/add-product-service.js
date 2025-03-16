import repository from "../repository/add-product-repo.js";
import { INTERNAL_SERVER_ERROR } from "../utils/constants.js";

const addProductService = async (req, res) => {
  try {
    return await repository(req, res);
  } catch (err) {
    res.send(INTERNAL_SERVER_ERROR);
  }
};

export default addProductService;
