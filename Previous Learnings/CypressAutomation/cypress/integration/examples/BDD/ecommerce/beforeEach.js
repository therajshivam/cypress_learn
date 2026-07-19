beforeEach(function () {
    // runs once before all the tests in this block
    cy.fixture("example").then(function (data) {
      this.data = data;
    });
  }); 