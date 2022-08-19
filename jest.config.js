// Sync object
/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
    collectCoverage: true,
    verbose: true,
    testMatch: ['**/__tests__/*test.js?(x)'],
    testEnvironment: 'node',
    modulePathIgnorePatterns: ['<rootDir>/projects'],
    transform: {
        '\\.js$': '<rootDir>/node_modules/babel-jest',
    },
    setupFilesAfterEnv: ['<rootDir>/settings/setupTests.js'],
    testEnvironment: 'jsdom',
};

module.exports = config;
