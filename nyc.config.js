module.exports = {
  'check-coverage': true,
  include: ['server/**/*'],
  exclude: ['**/*.test.js'],
  branches: 20,
  lines: 20,
  functions: 20,
  statements: 20,
  reporter: ['html', 'json', 'text']
};
