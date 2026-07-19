# Module 4

## Cypress Test Runner

```bash
npx cypress run
# or
.\node_modules\.bin\cypress open
```

- `cypress.config.js` , `cypress\support\e2e.js` , `cypress\support\command.js` and `cypress\fixtures\example.json`. These Configuration files added by cypress.

- Select electron browser.

- Create a folder and file of cypress spec.  
   Spec file means test file. `cypress\integration\examples\Test1.js`
  Write here your test cases.

- Setting `cypress.config.js` file to let know cypress where are the spec files.

```javascript
specPattern: "cypress/integration/examples/\*.js";
```

Setting the path (`cypress.config.js`):

```javascript
const { defineConfig } = require("cypress");
module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/integration/examples/\*.js",
  },
});
```

- Go to the testrunner and click on the spec file, and it start visually executing the test cases.

## Write Cypress basic test

Cypress recommends to use mocha framework.

Example:

```Javascript
describe('My First Test', () => {
  it('Visits the Kitchen Sink', () => {
    cy.visit('https://example.cypress.io')
  })
})
```

`describe`: It is the test suite. All the testcases should go inside this.

`it`: It is the testcase. We write here test steps. We can create different `it` blocks to write different testcases. All the test steps should go inside it.

`Test1.js`

```Javascript
describe("My first test suite", function () {
  it("My first testcase", function () {
    // write test steps here
  });
  it("My second test case", function () {
    // write test steps here
  });
});
```

## Write First Test

`cy` is a global command which will help to invoke any cypress command.

`.visit("url")` is a method which navigate a url.

```Javascript
describe("My first test suite", function () {
  it("My first testcase", function () {
    // write test steps here
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
  });
});
```

## Cypress tests headless and headed

Two modes to run cypress tests :

- head mode: Browser will open.
- headless mode: Runs in the command line, browser will not open. Default browser - electron.

`npx cypress open` for opening test runner and runnning tests there.

`npx cypress run` for running all the test directly in command line. Through command line, cypress always run in headless.

`npx cypress run --spec "cypress/integration/examples/Test1.js` for running only one spec file.

`npx cypress run --headed` run in browser mode.

`npx cypress run --browser chrome` changing browser in headless.

## Project Structure

1.  `cypress/fixtures`: Folder to store test data(excel, xml or json). Test data should not be hardcoded. Access fixture data using `cy.fixture()`.

2.  `cypress/e2e`: Contains all End-to-End (E2E) test files (spec files).  
    Older Cypress versions used `cypress/integration`.

3.  `cypress/support`: Contains reusable code shared across tests.
    - `command.js`: Custom Cypress commands.
    - `e2e.js`: Global setup executed before every spec (imports commands, global hooks, configuration).

4.  `node_modules`: ontains all installed npm packages, including Cypress.

5.  `cypress.config.js`: Auto generated file when open cypress test runner.  
    The main configuration file for the Cypress project. Used to configure settings such as:
    - Spec file location
    - Base URL
    - Viewport size
    - Timeouts
    - Screenshots & videos
    - Environment variables
    - Node event listeners (`setupNodeEvents()`)


        Set properties for how the entire cypress test sould behave. There is an `e2e` object to store properties. We can override project setting default properties through this.

> Legacy (Pre Cypress 10)
>
> - `cypress/integration` → Renamed to `cypress/e2e`
> - `cypress/plugins` → Removed. Plugin functionality is now handled inside `setupNodeEvents()` in `cypress.config.js`.   
