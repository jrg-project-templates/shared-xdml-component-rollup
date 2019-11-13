const sveltePreprocess = require('svelte-preprocess');

module.exports = {
  transform: {
    "\\.js$": "babel-jest",
    "^.+\\.svelte$": ['jest-transform-svelte', { preprocess: sveltePreprocess(), noStyles: true}]
  },
  transformIgnorePatterns: ["/node_modules/"],
  moduleFileExtensions: [
    "js",
    "svelte"
  ],
  verbose: false,
  setupFilesAfterEnv: [
    "@testing-library/jest-dom/extend-expect"
  ],
  setupFiles: [
    '<rootDir>/src/test/setup.js'
  ]
}