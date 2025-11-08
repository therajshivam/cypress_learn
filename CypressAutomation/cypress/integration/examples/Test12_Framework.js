/// <reference types="Cypress" />

import HomePage from "../../support/pageObjects/HomePage";

describe("E2E Framework E-commerce Test", () => {
  before(function () {
    // runs once before all the tests in this block
    cy.fixture("example").then(function (data) {
      this.data = data;
      this.homePage = new HomePage();
    });
  });

  it("Submit Order", function () {
    // test specific timeout change
    Cypress.config("defaultCommandTimeout", 10000);

    const productName = this.data.productName;

    cy.log(this.data.username)

    this.homePage.goTo("https://rahulshettyacademy.com/loginpagePractise/");
    const productPage = this.homePage.login(
      this.data.username,
      this.data.password
    );

    productPage.pageValidation();
    productPage.getCardCount().should('have.length', 4)
    productPage.selectProduct(productName);
    productPage.selectFirstProduct();
    const cartPage = productPage.goToCart();

    cartPage.sumOfProducts().then(function(sum)
    {
        expect(sum).to.be.lessThan(200000);
    })
    const confirmationPage = cartPage.checkoutItems()

    confirmationPage.submitFormDetails()
    confirmationPage.getAlertMessage().should("contain", "Success")
    
  });
});
