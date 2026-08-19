const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "tkn1df", // for cypress cloud
  defaultCommandTimeout: 6000, // change timeout for entire framework by overidding the default 4 sec.
  // retries: {
  //   runMode: 1
  // }, // for rerun the failed tests as to ensure its not env or app failiure.
  // allowCypressEnv: false,
  reporter: 'cypress-mochawesome-reporter',

  env: {
    url : "https://rahulshettyacademy.com/"
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern: 'cypress/integration/examples/*.js'
  },
});

