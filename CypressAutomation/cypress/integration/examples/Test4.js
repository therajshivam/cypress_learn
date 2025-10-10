/// <reference types="Cypress" />

// Handling alerts and popups

describe('Fourth Test Suit', function(){
    it('Fourth Test Case', function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice')

        // 6. popups
        // cypress auto handles the pop up, no need to write any code
        // two types of pop ups : normal popups with ok button and confirm with ok or cancel popup

        cy.get('#alertbtn').click()
        cy.get('[value="Confirm"]').click()

        // cypress have capability browser events
        // window:alert = event
        // cy.on() to trigger any window event
        cy.on('window:alert',(str)=> {
            // mocha
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

        // window:confirm
        cy.on('window:confirm',(str)=> {
            // mocha
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })

    })
})
