/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import "cypress-iframe";

describe("ui testing", function () {
  // it('ui testing', function () {
  //     cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

  //     // Child Window
  //     // grab href attribute using jquery method prop(), cy.visit(url)
  //     // .prop() - jquery method to gets the value of the property
  //     cy.get('#opentab').then(function(el){
  //         const url = el.prop('href')
  //         cy.visit(url) // new domain
  //         cy.origin(url, () => {
  //             // do all testing of new domain inside this scope.
  //         })

  //     })
  //     // this will not work as cypress restricts to open another domain website from the main domain.
  //     // fix this using cy.origin()

  // note to self : rahul shetty's website is legacy now, apply on another website
  // })

  it("handling frames", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    // Handling Frames
    // frame is a html document. which is embedded on another html document.

    // for handling iframes, get one npm plugin - (npm install -D cypress-iframe)
    // then - import this package. - (import 'cypress-iframe')
    // with its intellisense. - (/// <reference types="cypress-iframe" />)

    cy.frameLoaded("#courses-iframe");

    cy.iframe().find("a[href*='mentorship']").eq(0).click();

    cy.iframe().find("h1[class*='pricing-title']").should("have.length", 2);

    // note to self : this way is onload, mordern cypress which is 15+ uses origin() , learn after this course
  });
});
