const { JIRA } = require("../client");

const getIssueSummary = async key => {
  try {
    const issue = await JIRA.issue.getIssue({ issueKey: key });
    return issue.fields.summary + '\n' + issue.fields.description;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getIssueSummary
};
