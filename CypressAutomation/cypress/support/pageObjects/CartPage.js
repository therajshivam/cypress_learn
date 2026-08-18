import ConfirmationPage from "./ConfirmationPage";

class CartPage {
  checkoutItems() {
    // click button and navigate to next page
    cy.contains("button", "Checkout").click();
    return new ConfirmationPage()
  }

  sumOfProducts() {
    // requirement : check sum of products not exceeding 2,00,000
    let sum = 0;
    return cy.get("tr td:nth-child(4) strong")
      .each(($el) => {
        // ₹. 65000 -> 65000
        const amount = Number($el.text().split(" ")[1].trim());
        sum = sum + amount;
      })
      .then(() => {
        return sum;
      });
  }
}

export default CartPage;
