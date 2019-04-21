const esRules = require("./rules/es");
const vueRules = require("./rules/vue");

module.exports = {
  root: true,
  parserOptions: {
    sourceType: "module",
    parser: "babel-eslint"
  },
  plugins: ["vue", "prettier"],
  // https://github.com/vuejs/vue-cli/pull/2932/commits/fbb55f40e4c0ea1ca91707a1a81db5f0a516cc4b
  extends: [
    "plugin:vue/base",
    // https://github.com/prettier/eslint-plugin-prettier#recommended-configuration
    "plugin:prettier/recommended",
    // https://github.com/prettier/eslint-config-prettier/blob/master/README.md#installation
    "prettier/vue"
  ],
  env: {
    browser: true
  },
  rules: {
    ...esRules,
    ...vueRules
  }
};
