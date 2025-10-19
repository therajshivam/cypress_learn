/// <reference types="Cypress" />

// 10. Handling Child Windows

describe('Handling Child Windows', function(){
    it('Should Handle Child Windows', function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        // like the child tabs, cypress cant handle child windows
        // method 2 : target href attribute, grab it and go to url

        // to get the attribute, we use jQuery method .prop()
        // .prop() get the value of the property 

        cy.get('#openwindow').then(function(el){
            const url = el.prop('href')
            cy.visit(url) // qaclickacademy.com

            cy.origin(url, ()=>{
                cy.get('div.sub-menu-bar a[href*="about"]').click()
            })
        })
    })
})
 