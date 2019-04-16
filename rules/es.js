// 🗼 ESLint 🗼
module.exports = {
  // ===========================================================================
  // ESLint Debug Rules
  // ===========================================================================
  // https://eslint.org/docs/rules/no-debugger#disallow-the-use-of-debugger-no-debugger
  "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,
  // https://eslint.org/docs/rules/no-console#disallow-the-use-of-console-no-console
  "no-console": process.env.NODE_ENV === "production" ? 2 : 1,

  // ===========================================================================
  // ESLint ES6 Rules
  // ===========================================================================
  // https://eslint.org/docs/rules/constructor-super
  "constructor-super": 1,
  // https://eslint.org/docs/rules/object-shorthand
  "object-shorthand": 2,
  // https://eslint.org/docs/rules/no-useless-rename
  "no-useless-rename": 1,
  // https://eslint.org/docs/rules/no-duplicate-imports#disallow-duplicate-imports-no-duplicate-imports
  "no-duplicate-imports": 2,
  // https://eslint.org/docs/rules/no-var#require-let-or-const-instead-of-var-no-var
  "no-var": 2,

  // ===========================================================================
  // ESLint Core Rules
  // ===========================================================================
  // https://eslint.org/docs/rules/multiline-comment-style#enforce-a-particular-style-for-multiline-comments-multiline-comment-style
  "multiline-comment-style": 1,
  // https://eslint.org/docs/rules/camelcase#require-camelcase-camelcase
  camelcase: [
    1,
    {
      properties: "always"
    }
  ],
  // https://eslint.org/docs/rules/no-alert#disallow-use-of-alert-no-alert
  "no-alert": 2,
  // https://eslint.org/docs/rules/no-eval#disallow-eval-no-eval
  "no-eval": 2,
  // https://eslint.org/docs/rules/no-with#disallow-with-statements-no-with
  "no-with": 1,
  // https://eslint.org/docs/rules/no-magic-numbers
  "no-magic-numbers": 1,
  // https://eslint.org/docs/rules/no-unused-expressions
  "no-unused-expressions": 1,
  // https://eslint.org/docs/rules/no-shadow-restricted-names#disallow-shadowing-of-restricted-names-no-shadow-restricted-names
  "no-shadow-restricted-names": 2,
  // https://eslint.org/docs/rules/no-unused-vars#disallow-unused-variables-no-unused-vars
  "no-unused-vars": 2,
  // https://eslint.org/docs/rules/no-redeclare
  "no-redeclare": 2,
  // https://eslint.org/docs/rules/no-empty#disallow-empty-block-statements-no-empty
  "no-empty": 2,
  // https://eslint.org/docs/rules/no-lonely-if
  "no-lonely-if": 1
};