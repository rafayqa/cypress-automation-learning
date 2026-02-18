import 'cypress-iframe';

describe("Handling iframes in cypress", function () {

  it("Count plan titles in iframe", function () {

    cy.visit(Cypress.env("url") + "/AutomationPractice/");

    cy.frameLoaded("#courses-iframe");

    cy.iframe("#courses-iframe").find("a[href*='mentorship']").eq(0).click();

    cy.iframe("#courses-iframe").find("h1[class*='pricing-title']").should("have.length", 2);

  });

})
