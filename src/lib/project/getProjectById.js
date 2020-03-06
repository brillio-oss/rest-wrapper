const { JIRA } = require("../client");

const getProjectById = async (idOrKey) => {
  console.log(idOrKey)
  if (!idOrKey) return;
  try {
    const project = await JIRA.project.getProject({ projectIdOrKey: idOrKey });
    const { name, description, lead, id, self } = project
    const obj = {
      name, description, lead, id, self
    }
    console.log(obj)
    return obj
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getProjectById
};
