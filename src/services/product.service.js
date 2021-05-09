const prodrepository = require("../repositories/product.repo")

const createProduct = (product) => {
  return prodrepository.saveProduct(product);
}


module.exports = {
  createProduct
}