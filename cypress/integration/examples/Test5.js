describe('Fourth Test Suite', function () {
   //First Test Case 
   it('Handling child windows in cypress', function () {
      // cy.visit('https://rahulshettyacademy.com/AutomationPractice/') 
      cy.visit(Cypress.env('url') + "/AutomationPractice/")
      // Removing target attribute using invoke and click
      cy.get('#opentab').invoke('removeAttr', 'target').click()
      // Handling the cross origin issues and how to solve it using cy.origin() method
      cy.origin('https://www.qaclickacademy.com', () => {
         
         cy.get('#navbarSupportedContent a[href ="about.html"]').click()

         cy.get('.section-title h2').should('contain', 'Welcome to QAClick Academy ')

         cy.go('back')
      })
      
    
   })
});