/// <reference types="Cypress" />

// 12. Handling Calenders

describe('Handling Calenders', function(){
    it('Should Handle Calenders', function(){

        const monthNumber = "6"
        const date = "15"
        const year = "2027"

        const expectedList = [monthNumber, date, year]

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/offers')

        cy.get('.react-date-picker__inputGroup').click()
        cy.get('.react-calendar__navigation__label__labelText--from').click()
        cy.get('.react-calendar__navigation__label__labelText--from').click()

        cy.contains('button', year).click() 

        cy.get(".react-calendar__year-view__months__month").eq(Number(monthNumber) - 1).click()

        cy.contains('abbr', date).click() 

        // assertion
        cy.get(".react-date-picker__inputGroup__input").each(($e1, index) => {
            cy.wrap($e1).invoke('val').should('eq',expectedList[index])
        })

    })
})
 