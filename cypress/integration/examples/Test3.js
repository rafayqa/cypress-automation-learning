/// <reference types="cypress" />

describe('Third Test Suite', function () {
   //First Test Case 
   it('My Third Test Case', function () {
      // cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
      cy.visit(Cypress.env('url') + "/AutomationPractice/")

      cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1'); 
      cy.get('#checkBoxOption1').uncheck().should('not.be.checked');
      cy.get('input[type="checkbox"]').check(['option1','option3']);

      //selecting an option from a static dropdown they all start with <select> tag so we can target them easily using select tag
      cy.get('select').select('option2').should('have.value','option2');

      //Dyanamic dropdown
      /*
      Dynamic Drop-down (Get the drop-down and type something ) then you have to check common attribute of the options
      then we have to iterate it through the option and select and click our desired option 
      
      */
      // cy.get('#autocomplete').type('ind')

      // cy.get('.ui-menu-item div').each(($el,index,$list) => {
      //    if($el.text() === "India"){
      //       cy.wrap($el).click()
      //    }
      // })
     
      cy.get('#autocomplete').type('chi')

      cy.get('.ui-menu-item div').each(($e1,index,$list)=>{
         if($e1.text() === "China"){
            cy.wrap($e1).click()
         }
      })

      cy.get('#autocomplete').should('have.value','China');

      //Dealing with visibility and invisibility of an element
      //Vsibility by default the element is visible
      cy.get('#displayed-text').should('be.visible');

      //Hiding the element and verifying its invisibility
      cy.get('#hide-textbox').click();
      cy.get('#displayed-text').should('not.be.visible');

      //Showing the element and verifying its visibility
      cy.get('#show-textbox').click();
      cy.get('#displayed-text').should('be.visible');

      //Dealing with Radio Buttons 
      cy.get('input[value="radio1"]').check().should('be.checked');


})
});