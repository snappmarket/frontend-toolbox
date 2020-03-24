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
    '!scripts',
    '!*.config.js',
  ],
  rootDir: process.cwd(),
  roots: ['<rootDir>'],
  testPathIgnorePatterns: ['<rootDir>/.docz'],
  transform: { '.js$': ['babel-jest', { rootMode: 'upward' }] },
  coveragePathIgnorePatterns: ['<rootDir>/scripts'],
  coverageReporters: ['json', 'lcov', 'clover', 'html', 'text'],
  coverageThreshold: {
    global: {
      branches: 35,
      functions: 35,
      lines: 35,
      statements: 35,
    },
  },
  // testPathIgnorePatterns: ['<rootDir>/packages/(?:.+?)/lib/'],
};
