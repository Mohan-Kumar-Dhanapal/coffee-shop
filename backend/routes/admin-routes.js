import express from "express";

import addProductController from "../controller/add-product-controller.js";
import { INTERNAL_SERVER_ERROR } from "../utils/constants.js";

const Router = express.Router();

Router.post("/addProduct", (req, res, next) => {
  try {
    return addProductController(req, res);
  } catch (err) {
    return res.send(INTERNAL_SERVER_ERROR);
  }
});

export default Router;
