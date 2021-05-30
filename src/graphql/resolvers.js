const { createProduct, getById } = require("../services/product.service")
const resolvers = {

  Query: {
    hello: () => {
      return 'Hello World!'
    },
    product: (obj, args, context, info) => {
      return getById(args.id)
    }
  },
  Mutation: {
    createProduct: (obj, args, context, info) => {
      return createProduct(args.input)
    }
  }
};

module.exports = {
  resolvers
}
