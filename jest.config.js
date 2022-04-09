
const path = require('path');

module.exports = {
  verbose: true,
  rootDir: path.join(__dirname),
  moduleFileExtensions: ['js', 'vue'],
  collectCoverage: false,
  collectCoverageFrom: ['<rootDir>/src/**/*.js', '!**/node_modules/**'],
  coverageReporters: ['html', 'text-summary']
}
