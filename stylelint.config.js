module.exports = {
  plugins: ['stylelint-prettier', 'stylelint-scss'],
  extends: ['stylelint-config-standard'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
          'function',
          'if',
          'each',
          'include',
          'mixin',
          'return',
          'else',
          'for',
          'at-root',
        ],
      },
    ],
    'no-descending-specificity': null,
    'prettier/prettier': true,
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'no-empty-source': null,
    'unicode-bom': 'never',
    'font-family-no-missing-generic-family-keyword': null,
    'declaration-colon-space-after': 'always-single-line',
    'declaration-colon-space-before': 'never',
    'declaration-block-trailing-semicolon': 'always',
    'rule-empty-line-before': [
      'always',
      {
        ignore: ['after-comment', 'first-nested'],
      },
    ],
  },
}
