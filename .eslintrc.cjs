/* eslint-env node */
require('@rushstack/eslint-patch/lib/modern-module-resolution');

module.exports = {
  root: true,
  'extends': [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@typescript-eslint/parser'
  },
  rules: {
    // override/add rules here
  }
};
