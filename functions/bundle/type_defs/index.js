// import gql from "graphql-tag";
const gql = require("graphql-tag");

const typeDefs = gql`
  type Project {
    id: String,
    name: String,
    key: String
  }

  type Query {
    hello: String
    summary(key: String!): String
    getAllProjects: [Project]
  }
`;

module.exports = {
  typeDefs
};
