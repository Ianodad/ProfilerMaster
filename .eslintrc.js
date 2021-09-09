module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
      
    'plugin:react/recommended',
    'airbnb',
    'prettier',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'simple-import-sort',
  ],
  rules: {
    'no-console': 'warn',
    'simple-import-sort/imports': 1,
    'react/prop-types': 0,
    'no-constant-condition': 0,
    'react/react-in-jsx-scope': 'off',
    // 'prettier/prettier': 'error',
    'linebreak-style': ['error', 'unix'],
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    'react/jsx-filename-extension': ['off'],
    'no-trailing-spaces': 0,
    'class-methods-use-this': 0,
  },
};
