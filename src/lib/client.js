const JiraClient = require("jira-connector");

const opts = {
  host: process.env.REST_HOST,
  basic_auth: {
    base64: process.env.AUTH_TOKEN
  }
};

const JIRA = new JiraClient(opts);

module.exports = {
  JIRA
};
