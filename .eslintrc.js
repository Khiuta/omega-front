module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb',
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'react/jsx-filename-extension': 'off',
    'import/prefer-default-export': 'off',
    camelcase: 'off',
    'no-console': 'off',
    'no-alert': 'off',
    'default-param-last': 'off',
    'func-names': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'no-unused-vars': 'off',
    'react/jsx-no-useless-fragment': 'off',
    'no-param-reassign': 'off',
    'consistent-return': 'off',
  },
};
