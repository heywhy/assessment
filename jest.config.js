module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./test/jest.setup.js'],
  moduleNameMapper: {
    '^components(.*)$': '<rootDir>/src/components$1',
    '^hooks(.*)$': '<rootDir>/src/hooks$1',
    '^layout(.*)$': '<rootDir>/src/layout$1',
    '^models(.*)$': '<rootDir>/src/models$1',
    '^pages(.*)$': '<rootDir>/src/pages$1',
    '\\.css$': '<rootDir>/__mocks__/styleMock.js',
  },
}
