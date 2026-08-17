/// <reference types="Cypress" />

describe("e2e ecommerce testing", () => {
  it("submit order", () => {
    // 1. login page
    // Login
    cy.visit("https://rahulshettyacademy.com/loginpagePractise/");
    cy.get("#username").type("rahulshettyacademy");
    cy.get("#password").type("Learning@830$3mK2");
    cy.contains("Sign In").click();

    // 2. product page
    // Assertion of the next page
    cy.contains("Shop Name").should("be.visible");

    // validate/check 4 product carts on the page
    cy.get("app-card").should("have.length", 4);

    // select product dynamically using .filter() and add to cart
    const productName = "Nokia Edge";
    cy.get("app-card")
      .filter(`:contains("${productName}")`) // :contains(productName) -> jquery method
      .then(($element) => {
        cy.wrap($element).should("have.length", 1); // assertion
        cy.wrap($element).contains("button", "Add").click(); // select product
      });

    // add the first item in cart directly
    cy.get("app-card").eq(0).contains("button", "Add").click();

    // click on checkout to redirected to cart page
    cy.contains("a", "Checkout").click();

    // 3. cart page
    // requirement : check sum of products not exceeding 2,00,000

    // sum both products by picking its price and verify it fulfilling the requirement
    let sum = 0;
    cy.get("tr td:nth-child(4) strong")
      .each($el => {
        // ₹. 65000 -> 65000
        const amount = Number($el.text().split(" ")[1].trim());
        sum = sum + amount;
      })
      .then(() => {
        expect(sum).to.be.lessThan(200000);
      });

      // click button and navigate to next page
      cy.contains('button', 'Checkout').click()
    
    // 4. purchase page

    // dropdown country selection
    cy.get('#country').type('India')
    cy.wait(5000)
    cy.get('.suggestions ul li a').should('be.visible').click() // selects the first suggestion from the dropdown
    cy.get('.btn-success').click()

    // validate the purchase
    cy.get('.alert-success').should('contain', 'Success')
    
  });
});
