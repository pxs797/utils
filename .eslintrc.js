module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true
  },
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jest/recommended"
  ],
  plugins: [
    "@typescript-eslint",
    "jest"
  ],
  parserOptions: {
    project: "./tsconfig.json",
    ecmaVersion: 2015,
    sourceType: "module"
  },
  rules: {
    "no-trailing-spaces": "error",
    "no-multi-spaces": "error",
    "@typescript-eslint/no-explicit-any": "off"
  }
}