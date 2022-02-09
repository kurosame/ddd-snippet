module.exports = {
  env: { browser: true },
  extends: ['airbnb', 'airbnb/hooks', 'plugin:@typescript-eslint/recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaFeatures: { jsx: true } },
  settings: {
    'import/resolver': {
      typescript: { project: './' }
    },
    react: { version: 'detect' }
  },
  rules: {
    'class-methods-use-this': 'off',
    'import/extensions': ['error', 'ignorePackages', { ts: 'never', tsx: 'never' }],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'type'],
        'newlines-between': 'always',
        alphabetize: { order: 'asc' }
      }
    ],
    'import/prefer-default-export': 'off',
    'lines-between-class-members': 'off',
    'no-console': ['error', { allow: ['info', 'warn', 'error'] }],
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function'
      }
    ],
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
    'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],
    'react/prop-types': 'off', // This is checked by TypeScript
    'react/react-in-jsx-scope': 'off'
  },
  ignorePatterns: ['vite.config.ts']
}
