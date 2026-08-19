const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 6000, // change timeout for entire framework by overidding the default 4 sec.
  // allowCypressEnv: false,

  env: {
    url : "https://rahulshettyacademy.com/"
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/examples/*.js'
  },
});

