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
1. `cypress/fixtures`: Folder to store test data(excel, xml or json). Test data should not be hardcoded. We can get data from fixture folder using `fixture` command.  

2. `cypress/integration/examples`: `integration` folder, here all the tests written.

3. `cypress/plugins`: Plugins are like listeners. What to do before the event is happening or what after event happened. onBrowserInvoke. Not suggested to use.

4. `cypress/support`: Write here customised commands. These are reusable methods. Write a utility and place that method so all test cases use these method.

5. `node_modules`: Created when npm install cypress will install.

6. `cypress.config.js`: Auto generated file when open cypress test runner. It is config file for entire framework. Set properties for how the entire cypress test sould behave. There is an `e2e` object to store properties. We can override project setting default properties through this.