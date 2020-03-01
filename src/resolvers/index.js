const { getIssueSummary } = require("../lib/issue/getIssueSummary");

const resolvers = {
  Query: {
    hello: () => "brillio",
    summary: (_, args) => getIssueSummary(args.key)
  }
};

module.exports = {
  resolvers
};
