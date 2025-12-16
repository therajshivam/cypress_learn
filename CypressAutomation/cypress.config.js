const { defineConfig } = require("Cypress");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@cypress/browserify-preprocessor");
const {
  preprendTransformerToOptions,
} = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);

      await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    browserify(preprendTransformerToOptions(config, browserify.defaultOptions)),
  );

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  // global timeout change
  defaultCommandTimeout: 10000,

  reporter: 'cypress-mochawesome-reporter', // https://www.npmjs.com/package/cypress-mochawesome-reporter

  env: {
    url : "https://rahulshettyacademy.com"
  },

  projectId: "akitc5",

  retries: {
    runMode: 1, 
},

  e2e: {
    setupNodeEvents,
    experimentalStudio: true,
    specPattern: "cypress/integration/examples/*.js",
    // specPattern: "cypress/integration/examples/BDD/*.feature",
  },
});

// message -> JSON file -> HTML
