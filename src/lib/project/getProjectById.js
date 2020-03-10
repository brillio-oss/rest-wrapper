const { JIRA } = require("../client");

const getProjectById = async idOrKey => {
  try {
    const project = await JIRA.project.getProject({
      projectIdOrKey: idOrKey.toUpperCase()
    });
    return project;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getProjectById
};
