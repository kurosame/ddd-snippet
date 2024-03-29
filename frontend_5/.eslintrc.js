module.exports = {
  env: { browser: true },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'next/core-web-vitals',
    'prettier'
  ],
  plugins: ['react', 'react-hooks'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: { jsx: true },
    project: './tsconfig.json'
  },
  settings: {
    react: { version: 'detect' }
  },
  rules: {
    '@typescript-eslint/no-misused-promises': ['error', { checksVoidReturn: false }],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'unknown'],
        pathGroups: [
          {
            pattern: '{a}/**',
            group: 'external',
            position: 'after'
          }
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true }
      }
    ],
    'no-console': ['error', { allow: ['info', 'warn', 'error'] }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn'
  },
  ignorePatterns: ['**/*.js']
}
