const esRules = require("./rules/es");
const vueRules = require("./rules/vue");

module.exports = {
  root: true,
  parserOptions: {
    sourceType: "module",
    parser: "babel-eslint"
  },
  env: {
    browser: true
  },
  rules: {
    ...esRules,
    ...vueRules
  }
};
