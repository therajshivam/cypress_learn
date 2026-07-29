/// <reference types="Cypress" />

describe("ui testing", function () {
  it("web table", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    // Handling Web Tables
    // task : check in the table, whether price is 25 for 'Master Selenium Automation in simple Python Language' course or not. validate it.
    // Scan the entire course column, find this course, once get the course row, then move to the next sibling column of same row and get price column of the course and validate it.

    cy.get("tr td:nth-child(2)").each(($el, index, $list) => {
        const text = $el.text();
        if (text.includes('Python')) {
            // how to get price here (sibling)
            // .next() - get the immediately following sibling of each DOM element within a set of DOM elements.
            cy.get("tr td:nth-child(2)").eq(index).next().then( function(price) {
              const priceText = price.text()
              expect(priceText).to.equal('25')
            })
            // cannot directly concatenate .text() as its jquery method and first we have to resolve the promise. to this .then() is used here.
        }
        // main challenge to find the locator so that iterate over the whole column.
        // traverse to sibling with next() and it works only on get.
    });
  });

  it("mouse hover", function(){
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");


    // Mouse hover menu list

    // task: verify the menu list is displayed when mouse hover and click on 'Top' button. (use jquery method)
    // cypress excusively dont have command to handle it, here jQuery methods will use for handling this.
    // "show" method to trigger mouse hover menu list.
    // "show" method should be applied on immediate parent of hidden element. 
    // how to invoke any functionof jquery using cypress? - .invoke()
    cy.get('div.mouse-hover-content').invoke('show')
    cy.contains('Top').click()
    cy.url().should("include", "top")


    // task : only to click on the 'Top', dont care about the mousehover is happening or not. (use .click forcely)
    // cypress .click() command have ability to click on hidden elements.
    // use it by forcing it.
    // Forcing a click overrides the actionable checks Cypress applies and will automatically fire the events.
    cy.contains('Top').click({ force: true})
    cy.url().should("include", "top")


    // mousehover events are not supported in cypress, alternatively use jquery or force click.

  })

});
