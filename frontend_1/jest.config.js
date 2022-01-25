module.exports = {
  transform: { '^.+\\.ts$': 'ts-jest' },
  moduleNameMapper: { '^@/(.*)$': '<rootDir>/src/$1' },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/application/**/*.ts',
    '<rootDir>/src/domain/**/*.ts',
    '<rootDir>/src/infrastructure/**/*.ts'
  ],
  coverageDirectory: '<rootDir>/coverage',
  coverageReporters: ['html'],
  verbose: true
}
