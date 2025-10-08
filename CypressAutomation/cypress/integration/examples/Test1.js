/// <reference types="Cypress" />

// cypress code
// this test file is called spec 
// in js terminology any test file is called as spec file

// describe('My First Test', () => {
//   it('Does not do much!', () => {
//     expect(true).to.equal(true)
//   })
// })

describe('First Test Suit', function () {
    it('First Test Case', function(){
        // test steps
        // open a website
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        // selenium get hit url in browser, cypress get acts like findElement of selenium
        cy.get('.product').should('have.length',5);
        cy.get('.product:visible').should('have.length',4);

        // parent child chaining
        cy.get('.products').find('.product').should('have.length',4)
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()

        // Dynamically
        // Iterate over an array of DOM elements
        cy.get('.products').find('.product').each(($el, index, $list) => {
            const textVeg = $el.find('h4.product-name').text()
            if (textVeg.includes('Cashews')) {
                cy.wrap($el).find('button').click() // resolve promise using wrap
            }
        })  

        // promise resolution
        // const logo = cy.get('.brand')
        // cy.log(logo.text())

        cy.get('.brand').then(function(logoelement){
            cy.log(logoelement.text())
        })

        // alias : declaraing a var
        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click()

        // diff bw log and console log
        
    })

    // fixtures
} )   

