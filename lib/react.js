module.exports = {
  'extends': 'nss/lib/defaults',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    }
  },
  'env': {
    'browser': true,
    'es6': true,
  },
  'rules': {
    'react/jsx-filename-extension': 0,
    'function-paren-newline': 0,
  },
}