// API testing (basic) with Cypress without depending on Web(Front end) part.

describe("Api Test", function () {
  it("Api Test", function () {
    // cy.request(method, url, body)

    cy.request("POST", "http://216.10.245.166/Library/Addbook.php", {
      name: "Learn Appium Automation with Java",
      isbn: "bsddcds",
      aisle: "2856297",
      author: "John foe",
    }).then(function (response) {
      expect(response.body).to.have.property("Msg", "successfully added");
      expect(response.status).to.eq(200);
    });
  });
});
 