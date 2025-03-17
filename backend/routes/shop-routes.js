import express from "express";
import viewProducrController from "../controller/view-product-ctrl.js";

const Router = express.Router();

Router.post("/get/product", (req, res, next) => {
  try {
    return viewProducrController(req, res);
  } catch (err) {
    return res.send(INTERNAL_SERVER_ERROR);
  }
});

export default Router;
