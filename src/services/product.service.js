const prodrepository = require("../repositories/product.repository")

const createProduct = (product) => {
  return prodrepository.saveProduct(product);
}


module.exports = {
  createProduct
}