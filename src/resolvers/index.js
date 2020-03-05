const { getIssueSummary } = require("../lib/issue/getIssueSummary");
const { getAllProjects } = require("../lib/project/getAllProjects");

const resolvers = {
  Query: {
    hello: () => "brillio",
    summary: (_, args) => getIssueSummary(args.key),
    getAllProjects: () => getAllProjects()
  }
};

module.exports = {
  resolvers
};
