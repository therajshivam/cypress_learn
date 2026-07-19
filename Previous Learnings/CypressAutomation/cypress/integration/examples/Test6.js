/// <reference types="Cypress" />

// 8. Handling Web tables with Cypress using each command

describe('Handling Web tables', function(){
    it('Should Handle Web tables', function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('.table-display tr td:nth-child(2)').each(($e1, index, $list) => {

            const text = $e1.text()
            if (text.includes("Master Selenium Automation in simple Python Language")) {

                // .next to go to immediate next sibling
                // .next() should be used with .get() only
                cy.get('.table-display tr td:nth-child(2)').eq(index).next().then(function(price){
                    const priceText = price.text()
                    expect(priceText).to.equal('25')
                })

            }

        })

    })
    
})
