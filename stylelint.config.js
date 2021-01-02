module.exports = {
  plugins: ['stylelint-prettier'],
  extends: ['stylelint-config-standard'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen'],
      },
    ],
    'declaration-block-trailing-semicolon': null,
    'no-descending-specificity': null,
    'prettier/prettier': true,
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
  },
}
