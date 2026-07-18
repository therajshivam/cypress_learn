# Module 1

## Cypress Introduction

**What is Cypress?**  
Cypress is a JavaScript-based end-to-end testing framework that runs directly inside the browser to automate testing of modern web applications.

**How Cypress is Unique from other automation tools?**

1. **Automatic Waiting:** Cypress automatically waits for commands and assertations before moving on. No more async hell.  
   Ex: If a link button is disabled. And get clickable after few seconds. Cypress wait to check for it to get enabled to check.  
   Default timeout is of 4 seconds. But it can be manually increase or decrease. Cypress retries commands, not just waits.

2. **Mocking Server Response:** Ability to test edge test cases by mocking the server response.

3. **Snapshot:** Cypress takes snapshot as the tests run.

4. **Faster Execution:** Cypress executes test code inside the browser instead of communicating with it over a remote driver, making execution faster and more reliable.

5. View video of the entire tests execution when run from the Cypress Dashboard.

**_Few things:_**  
Cypress is built on Node.js and comes packed as an npm module.

As it is built on Node.js, it uses Javascript for writing test cases. But cypress provides hundreds of built-in commands that reduce the amount of JavaScript developers need to write.

Cypress also bundles with jQuery and inherits many of its methods for UI components identification. Many Cypress commands behave similarly to jQuery selectors.

## Cypress Architecture

![Cypress Architecture Diagram](./cypress-architecture.png)

Most testing tools (like Selenium) operate by running outside of the browser and executing remote commands across the network. But Cypress engine directly operates inside the browser. In other words, is the browser that is executing your test code.

This enables Cypress to listen and modify the browser behavior at run time by manipulating DOM and altering Network requests and responses on the fly.

Cypress open doors to New Kind of testing (unit testing, integration test, e2e testing, etc) with Having ultimate control over your application (front and back).

**Cypress Browser Support**

- Chrome
- Chromium
- Electron
- Firefox
- Edge

**Cypress Components**

- Test Runner
- Dashboard Service
