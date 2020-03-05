const { JIRA } = require("../client");

const getIssueSummary = (key) => {
  const query = JIRA.issue.getIssue({ issueKey: key })
  return query.then(issue => {
      return issue.fields.summary;
    })
    .catch(error => console.error(error));
};

module.exports = {
  getIssueSummary
};
