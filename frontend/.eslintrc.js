module.exports = {
  env: { browser: true },
  extends: ['airbnb', 'airbnb/hooks', 'plugin:@typescript-eslint/recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaFeatures: { jsx: true } },
  settings: { react: { version: 'detect' } },
  rules: {
    'no-console': ['error', { allow: ['info', 'warn', 'error'] }],
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }]
  },
  ignorePatterns: ['vite.config.ts']
}
