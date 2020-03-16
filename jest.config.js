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
      branches: 40,
      functions: 40,
      lines: 40,
      statements: 40,
    },
  },
  // testPathIgnorePatterns: ['<rootDir>/packages/(?:.+?)/lib/'],
};
