import CartPage from "./CartPage";

class ProductPage {
  pageValidation() {
    // Assertion of the next page
    cy.contains("Shop Name").should("be.visible");
  }

  getCardCount() {
    // validate/check 4 product carts on the page
    return cy.get("app-card");
  }

  selectFirstProduct() {
    // add the first item in cart directly
    cy.get("app-card").eq(0).contains("button", "Add").click();
  }

  navigateToCart() {
    // click on checkout to redirected to cart page
    cy.contains("a", "Checkout").click();
    return new CartPage();
  }

  selectProduct(productName) {
    // select product dynamically using .filter() and add to cart
    cy.get("app-card")
      .filter(`:contains("${productName}")`) // :contains("${productName}") -> jquery method
      .then(($element) => {
        cy.wrap($element).should("have.length", 1); // assertion
        cy.wrap($element).contains("button", "Add").click(); // select product
      });
  }
}

export default ProductPage;
