/// <reference types="Cypress" />

describe('ikea india website testing', ()=>{
    it ('first test case', ()=>{

        // page visit
        cy.visit('https://www.ikea.com/in/en/')
        

        // accept cookies, click on cookies button
        cy.get('#onetrust-accept-btn-handler').click()

        // navigate to login
        cy.get('.hnf-navbar__profile-link').click()

        // wait 
        cy.wait(30000)

        // sign up
        cy.get('#signup').click()
         
    })
})