const { getIssueSummary } = require("../lib/issue/getIssueSummary");
const { getAllProjects } = require("../lib/project/getAllProjects");
const { getProjectById } = require("../lib/project/getProjectById");

const resolvers = {
  Query: {
    hello: () => "brillio",
    summary: (_, args) => getIssueSummary(args.key),
    getAllProjects: () => getAllProjects(),
    getProjectById: (_, args) => getProjectById(args.idOrKey)
  }
};

module.exports = {
  resolvers
};
