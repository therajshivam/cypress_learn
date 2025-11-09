const { defineConfig } = require("Cypress");

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
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },

    specPattern: "cypress/integration/examples/*.js",
  },
});
