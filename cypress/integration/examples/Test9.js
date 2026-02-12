import 'cypress-iframe';

describe("Handling iframes in cypress", function () {

  it("Count plan titles in iframe", function () {

    cy.visit(Cypress.env("url") + "/AutomationPractice/");

    cy.frameLoaded("#courses-iframe");

    // Step 1: Click Mentorship
    cy.iframe("#courses-iframe")
      .find(".main-menu .navbar-collapse ul li a").contains("Mentorship")
      .click();

    // Step 2: Wait for iframe to reload
    cy.frameLoaded("#courses-iframe");

    // Step 3: Re-query iframe AFTER navigation
    cy.iframe("#courses-iframe")
      .find('.pricing-title', { timeout: 20000 })
      .should('have.length', 2)
      .each(($el, index) => {
        cy.log(`Plan ${index + 1}: ${$el.text()}`);
      });

  });

});
