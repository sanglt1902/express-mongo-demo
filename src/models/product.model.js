const Joi = require("joi");

const initProductModel = (mongoose) => {
  const schema = mongoose.Schema(
    {
      name: String,
      description: String,
      category: String,
      brand: String,
      price: Number,
      quantity: Number
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Product = mongoose.model("product", schema);
  return Product;
};

const validateProduct = (product) => {
  const schema = Joi.object({
    name: Joi.string().min(10).max(100).required(),
    description: Joi.string().min(10).max(4000).required(),
    category: Joi.string().min(10).max(100).required(),
    brand: Joi.string().min(0).max(100).required(),
    price: Joi.number().integer().min(0),
    quantity: Joi.number().integer().min(0),
  })

  let { error } = schema.validate(product)
  if (error) {
    throw new Error(`Product validation error: ${error.message}`);
  }
}

module.exports = {
  initProductModel,
  validateProduct
}