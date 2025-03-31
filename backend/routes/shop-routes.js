import express from "express";
import viewProductController from "../controller/product/view-product-ctrl.js";
import { createOrderController } from "../controller/bill/create-order-ctrl.js";

const Router = express.Router();

Router.post("/get/product", (req, res, next) => {
  try {
    return viewProductController(req, res);
  } catch (err) {
    return res.send(INTERNAL_SERVER_ERROR);
  }
});

Router.post("/order", (req, res, next) => {
  try {
    return createOrderController(req, res);
  } catch (err) {
    return res.send(INTERNAL_SERVER_ERROR);
  }
});

export default Router;
