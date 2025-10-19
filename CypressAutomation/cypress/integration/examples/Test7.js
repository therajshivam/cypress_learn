/// <reference types="Cypress" />

// 9. Handling Mouse Hover Pop-ups 

describe('Handling Mouse Hover Pop-ups', function(){
    it('Should Handle Mouse Hover Pop-ups', function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        // no direct support to handle mouse hover popups in cypress 
        // but in jQuery there is a method show()
        // show() method is use to display the hidden and selected elements
        // show method should be applied on immediate parent of hidden element

        cy.get("div.mouse-hover-content").invoke('show')
        cy.contains('Top').click()
        cy.url().should('include','top')

        // another method using .click() method using {force: true} inside it
        cy.contains('Top').click({force: true})
        cy.url().should('include','top')

    })
})
 