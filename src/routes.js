const express = require("express");
const routes = express();

const validationFields = require("./middleware/validation");
const {
  createProducts,
  getProducts,
  updateProducts,
  deleteProducts,
  getProductsById,
} = require("./controllers/products/index");

routes.get("/getProducts", getProducts);
routes.get("/getProductsbyId/;id", getProductsById);
routes.delete("/deleteProducts/:id", deleteProducts);
routes.post("/createProducts", validationFields, createProducts);
routes.put("/updateProducts/:id", validationFields, updateProducts);

module.exports = routes;
