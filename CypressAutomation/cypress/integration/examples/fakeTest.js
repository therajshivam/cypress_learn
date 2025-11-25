/// <reference types="Cypress" />

//  understood the Power of using CYpress in testing both Web (Front end) + API/XHR (Back End calls) for testing Edge case Scenarios .
// to mock response

describe("Api Test", function () {
  it("Api Test", function () {

    cy.visit('https://rahulshettyacademy.com/angularAppdemo/');


    // reuestObject: what to intercept
    // responseObject: how to mock the response
    cy.intercept(
      {
        // requestobject
        method: "GET",
        url: "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty",
      },

      {
        // responseobject
        statusCode: 200,
        body: [
          {
            "book_name": "RestAssured with Java",
            "isbn": "RSU",
            "aisle": "2301",
          },
        ],
      }
    ).as('bookretrievals')
    cy.get('button[class="btn btn-primary"]').click()
    cy.wait('@bookretrievals').then(({request, response})=>{

      cy.get('tr').should('have.length', response.body.length+1)
      
    })
    cy.get('p').should('have.text','Oops only 1 Book available')
    
    // validation with
    // length of response array = rows of table


  });
});