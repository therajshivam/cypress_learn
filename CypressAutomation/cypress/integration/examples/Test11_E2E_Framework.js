/// <reference types="Cypress" />

describe('E2E Framework E-commerce Test', () => {
    it('Submit Order', function () {
        // Define the product we want to purchase
        const productName = "Nokia Edge"

        // Step 1: Login to the application
        cy.visit('https://rahulshettyacademy.com/loginpagePractise/')
        cy.get('#username').type('rahulshettyacademy')
        cy.get('#password').type('learning')
        cy.contains("Sign In").click()

        // Step 2: Verify successful login and product page load
        cy.contains("Shop Name").should("be.visible")
        cy.get('app-card').should('have.length', 4)  // Verify 4 products are displayed

        // Step 3: Find and add specific product to cart
        cy.get('app-card').filter(`:contains("${productName}")`)
        .then($element => {
            cy.wrap($element).should('have.length', 1)  // Verify product exists
            cy.wrap($element).contains('button', 'Add').click()  // Add to cart
        })
        // Add another product (first product) to cart
        cy.get('app-card').eq(0).contains('button', 'Add').click()
        cy.contains('a', 'Checkout').click()

        // Step 4: Validate cart total amount
        let sum = 0
        cy.get('tr td:nth-child(4) strong')
        .each($e1=>{
            // Extract price from text (format: ₹. 65000)
            const amount = Number($e1.text().split(" ")[1].trim())
            sum = sum + amount
        }).then(function () {
            // Verify total amount is less than 200000
            expect(sum).to.be.lessThan(200000)
        })
        cy.contains('button', 'Checkout').click()

        // Step 5: Complete purchase with delivery information
        cy.get('#country').type('India')
        cy.wait(5000)  // Wait for country suggestions to load
        cy.get('.suggestions ul li').click()  // Select country from suggestions
        cy.get('.btn-success').click()  // Place order

        // Step 6: Verify successful order placement
        cy.get('.alert-success').should('contain', 'Success')

    })
});