// jest.config.js

module.exports = {
  preset: 'ts-jest/presets/js-with-babel-esm',
  testEnvironment: 'node',
  testMatch: [
    '**/tests/**/*.ts', // TypeScript test files
    '**/tests/**/*.js', // JavaScript test files
  ],
};
