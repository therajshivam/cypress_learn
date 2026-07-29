/// <reference types="Cypress" />

describe("ui testing", function () {
  it("ui testing", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    // Checkbox
    // checked, assertion, validate the property of this checkbox: whether the value is associated with or not
    cy.get("#checkBoxOption1").check().should("be.checked").and("have.value", "option1");
    // for writng multiple should - .and can be use second time (concatanation of assetion)

    // now uncheck it
    cy.get("#checkBoxOption1").uncheck().should("not.be.checked");

    // testing multiple checkboxes
    cy.get('input[type="checkbox"]').check(["option2", "option3"]);

    // Dropdowns
    // Static dropdowns using select command
    cy.get("select").select("option2").should("have.value", "option2");

    // Dynamic dropdowns using each command iteration
    cy.get("#autocomplete").type("ind");
    cy.get(".ui-menu-item div").each(($el, index, $list) => {
      if ($el.text() === "India") {
        cy.wrap($el).click();
      }
    });
    // type some letters, options will display, grab the common element of the options so that all the options will be part of an array, iterate each and every element and figure out which option want to select using text(), then click on it.
    cy.get("#autocomplete").should("have.value", "India");

    // Handling Visible and Invisible Elements using Assertions
    // task 1 : verify whether the editbox is in visible or not.
    cy.get("#displayed-text").should("be.visible");
    // task 2 : click on hide button, verify its disappear or not.
    cy.get("#hide-textbox").click();
    cy.get("#displayed-text").should("not.be.visible");
    // task 2 : click on show button, verify its appear back or not.
    cy.get("#show-textbox").click();
    cy.get("#displayed-text").should("be.visible");

    // Radio Buttons
    cy.get('[value="radio2"]').check().should("be.checked");
    // .should("be.checked") -- be inside should is used to get the behaviour assertion.
  });
});
