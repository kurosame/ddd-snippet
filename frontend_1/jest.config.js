module.exports = {
  transform: { '^.+\\.ts$': 'ts-jest' },
  moduleNameMapper: { '^@/(.*)$': '<rootDir>/src/$1' },
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/application/**/*.ts', '<rootDir>/src/domain/**/*.ts'],
  coverageDirectory: '<rootDir>/coverage',
  coverageReporters: ['html'],
  verbose: true
}
