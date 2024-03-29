module.exports = {
  transform: { '^.+\\.tsx?$': 'ts-jest' },
  moduleNameMapper: { '^@/(.*)$': '<rootDir>/src/$1' },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/application/**/*.ts',
    '<rootDir>/src/components/hooks/**/*.ts',
    '<rootDir>/src/core/**/*.ts',
    '<rootDir>/src/domain/**/*.ts',
    '<rootDir>/src/infrastructure/**/*.ts',
    '<rootDir>/src/store/**/*.ts'
  ],
  coverageDirectory: '<rootDir>/coverage',
  coverageReporters: ['html', 'text-summary'],
  verbose: true
}
