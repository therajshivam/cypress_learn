/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'


// 8. Handling Frames

describe('Handling Frames', function(){
    it('Should Handle Frames', function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        
        // first install plugin using npm install -D cypress-iframe

        cy.frameLoaded("#courses-iframe") // giving knowledge about iframe mode

        // switch to iframe mode
        cy.iframe().find('a[href*="mentorship"]').eq(0).click()
        cy.wait(6000)

        cy.iframe().find("h1[class*='pricing-title']").should('have.length', 2)

    })
})
 