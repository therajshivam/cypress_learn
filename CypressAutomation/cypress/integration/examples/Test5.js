/// <reference types="Cypress" />

// 7. Handling child tab with combination of cypress and jQuery

describe('Handling Child Windows', function(){
    it('Should Handle Child Window', function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        // method 1. remove the target attribute
        // method 2. target href attribute, grab it and go to using cy.url() 

        // remove the target= _blank attribute so it opens in the same tab
        // cypress can run in same tab, so take the content into the same tab

        cy.get('#opentab').invoke('removeAttr', 'target').click()

        // cypress does not allow cross domain because of security issues and also due to how cypress is architecturally designed. Hence, we use cy.origin()
        cy.origin("https://www.qaclickacademy.com", () => 
        {
            cy.get(".navbar-nav > :nth-child(4) > a").click()
            cy.get('.mt-50 h2').should('contain', 'QAClick Academy')
        })
    })
})
