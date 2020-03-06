// import gql from "graphql-tag";
const gql = require("graphql-tag");

const typeDefs = gql`
  type Project {
    id: String,
    name: String,
    key: String
  }

  type ProjectLead {
    key: String,
    name: String,
    self: String,
    displayName: String
  }

  type ProjectDetail {
    name: String,
    description: String,
    lead: ProjectLead,
    id: String,
    self: String
  }

  type Query {
    hello: String
    summary(key: String!): String
    getAllProjects: [Project]
    getProjectById(idOrKey: String!): ProjectDetail
  }
`;

module.exports = {
  typeDefs
};
