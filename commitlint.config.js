const makeConfig = require("./dist");

module.exports = makeConfig({
  issuePrefixes: ["GOOD-"],
  commitTypes: [
    "feat", // @NOTE: implementation of functionality
    "fix", // @NOTE: bugfix
    "wip", // @NOTE: work in progress
    "ci", // @NOTE: continuous integration related issues
    "chore", // @NOTE: should be moved in the starter-project
  ],
});
