module.exports = {
  env: { browser: true, es2021: true },
  extends: ['airbnb'],
  ecmaFeatures: { jsx: true },
  ecmaVersion: 13,
  sourceType: 'module',
  rules: {
    'comma-dangle': 'off',
    'implicit-arrow-linebreak': 'off',
    'operator-linebreak': 'off',
    'linebreak-style': 'off',
    'object-curly-newline': 'off',
  },
};
