class ConfirmationPage {
  submitFormDetails() {
    // dropdown country selection
    // cy.get("#country").type("India");
    // cy.get(".suggestions ul li a").should("be.visible").click(); // selects the first suggestion from the dropdown
    // cy.get(".btn-success").click();
    cy.submitFormDetails()
  }

  getAlertMessage() {
    return cy.get(".alert-success")
  }
}

export default ConfirmationPage;
