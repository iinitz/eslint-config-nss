module.exports = {
  'extends': [
    'eslint-config-airbnb',
  ].map(require.resolve),
  'parser': 'babel-eslint',
  'parserOptions': {
    'ecmaVersion': 6,
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true,
      'impliedStrict': true,
      'experimentalObjectRestSpread': true
    }
  },
  'env': {
    'browser': true,
    'node': true,
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
    'no-unused-vars': [
      'error',
      {
        'args': 'none',
        'caughtErrors': 'all'
      }
    ],
  },
}