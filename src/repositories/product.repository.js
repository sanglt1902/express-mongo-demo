
const db = require("../models");
const Product = db.product;

const saveProduct = (productData) => {
  // Create a Product
  const product = new Product({
    ...productData
  });
  try {
    return product.save(productData);
  } catch (error) {
    throw new Error(`An error occurs when creating product: ${error.message}`);
  }
}

const getById = (id) => {
  try {
    return Product.findById(id)
  } catch (error) {
    throw new Error(`An error occurs when get product id ${id} : ${error.message}`);
  }
}

module.exports = {
  saveProduct,
  getById
}