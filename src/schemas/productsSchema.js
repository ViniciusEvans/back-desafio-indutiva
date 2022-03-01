const Yup = require("../yup");

const productSchema = Yup.object().shape({
  description: Yup.string().required({
    error: "the description field must not be empty",
  }),
  title: Yup.string().required({ error: "the title field must not be empty" }),
  amount: Yup.number()
    .min(0)
    .required({ error: "the amount field must not be empty" }),
  image: Yup.string().required({ error: "the image field must not be empty" }),
});

module.exports = productSchema;
