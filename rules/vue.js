// 🖖 VueLint 🖖
module.exports = {
  // ===========================================================================
  // Vue Template Rules
  // ===========================================================================
  // https://eslint.vuejs.org//rules/no-use-v-if-with-v-for.html
  "vue/no-use-v-if-with-v-for": 2,
  // https://eslint.vuejs.org//rules/require-v-for-key.html
  "vue/require-v-for-key": 2,
  // https://eslint.vuejs.org//rules/no-duplicate-attributes.html
  "vue/no-duplicate-attributes": 2,
  // https://eslint.vuejs.org//rules/no-reserved-keys.html
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
  // https://eslint.vuejs.org//rules/no-unused-vars.html
  "vue/no-unused-vars": 2,
  // https://eslint.vuejs.org//rules/valid-v-bind.html
  "vue/valid-v-bind": 1,
  // https://eslint.vuejs.org//rules/valid-v-else.html
  "vue/valid-v-else": 1,
  // https://eslint.vuejs.org//rules/component-name-in-template-casing.html
  "vue/component-name-in-template-casing": [
    2,
    "kebab-case",
    {
      ignores: []
    }
  ],
  // https://eslint.vuejs.org//rules/v-bind-style.html
  "vue/v-bind-style": [2, "shorthand"],
  // https://eslint.vuejs.org//rules/v-on-style.html
  "vue/v-on-style": [2, "shorthand"],
  // https://eslint.vuejs.org//rules/this-in-template.html
  "vue/this-in-template": 2,
  // https://eslint.vuejs.org//rules/no-template-shadow.html
  "vue/no-template-shadow": 2,
  // https://eslint.vuejs.org//rules/no-spaces-around-equal-signs-in-attribute.html#vue-no-spaces-around-equal-signs-in-attribute
  "vue/no-spaces-around-equal-signs-in-attribute": 2,
  // https://eslint.vuejs.org//rules/max-attributes-per-line.html
  "vue/max-attributes-per-line": 1,

  // ===========================================================================
  // Vue Script Rules
  // ===========================================================================
  // https://eslint.vuejs.org//rules/order-in-components.html
  "vue/order-in-components": 1,
  // https://eslint.vuejs.org//rules/prop-name-casing.html
  "vue/prop-name-casing": [2, "camelCase"],
  // https://eslint.vuejs.org//rules/return-in-computed-property.html
  "vue/return-in-computed-property": 2,
  // https://eslint.vuejs.org//rules/require-valid-default-prop.html
  "vue/require-valid-default-prop": 1,
  // https://eslint.vuejs.org//rules/no-unused-components.html#vue-no-unused-components
  "vue/no-unused-components": 2,
  // https://eslint.vuejs.org//rules/order-in-components.html
  "vue/order-in-components": ["error", {
    "order": [
      "el",
      "name",
      "parent",
      "functional",
      ["delimiters", "comments"],
      ["components", "directives", "filters"],
      "extends",
      "mixins",
      "inheritAttrs",
      "model",
      ["props", "propsData"],
      "data",
      "computed",
      "watch",
      "LIFECYCLE_HOOKS",
      "methods",
      ["template", "render"],
      "renderError"
    ]
  }]
};
