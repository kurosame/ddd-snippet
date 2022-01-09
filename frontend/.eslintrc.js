module.exports = {
  env: { browser: true },
  extends: ['airbnb', 'airbnb/hooks', 'plugin:@typescript-eslint/recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaFeatures: { jsx: true } },
  settings: { react: { version: 'detect' } },
  rules: {
    'import/extensions': ['error', 'ignorePackages', { ts: 'never', tsx: 'never' }],
    'import/prefer-default-export': 'off',
    'no-console': ['error', { allow: ['info', 'warn', 'error'] }],
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function'
      }
    ],
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }]
  },
  ignorePatterns: ['vite.config.ts']
}
