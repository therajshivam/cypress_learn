import ConfirmationPage from "./ConfirmationPage";

class CartPage {
  sumOfProducts() {
    let sum = 0;
    return cy.get("tr td:nth-child(4) strong")
      .each(($e1) => {
        // ₹. 65000
        const amount = Number($e1.text().split(" ")[1].trim());
        sum = sum + amount; // 65000 + 100000
      })
      .then(function () {
        return sum;
      });
  }

  checkoutItems() {
    cy.contains("button", "Checkout").click();
    return new ConfirmationPage();
  }
}

export default CartPage;
