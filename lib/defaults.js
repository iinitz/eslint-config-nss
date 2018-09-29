module.exports = {
  'extends': [
    'eslint-config-airbnb',
  ].map(require.resolve),
  'parser': 'babel-eslint',
  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module',
    'ecmaFeatures': {
      'impliedStrict': true,
      'experimentalObjectRestSpread': true,
    }
  },
  'env': {
    'es6': true,
  },
  'rules': {
    'semi': [
      2,
      'never',
    ],
    'comma-dangle': [
      'error',
      'always-multiline',
    ],
    'no-multiple-empty-lines': [
      'error',
      {
        'max': 1,
        'maxEOF': 1,
        'maxBOF': 0,
      },
    ],
  },
}