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

    // cy.get('.products').find('.product') -- this will return a array of the products.

    // task : out of four products, add to cart the third product.
    cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()

    // task : get all the products with the text, only if it is Cashews, then add to the cart.
    cy.get('.products').find('.product')
    .each(($el, index, $list) => {
      const textVeg = $el.find('h4.product-name').text()
      if(textVeg.includes('Cashew')) {
        cy.wrap($el).find('button').click()
      }
    }) 



  });
});

