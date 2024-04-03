module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
    "plugin:prettier/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: [
    "react-refresh",
    "@typescript-eslint",
    "react",
    "react-hooks",
    "import",
  ],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: "return", next: "*" },
      { blankLine: "always", prev: "*", next: "return" },
      { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
      {
        blankLine: "any",
        prev: ["const", "let", "var"],
        next: ["const", "let", "var"],
      },
    ],
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          ["internal", "parent", "sibling", "index"],
          "object",
        ],
        pathGroups: [
          {
            pattern: "react",
            group: "external",
            position: "before",
          },
          {
            pattern: "react-native",
            group: "external",
            position: "before",
          },
          {
            pattern: "src/**",
            group: "external",
            position: "after",
          },
        ],
        pathGroupsExcludedImportTypes: ["builtin"],
        "newlines-between": "never",
      },
    ],
  },
};
