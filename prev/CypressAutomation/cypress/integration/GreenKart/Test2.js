/// <reference types="Cypress" />

describe('Second Test Suit', function(){
    it('Second Test Case', function(){

        // open website
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        // go to searchbox and type 'ca' string
        cy.get('.search-keyword').type('ca')

        // select cashews and add to cart
        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product').each(($el, index, $list) => {
            const textVeg = $el.find('h4.product-name').text()
            if (textVeg.includes('Cashews')) {
                cy.wrap($el).find('button').click()
            }
        })

        // select cart and getting inside it
        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()

    })
})