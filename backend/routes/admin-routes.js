import express from "express";

import addProductController from "../controller/add-product-ctrl.js";
import { INTERNAL_SERVER_ERROR } from "../utils/constants.js";
import deleteProductController from "../controller/delete-product-ctrl.js";

const Router = express.Router();

Router.post("/addProduct", (req, res, next) => {
  try {
    return addProductController(req, res);
  } catch (err) {
    return res.send(INTERNAL_SERVER_ERROR);
  }
});

Router.delete("/product/:productId", (req, res, next) => {
  try {
    return deleteProductController(req, res);
  } catch (err) {
    return res.send(INTERNAL_SERVER_ERROR);
  }
});

export default Router;
