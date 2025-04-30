/** @type {import('eslint').Linter.Config} */

const parserTs = require('@typescript-eslint/parser');
const pluginTs = require('@typescript-eslint/eslint-plugin');
const pluginReact = require('eslint-plugin-react');
const pluginReactHooks = require('eslint-plugin-react-hooks');
const pluginJsxA11y = require('eslint-plugin-jsx-a11y');
const pluginPrettier = require('eslint-plugin-prettier');
const configPrettier = require('eslint-config-prettier');

module.exports = [
  {
    files: ['**/*.{ts,tsx}'],
    ignores: ['dist/**', 'node_modules/**'],
    languageOptions: {
      parser: parserTs,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react: pluginReact,
      'react-hooks': pluginReactHooks,
      jsxA11y: pluginJsxA11y,
      '@typescript-eslint': pluginTs,
      prettier: pluginPrettier,
    },
    rules: {
      'prettier/prettier': 'warn',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      '@typescript-eslint/no-unused-vars': ['warn'],
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    rules: configPrettier.rules,
  },
];
