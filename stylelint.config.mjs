/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-prettier'],
  plugins: ['stylelint-scss'],
  rules: {
    'block-no-empty': true,
    'color-no-invalid-hex': true,
    'declaration-block-no-duplicate-properties': true,
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
  },
  ignoreFiles: ['**/node_modules/**', '**/dist/**'],
};
