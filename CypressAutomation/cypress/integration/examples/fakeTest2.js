/// <reference types="Cypress" />

// to mock request

describe("Api Test", function () {
  it("Api Test", function () {

    cy.visit('https://rahulshettyacademy.com/angularAppdemo/');

    // cy.intercept(method, URL, routeHandler?)
    cy.intercept('GET', 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty', 
        (req)=> 
        {req.url="https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra"
        
        req.continue((res)=>
        {
            // expect(res.statusCode).to.equal(403)
        })
    }).as("dummyUrl")
    .get('button[class="btn btn-primary"]').click()
    .wait('@dummyUrl')
      


  });
});