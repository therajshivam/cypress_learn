/// <reference types="Cypress" />

// Handling web control ui

describe('Third Test Suit', function(){
    it('Third Test Case', function(){

        // open website
        cy.visit('https://rahulshettyacademy.com/AutomationPractice')
        
        // 1. checkbox examples
        // checking a checkbox
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        // .should() use to varifying item checked or not, inside it we will see behavior so use 'be'
        // for properties we use 'have'
        // to validate the property of this checkbox is option 1 or not
        // for multiple should we use .and()
        // unchecking a checkbox
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        // checking multiple checkboxes
        // search for a common property like here, it is 'type'
        cy.get('input[type="checkbox"]').check(['option2', 'option3'])

        // 2. static dropdown
        // it have select html tag
        cy.get('select').select('option2').should('have.value','option2' )

        // 3. dynamic dropdown
        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item div').each(($e1, index, $list) => {
            if($e1.text()==="India")
            {
                cy.wrap($e1).click()
            }
        })
        cy.get('#autocomplete').should('have.value', 'India')

        // 4. visible and invisible elements using assertion
        cy.get('#displayed-text').should('be.visible')

        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')

        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')


        // 5. radio button
        cy.get('[value="radio2"]').check().should('be.checked')

        // 

        
    })
})