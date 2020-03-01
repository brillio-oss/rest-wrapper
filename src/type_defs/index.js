// import gql from "graphql-tag";
const gql = require("graphql-tag");

const typeDefs = gql`
  type Query {
    hello: String
    summary(key: String!): String
  }
`;

module.exports = {
  typeDefs
};
