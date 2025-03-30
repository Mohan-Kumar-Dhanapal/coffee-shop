import express from "express";

import addProductController from "../controller/product/add-product-ctrl.js";
import deleteProductController from "../controller/product/delete-product-ctrl.js";

import { addStaffcontroller } from "../controller/staff/add-staff-ctrl.js";
import { deleteStaffController } from "../controller/staff/delete-staff-ctrl.js";
import { viewStaffController } from "../controller/staff/view-staff-ctrl.js";
import { INTERNAL_SERVER_ERROR } from "../utils/constants.js";

const Router = express.Router();

// PRODUCT - Routes

Router.post("/product", (req, res, next) => {
  try {
    return addProductController(req, res);
  } catch (err) {
    return res.send(INTERNAL_SERVER_ERROR);
  }
});

Router.put("/product", (req, res) => {
  try {
    return updateProductController(req, res);
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

// STAFF - Routes

Router.post("/add/staff", async (req, res, next) => {
  try {
    return await addStaffcontroller(req, res);
  } catch (err) {
    return res.status(500).send({ message: "internal server error" });
  }
});

Router.post("/get/staff", async (req, res, next) => {
  try {
    return await viewStaffController(req, res);
  } catch (err) {
    return res.status(500).send({ message: "internal server error" });
  }
});

Router.put("/staff", async (req, res) => {
  try {
    return await updateStaffController(req, res);
  } catch (err) {
    return res.status(500).send({ message: "internal server error" });
  }
});

Router.delete("/staff/:staffId", async (req, res, next) => {
  try {
    return await deleteStaffController(req, res);
  } catch (err) {
    return res.status(500).send({ message: "internal server error" });
  }
});

export default Router;
