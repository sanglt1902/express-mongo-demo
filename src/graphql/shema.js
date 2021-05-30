const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Product {
    id: String!
    name:String!,
    description:String!,
    category:String!,
    brand:String!,
    price: Int!,
    quantity:Int!
  },
  input ProductInput {
    name:String!,
    description:String!,
    category:String!,
    brand:String!,
    price: Int!,
    quantity:Int!
  },
  type Query {
    hello: String!,
    product(id: String!): Product
  },
  type Mutation {
    createProduct(input: ProductInput): Product
  }
`;

module.exports = { typeDefs }