const { getIssueSummary } = require("../lib/issue/getIssueSummary");
const { getAllProjects } = require("../lib/project/getAllProjects");
const { getProjectById } = require("../lib/project/getProjectById");
const { getBoardsByProject } = require("../lib/board/getAllBoards");
const { getAllSprintsByBoard } = require("../lib/sprint/getAllSprints");

const getHello = (key) => {
  return "brillio " + key;
};

const resolvers = {
  Query: {
    hello: (_, args) => getHello(args.key),
    summary: (_, args) => getIssueSummary(args.key),
    getAllProjects: () => getAllProjects(),
    getProjectById: (_, args) => getProjectById(args.idOrKey),
    getBoardsByProject: (_, args) => getBoardsByProject(args.idOrKey),
    getAllSprintsByBoard: (_, args) => getAllSprintsByBoard(args.boardId),
  },
};

module.exports = {
  resolvers,
};
