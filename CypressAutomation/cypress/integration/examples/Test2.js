// IntelliSense
/// <reference types="Cypress" / 


// Cypress Spec
describe("My second test suite", function () {
  it("My second testcase", function () {

    // Write Test Steps Here
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get('.search-keyword').type('ca')
    cy.get('.products').as('productLocator')

    cy.get('@productLocator').find('.product').each(($el, index, $list) => {
      const textVeg = $el.find('h4.product-name').text()
      if(textVeg.includes('Cashew')) {
        cy.wrap($el).find('button').click()
      }
    }) 

    // task : select the bag and see what items added to the cart and click on the proceed to checkout. next page click on place order.
    cy.get('.cart-icon > img').click()
    cy.contains('PROCEED TO CHECKOUT').click()
    cy.contains('Place Order').click()


  });
});

