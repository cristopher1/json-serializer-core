module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'standard', 'prettier'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
    {
      env: {
        node: true,
      },
      files: ['src/**/*.js'],
      extends: ['plugin:jsdoc/recommended'],
      plugins: ['jsdoc'],
    },
    {
      env: {
        node: true,
      },
      files: ['__tests__/**/*.js'],
      extends: ['plugin:jest/recommended'],
      plugins: ['jest'],
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {},
}
