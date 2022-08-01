module.exports = {
  env: { browser: true },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: { jsx: true },
    project: './tsconfig.json'
  },
  settings: {
    'import/resolver': {
      typescript: { project: './' }
    },
    react: { version: 'detect' }
  },
  rules: {
    '@typescript-eslint/dot-notation': ['error'], // Compatible with TypeScript's noPropertyAccessFromIndexSignature option
    '@typescript-eslint/no-misused-promises': ['error', { checksVoidReturn: false }],
    'class-methods-use-this': 'off',
    'dot-notation': 'off', // Incompatible with TypeScript's noPropertyAccessFromIndexSignature option
    'import/extensions': ['error', 'ignorePackages', { ts: 'never', tsx: 'never' }],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'unknown'],
        pathGroups: [
          {
            pattern: '{@emotion,@storybook,@testing-library}/**',
            group: 'external',
            position: 'after'
          }
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
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
    'react/prop-types': 'off', // This is not needed as it is checked by TypeScript
    'react/react-in-jsx-scope': 'off'
  },
  ignorePatterns: ['vite.config.ts']
}
