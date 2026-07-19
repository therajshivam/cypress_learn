# Module 5

## Cypress Locators

**How to identify elements in the page?**

> Cypress uses **jQuery selectors** under the hood, so you can use **CSS selectors**.  
> To locate any element on a webpage, we use CSS selector properties.

| CSS Selector                | Syntax                                | Example                |
| --------------------------- | ------------------------------------- | ---------------------- |
| **By ID (`#id`)**           | `#idName` <br> `tagName#idName`       | `#search`              |
| **By Class (`.className`)** | `.className` <br> `tagName.className` | `.search-keyword`      |
| **By Tag & Attribute**      | `tagName[attribute=value]`            | `input[type="search"]` |
| **Parent → Child**          | `parent child`                        | `form input`           |
| **nth-child**               | `parent:nth-child(n)`                 | `tr td:nth-child(2)`   |

---

> Cypress Test Runner includes a built-in Selector Playground that helps generate locators automatically.

Add IntelliSense in cypress  
`/// <reference types="Cypress" / `

## Assertion

It checks whether the previous command returned the expected result.

`.should()`: It is a Cypress assertion command used to verify that the result of the previous command matches an expected condition. It automatically retries until the assertion passes or the command times out.  
We can chain multiple assertions.  
It comes from chai library.

## Handling Invisble Elements

Cypress interacts only with **visible** elements by default.

To select only visible elements:

```Javascript
cy.get('.product:visible')
```

---

Code:

```Javascript
describe("My first test suite", function () {
  it("My first testcase", function () {
    // write test steps here
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");

    cy.get('.search-keyword').type('ca')

    cy.wait(2000)

    // cy.get('.product').should('have.length', 4)
    // failed because there were total 5 elements in which 1 was hidden.
    
    // Handling invisible elements.
    cy.get('.product:visible').should('have.length', 4)
  });
});
```

- `cy.visit('url')` : navigating to URL / opens website.

- `cy.get('.classname')` : to get the locator present on webpage.

- `.type('ca')` : to type something.

- `.should('have.length', 4)` : assertion to verify length as how many such item present.

- `cy.wait(2000)` : will wait for 2 seconds.

- `cy.get('.product:visible')` : retrieves/ captures only visible elements
