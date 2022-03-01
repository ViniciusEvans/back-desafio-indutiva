const productSchema = require("../schemas/productsSchema");

async function validationFields(req, res, next) {
  try {
    if (!req.body.product) {
      return res
        .status(400)
        .json({ error: "the product object must not be empty" });
    }
    await productSchema.validate(req.body.product, {
      abortEarly: true,
    });
    next();
  } catch (error) {
    return res.status(400).json(error.message);
  }
}

module.exports = validationFields;
