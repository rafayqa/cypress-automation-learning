/// reference types="cypress" />

describe("Seventh Test Suite", function () {
  // Second Test Case
  it("handling mouse hover in cypress", function () {
    // cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.visit(Cypress.env("url") + "/AutomationPractice/");

    //Both are these ways to handle mouse hover
    //either we can use invoke to show hidden elements or we can use force:true in click method
    // cy.get(".mouse-hover-content").invoke("show");
    cy.contains("Top").click({force: true});
    cy.url().should("include", "top")


  })

});