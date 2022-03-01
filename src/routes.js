const express = require("express");
const routes = express();

const {
  createProducts,
  getProducts,
  updateProducts,
  deleteProducts,
} = require("./controllers/products/index");

routes.post("/createProducts", createProducts);
routes.get("/getProducts", getProducts);
routes.put("/updateProducts", updateProducts);
routes.delete("/deleteProducts", deleteProducts);

module.exports = routes;
