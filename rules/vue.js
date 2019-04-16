// 🖖 VueLint 🖖
module.exports = {
  // ===========================================================================
  // Vue Template Rules
  // ===========================================================================
  // https://vuejs.github.io/eslint-plugin-vue/rules/no-use-v-if-with-v-for.html
  "vue/no-use-v-if-with-v-for": 2,
  // https://vuejs.github.io/eslint-plugin-vue/rules/require-v-for-key.html
  "vue/require-v-for-key": 2,
  // https://vuejs.github.io/eslint-plugin-vue/rules/no-duplicate-attributes.html
  "vue/no-duplicate-attributes": 2,
  // https://vuejs.github.io/eslint-plugin-vue/rules/no-reserved-keys.html
  "vue/no-reserved-keys": [
    2,
    {
      reserved: [
        "$data",
        "$props",
        "$el",
        "$options",
        "$emit",
        "$mount",
        "$nextTick",
        "$destroy"
      ],
      groups: []
    }
  ],
  // https://vuejs.github.io/eslint-plugin-vue/rules/no-unused-components.html#vue-no-unused-components
  "vue/no-unused-components": 2,
  // https://vuejs.github.io/eslint-plugin-vue/rules/no-unused-vars.html
  "vue/no-unused-vars": 2,
  // https://vuejs.github.io/eslint-plugin-vue/rules/require-valid-default-prop.html
  "vue/require-valid-default-prop": 1,
  // https://vuejs.github.io/eslint-plugin-vue/rules/return-in-computed-property.html
  "vue/return-in-computed-property": 2,
  // https://vuejs.github.io/eslint-plugin-vue/rules/valid-v-bind.html
  "vue/valid-v-bind": 1,
  // https://vuejs.github.io/eslint-plugin-vue/rules/valid-v-else.html
  "vue/valid-v-else": 1,
  // https://vuejs.github.io/eslint-plugin-vue/rules/component-name-in-template-casing.html
  "vue/component-name-in-template-casing": [
    2,
    "kebab-case",
    {
      ignores: []
    }
  ],
  // https://vuejs.github.io/eslint-plugin-vue/rules/v-bind-style.html
  "vue/v-bind-style": [2, "shorthand"],
  // https://vuejs.github.io/eslint-plugin-vue/rules/v-on-style.html
  "vue/v-on-style": [2, "shorthand"],
  // https://vuejs.github.io/eslint-plugin-vue/rules/this-in-template.html
  "vue/this-in-template": 2,
  // https://vuejs.github.io/eslint-plugin-vue/rules/no-template-shadow.html
  "vue/no-template-shadow": 2,
  // https://vuejs.github.io/eslint-plugin-vue/rules/no-spaces-around-equal-signs-in-attribute.html#vue-no-spaces-around-equal-signs-in-attribute
  "vue/no-spaces-around-equal-signs-in-attribute": 2,
  // https://vuejs.github.io/eslint-plugin-vue/rules/max-attributes-per-line.html
  "vue/max-attributes-per-line": 1,

  // ===========================================================================
  // Vue Script Rules
  // ===========================================================================
  // https://vuejs.github.io/eslint-plugin-vue/rules/order-in-components.html
  "vue/order-in-components": 1,
  // https://vuejs.github.io/eslint-plugin-vue/rules/prop-name-casing.html
  "vue/prop-name-casing": [2, "camelCase"]
};
