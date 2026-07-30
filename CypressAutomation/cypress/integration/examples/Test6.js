/// <reference types="Cypress" />

describe('ui testing', function () {
    it('ui testing', function () {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

        cy.get('.test').find('.test2')

    })
})