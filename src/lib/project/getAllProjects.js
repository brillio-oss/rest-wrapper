const { JIRA } = require("../client");

const getAllProjects = () => {
  const query = JIRA.project.getAllProjects();
  return query
    .then(projects => {
      return projects.map(project => {
        const { id, key, name } = project;
        return {
          id,
          key,
          name
        };
      })
    })
    .catch(error => console.error(error));
};

module.exports = {
  getAllProjects
};
