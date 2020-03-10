const { JIRA } = require("../client");

const getBoardsByProject = async idOrKey => {
  try {
    const boards = await JIRA.board.getAllBoards({
      projectKeyOrId: idOrKey.toUpperCase()
    });
    return boards.values;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getBoardsByProject
};
