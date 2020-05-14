module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
  },
  rules: {
    "import/no-extraneous-dependencies": "off",
    "import/extensions": "off",
    "import/prefer-default-export": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "import/no-mutable-exports": 0,
    "no-labels": 0,
    "no-restricted-syntax": 0,
  },
  plugins: ["@typescript-eslint", "prettier", "svelte3"],
  extends: [
    "plugin:sonarjs/recommended",
    "sonarqube",
    "plugin:@typescript-eslint/recommended",
    "plugin:eslint-comments/recommended",
    "plugin:promise/recommended",
    "prettier",
    "prettier/@typescript-eslint",
  ],
  overrides: [
    {
      files: ["**/*.svelte"],
      processor: "svelte3/svelte3",
    },
  ],
};
