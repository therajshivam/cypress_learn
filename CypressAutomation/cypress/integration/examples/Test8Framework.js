/// <reference types="Cypress" />

describe('e2e ecommerce testing', () => {

    it('submit order', () => {

        // Login
        cy.visit('https://rahulshettyacademy.com/loginpagePractise/');
        cy.get('#username').type("rahulshettyacademy")
        cy.get('#password').type('Learning@830$3mK2')
        cy.contains('Sign In').click()

        // Assertion of the next page
        cy.contains('Shop Name').should('be.visible')

        // validate/check 4 product carts on the page 
        cy.get('app-card').should('have.length', 4)

        // select product dynamically using .filter()
        const productName = 'Nokia Edge'
        cy.get('app-card').filter(':contains(productName)')


    })
})