// IntelliSense
/// <reference types="Cypress" / 


// Cypress Spec
describe("My first test suite", function () {
  it("My first testcase", function () {

    // Write Test Steps Here
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");

    cy.get('.search-keyword').type('ca')

    cy.wait(2000)

    // cy.get('.product').should('have.length', 4) -- failed because there were total 5 elements in which 1 was hidden.

    // Handling invisible elements.
    cy.get('.product:visible').should('have.length', 4)

    // Parent-Child Chaining
    cy.get('.products').find('.product').should('have.length', 4)

    // cy.get('.products').find('.product') -- this will return a array of the products.

    // task : out of four products, add to cart the third product.
    cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()

    // Iteration
    // task : get all the products with the text, only if it is Cashews, then add to the cart.
    cy.get('.products').find('.product')
    .each(($el, index, $list) => {

      const textVeg = $el.find('h4.product-name').text()
      
      if(textVeg.includes('Cashew')) {
        // $el.find('button').click() -- use .wrap()
        cy.wrap($el).find('button').click()
      }
    }) 

    // JQuery vs Cypress Commands
    // task : print the title of the GREENKART page in logs.
    cy.get('.brand').then(function(logoelement){
      cy.log(logoelement.text())
    } )

    // task : assert if logo text is correctly displayed
    cy.get('.brand').should('have.text', 'GREENKART')

    // Aliases
    cy.get('.products').as('productLocator')
    cy.get('@productLocator').find('.product').should('have.length', 4)

    // task : select the bag and see what items added to the cart and click on the proceed to checkout. next page click on place order after validating.
    // continue this task in test 2.

  });
});

