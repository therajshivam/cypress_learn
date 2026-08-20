import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../../../support/pageObjects/HomePage";
const homePage = new HomePage();

Given("I am on Ecommerce Page", function () {
  homePage.navigate(Cypress.env("url") + "loginpagePractise/");
});

When("I login to the application", function () {
  this.productpage = homePage.login(this.data.username, this.data.password);
  this.productpage.pageValidation();
  this.productpage.getCardCount().should("have.length", 4);
});

When("I add items to Cart and checkout", function () {
  this.productpage.selectProduct(this.data.productName);
  this.productpage.selectFirstProduct();
  this.cartpage = this.productpage.navigateToCart();
});

When("Validate the total price limit", function () {
  this.cartpage.sumOfProducts().then(function (sum) {
    expect(sum).to.be.lessThan(200000);
  });
});

Then("select the country submit and verify Thankyou", function () {
  const confirmationpage = this.cartpage.checkoutItems();
  confirmationpage.submitFormDetails();
  confirmationpage.getAlertMessage().should("contain", "Success");
});
