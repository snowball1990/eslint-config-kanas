# eslint-config-kanas

> This package provides Kanas's JS and Vue .eslintrc (with Vue plugin) as an extensible shared config.

## Installation

```bash

# npm
npm install eslint @kanas/eslint-config-kanas -D

# yarn
yarn add eslint @kanas/eslint-config-kanas -D

```

## Usage

You can create a file .eslintrc.js in the project root directory,Configuration is as follows:

```javascript
// .eslintrc.js
module.exports = {
  extends: ["@kanas/eslint-config-kanas"]
};
```

## Further Reading

- [ESLint Shareable Configs](https://github.com/eslint/eslint/blob/master/docs/developer-guide/shareable-configs.md)
