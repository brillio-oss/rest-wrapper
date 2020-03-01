const { JIRA } = require("../client");

const getIssueSummary = (key) => {
  return JIRA.issue
    .getIssue({ issueKey: key })
    .then(issue => {
      return issue.fields.summary;
    })
    .catch(error => console.error(error));
};

module.exports = {
  getIssueSummary
};
