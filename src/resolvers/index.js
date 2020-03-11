const { getIssueSummary } = require("../lib/issue/getIssueSummary");
const { getAllProjects, getProjectById } = require("../lib/project");
const { getBoardsByProject } = require("../lib/board/getAllBoards");
const { getAllSprintsByBoard } = require("../lib/sprint/getAllSprints");

const resolvers = {
  Query: {
    hello: () => "brillio",
    summary: (_, { key }) => getIssueSummary(key),
    getAllProjects: () => getAllProjects(),
    getProjectById: (_, { idOrKey }) => getProjectById(idOrKey),
    getBoardsByProject: (_, { idOrKey }) => getBoardsByProject(idOrKey),
    getAllSprintsByBoard: (_, { boardId }) => getAllSprintsByBoard(boardId)
  }
};

module.exports = {
  resolvers
};
