const { defineConfig } = require("Cypress");

module.exports = defineConfig({
  // global timeout change
  defaultCommandTimeout: 10000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/integration/examples/*.js",
  },
});
