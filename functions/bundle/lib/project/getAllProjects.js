const { JIRA } = require("../client");

const getAllProjects = async () => {
  try {
    const projects = await JIRA.project.getAllProjects();
    return mappedProjects(projects)
  } catch (error) {
    console.log(error)
  }
};

const mappedProjects = (projects) => {
  return projects.map(project => {
    const { id, key, name } = project;
    return {
      id,
      key,
      name
    };
  });
}

module.exports = {
  getAllProjects
};
