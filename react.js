module.exports = {
  'extends': 'nss',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    }
  },
  'env': {
    'browser': true,
    'es6': true,
    'jest': true,
  },
  "plugins": [
    "react-hooks"
  ],
  'rules': {
    'react/jsx-filename-extension': 0,
    'function-paren-newline': 0,
    'react/jsx-one-expression-per-line': 0,
    'lines-between-class-members': 0,
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": [
      "warn",
      {
        "additionalHooks": "useRecoilCallback"
      }
    ]
  },
}
