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
        .json({ error: "it was not possible to register a new product" });
    }
    return res.status(200).json({ success: "Success!" });
  } catch (error) {
    return res.status(400).json(error.message);
  }
}
async function getProducts(req, res) {
  try {
    const response = await knex("products").returning("*");
    if (response === 0) {
      return res.status(404).json({ error: "has nothing in database" });
    }
    return res.status(200).json(response);
  } catch (error) {
    return res.status(400).json(error.message);
  }
}
async function updateProducts(req, res) {
  const { title, image, amount, description } = req.body.product;
  const { id } = req.params;
  try {
    const productExist = await knex("products")
      .select("*")
      .where({ id })
      .first();
    if (!productExist) {
      return res.status(404).json({ error: "Product not found" });
    }
    const values = {
      title,
      image,
      amount,
      description,
    };
    await knex("products").update(values).where({ id });
    return res.status(200).json({
      success: "Product updated with success",
    });
  } catch (error) {
    return res.status(400).json(error.message);
  }
}
async function deleteProducts(req, res) {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ error: "need id in params" });
  }
  try {
    const productExist = await knex("products").where({ id }).first();
    console.log(productExist);
    if (!productExist) {
      return res.status(404).json({ error: "Product not found" });
    }
    await knex("products").where({ id }).first().del();
    return res.status(200).json({ success: "Product deleted with success" });
  } catch (error) {
    return res.status(400).json(error.message);
  }
}

module.exports = {
  createProducts,
  getProducts,
  updateProducts,
  deleteProducts,
};
