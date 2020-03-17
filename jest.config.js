module.exports = {
  haste: {
    hasteImplModulePath: null,
  },
  cacheDirectory: '.jest-cache',
  coverageDirectory: '.jest-coverage',
  moduleFileExtensions: ['js'],
  collectCoverageFrom: [
    'packages/*/packages/**/*.js',
    '!**/node_modules/**',
    '!**/vendor/**',
    '!**/dist/**',
    '!.docz',
  ],
  rootDir: process.cwd(),
  roots: ['<rootDir>/packages', '<rootDir>/scripts'],
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
