/// <reference types="cypress" />

describe('Fourth Test Suite', function () {
   //First Test Case 
   it('My Fourth Test Case', function () {
      // cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

      cy.visit(Cypress.env('url') + "/AutomationPractice/")

      //Get and click on Alert button 
      cy.get('#alertbtn').click()

      //Click the confirm button 
      cy.get('[value = "Confirm"]').click()

      //windows:alert event to handle alert box
      cy.on('window:alert', (str) => {

         //Mocha assertion
         expect(str).to.equal('Hello , share this practice page and share your knowledge')
      })

       cy.on('window:confirm', (str) => {
         //Mocha assertion
         expect(str).to.equal('Hello , Are you sure you want to confirm?')
         //Validating confirm button click behaviour
      })
      //confirming cancel button click behaviour  using a variable
      let cancelClicked = false

      cy.on('window:confirm', (text) => {
         cancelClicked = true
         return false   // Cancel
      })

      cy.then(() => {
         expect(cancelClicked).to.eq(true)
      })


   })
});