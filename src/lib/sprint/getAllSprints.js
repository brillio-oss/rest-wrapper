const { JIRA } = require("../client");

const getAllSprintsByBoard = async boardId => {
  try {
    const sprints = await JIRA.board.getAllSprints({
      boardId: boardId
    });
    const scopedSprints = sprints.values
      .filter(sprint => sprint.originBoardId === boardId)
      .sort((a, b) => new Date(b.startDate) - new Date(a.startDate));

    const currentSprint = scopedSprints.filter(
      sprint => sprint.state === "active"
    );
    const pastSprints = scopedSprints.filter(
      sprint => sprint.state === "closed"
    );
    const futureSprints = scopedSprints.filter(
      sprint => sprint.state === "future"
    );

    const finalSprints = [...currentSprint, ...pastSprints, ...futureSprints];

    const options = { month: "long", day: "numeric", year: "numeric" };

    const formattedDate = isoDate => {
      return (
        isoDate &&
        new Intl.DateTimeFormat("en-US", options).format(new Date(isoDate))
      );
    };

    finalSprints.map(sprint => {
      sprint.startDate = formattedDate(sprint.startDate);
      sprint.endDate = formattedDate(sprint.endDate);
      sprint.completeDate = formattedDate(sprint.completeDate);
    });

    return finalSprints;

  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllSprintsByBoard
};
