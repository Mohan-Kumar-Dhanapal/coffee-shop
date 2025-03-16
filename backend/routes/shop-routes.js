import express from "express";
import viewProducrController from "../controller/view-product-controller.js";

const Router = express.Router();

Router.post("/getProduct", (req, res, next) => {
  try {
    return viewProducrController(req, res);
  } catch (err) {
    return res.send(INTERNAL_SERVER_ERROR);
  }
});

export default Router;
