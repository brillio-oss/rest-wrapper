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

  type Board {
    id: Int,
    name: String
  }

  type Sprint {
    id: String,
    state: String,
    name: String,
    startDate: String,
    endDate: String,
    completeDate: String,
    originBoardId: Int,
    goal: String
  }

  type Query {
    hello(key: String!): String
    summary(key: String!): String
    getAllProjects: [Project]
    getProjectById(idOrKey: String!): ProjectDetail
    getBoardsByProject(idOrKey: String!): [Board]
    getAllSprintsByBoard(boardId: Int): [Sprint]
  }
`;

module.exports = {
  typeDefs
};
