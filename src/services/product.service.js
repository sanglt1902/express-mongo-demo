const prodrepository = require("../repositories/product.repository")

const createProduct = (product) => {
  return prodrepository.saveProduct(product);
}

const getById = (id) => {
  return prodrepository.getById(id);
}


module.exports = {
  createProduct,
  getById
}