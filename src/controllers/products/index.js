const knex = require("../../database/connection");

async function createProducts(req, res) {
  const { title, image, amount, description } = req.body.product;
  try {
    const response = await knex("products")
      .insert({
        title: title,
        image: image,
        amount: amount,
        description: description,
      })
      .returning("*");
    if (response === 0) {
      return res
        .status(400)
        .json({ message: "it was not possible to register a new product" });
    }
    return res.status(201).json({ message: "Sucess!" });
  } catch (error) {
    return res.status(400).json(error.message);
  }
}
async function getProducts(req, res) {}
async function updateProducts(req, res) {}
async function deleteProducts(req, res) {}

module.exports = {
  createProducts,
  getProducts,
  updateProducts,
  deleteProducts,
};
