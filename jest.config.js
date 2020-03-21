console.log(process.cwd());

module.exports = {
  haste: {
    hasteImplModulePath: null,
  },
  cacheDirectory: '.jest-cache',
  coverageDirectory: '.jest-coverage',
  moduleFileExtensions: ['js'],
  collectCoverageFrom: [
    '**/*.js',
    '!**/node_modules/**',
    '!**/vendor/**',
    '!**/dist/**',
    '!.docz',
  ],
  rootDir: process.cwd(),
  roots: [ '<rootDir>'],
  transform: { '.js$': ['babel-jest', { rootMode: 'upward' }] },
  testPathIgnorePatterns: ['<rootDir>/.docz'],
  // coveragePathIgnorePatterns: ['<rootDir>/packages/(?:.+?)/lib/'],
  coverageReporters: ['html', 'text'],
  coverageThreshold: {
    global: {
      branches: 15,
      functions: 15,
      lines: 15,
      statements: 15,
    },
  },
  // testPathIgnorePatterns: ['<rootDir>/packages/(?:.+?)/lib/'],
};
