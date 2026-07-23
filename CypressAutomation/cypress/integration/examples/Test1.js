// IntelliSense
/// <reference types="Cypress" / 


// cypress spec
describe("My first test suite", function () {
  it("My first testcase", function () {

    // write test steps here
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");

    cy.get('.search-keyword').type('ca')

    cy.wait(2000)

    // cy.get('.product').should('have.length', 4) -- failed because there were total 5 elements in which 1 was hidden.

    // Handling invisible elements.
    cy.get('.product:visible').should('have.length', 4)

    // parent-child chaining
    cy.get('.products').find('.product').should('have.length', 4)

      
    

  });
});

