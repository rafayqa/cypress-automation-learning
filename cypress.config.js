const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  createEsbuildPlugin,
} = require("@badeball/cypress-cucumber-preprocessor/esbuild");

async function setupNodeEvents(on, config) {
  require('cypress-mochawesome-reporter/plugin')(on);
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin(config)],
    })
  );
  return config;
}

  module.exports = defineConfig({
    defaultCommandTimeout: 6000,
    env: {
      url: "https://rahulshettyacademy.com",
    },
    retries: {
      runMode: 1,
    },
    projectId: "r3x3eq",
    reporter: 'cypress-mochawesome-reporter',
    e2e: {
      chromeWebSecurity: false,
      setupNodeEvents,
      specPattern: 'cypress/integration/examples/BDD/*.feature'
    },
  });

  // Json file --> cucumber html plugin --> html report
