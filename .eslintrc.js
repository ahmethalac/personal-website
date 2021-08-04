module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2020: true,
  },
  extends: [
    'react-app',
    'plugin:jsx-a11y/recommended',
    'airbnb',
  ],
  plugins: [
    'jsx-a11y',
  ],
  parserOptions: {
    ecmaVersion: 11,
  },
  rules: {
    'linebreak-style': 0,
    'arrow-parens': ['error', 'as-needed'],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: [
          '.js',
          '.jsx',
        ],
      },
    ],
    'object-property-newline': ['error', {
      allowAllPropertiesOnSameLine: false,
    }],
  },
};
