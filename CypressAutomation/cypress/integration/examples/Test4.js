/// <reference types="Cypress" />

describe("ui testing", function () {
  it("ui testing", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    // Popups (alert window)
    // // Cypress auto accepts alerts and popups, no need to write code, cypress auto click ok
    // We have two types of popups : 
                                    // - alert with one OK button
                                    // - confirm pop with OK and Cancel Button

    // Auto accepting
    cy.get('#alertbtn').click()
    cy.get('#confirmbtn').click()

    // Handling popups : check and validate alert texts
    // Cypress have capability to listen browser events.
    // In general there is an event called window:alert that triggers on the browser when any alert is open.
    // From cypress we can trigger this even from cypress, that popup will be captured then we can get the text present on the alert.
    // window:alert
    cy.on('window:alert', (str) => {
        // how to compare two strings in mocha
        expect(str).to.equal('Hello , share this practice page and share your knowledge')
    })
    
    // window:confirm
    cy.on('window:confirm', (str) => {
        // how to compare two strings in mocha
        expect(str).to.equal('Hello , Are you sure you want to confirm?')
    })



    
    // Handling Child Tabs
    // Cypress by default have its scope of testing only on the tab what initially use.
    // If a new tab is opened, then cypress can not switch to that tab on its own.
    // A new page opens because the developer decided to open the new page in a new tab using target=blank in html.
    // To handle this situaton, load the new child page in the same tab.
    // Using jquery method (which cypress supports), we remove target = black attribute in the runtime and invoke the dom again. This will open that page into the same tab.

    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.get('#opentab').invoke('removeAttr', 'target').click();

    // .invoke() invoke a jquery function on the previously yeilded subject.
    // this function helped to remove the attribute.
    // removeAttr - this will remove the attribute whichever provided here, at runtime.

    // An Error occured:
    // Cypress do not support cross origin. As long as same domain, no problem to cypress, if the domain is changed then cypress will not allow. 
    // To fix this : cy.origin() , it will take two parameters, first one is the new url, second parameter is a function - all the  testing doing on new url will be wrapped inside it. The moment come out of the function, then all the commands will run for the main domain.
    cy.origin('https://www.qaclickacademy.com/', () => {
        cy.get('#navbarSupportedContent a[href*="about.html"]').click()
    })
    // note to self : learnt the concept, but "https://www.qaclickacademy.com/" this url throws error because of bootstape error from the rahul shetty side, will apply this on another website while making project.

  });
});
