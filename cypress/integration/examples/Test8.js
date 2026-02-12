/// reference types="cypress" />

describe("Eight Test Suite", function () {
  // Second Test Case
  it("handling child window concept in cypress", function () {
    // cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.visit(Cypress.env("url") + "/AutomationPractice/");
    cy.get('#opentab').then(function(el){
      const url = el.prop('href')
      cy.log(url)
      cy.visit(url)
      cy.origin(url, () => {
        cy.get('div.navbar-collapse a[href*="about"]').click()
      })
      
    });

    
    

  })

});