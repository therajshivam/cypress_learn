/// <reference types="Cypress" />

import HomePage from "../../support/pageObjects/HomePage";

describe("e2e ecommerce testing", () => {
  before(function () {
    // runs once before all tests in this block
    cy.fixture("example").then(function (data) {
      this.data = data;
      this.homepage = new HomePage();
    });
  });

  it("submit order", function () {
    const productName = this.data.productName;

    // 1. login page
    // const homepage = new HomePage() // object
    this.homepage.navigate("https://rahulshettyacademy.com/loginpagePractise/");
    // cy.log(this.data.username) // inspect - outputs in the log
    const productpage = this.homepage.login(
      this.data.username,
      this.data.password,
    );

    // 2. product page
    productpage.pageValidation();
    productpage.getCardCount().should("have.length", 4);
    productpage.selectProduct(productName);
    productpage.selectFirstProduct();
    const cartpage = productpage.navigateToCart();

    // cy.pause() // for debugging - pause the test and wait for user input to continue; when issue fixed remove it

    // 3. cart page
    cartpage.sumOfProducts().then(function (sum) {
      expect(sum).to.be.lessThan(200000);
    });

    const confirmationpage = cartpage.checkoutItems();

    // 4. purchase page
    confirmationpage.submitFormDetails()
    confirmationpage.getAlertMessage().should("contain", "Success");
  });
});
