/// <reference types="cypress" />

describe('Second Test Suite', function () {
   //First Test Case 
   it('My Second Test Case', function () {
      // cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
      cy.visit(Cypress.env('url') + "/seleniumPractise/#/")
      cy.get('.search-keyword').type('ca')
      cy.wait(2000);
   
      //Parent child chaining

      //Aliasing 
      cy.get('.products').as('productLocator')

      // Perform the actiuon based on the text 
      cy.get('@productLocator').find('.product').each(($el, index, $list) => {
         const requireText = $el.find('h4.product-name').text();

         if (requireText.includes('Cashews')) {
            //   cy.wrap($el).find('button').click();
            //Two methods to do same thing but contains is more powerful if that product has more buttons than the add to cart button 
            cy.wrap($el).contains('ADD TO CART').click();

         }
        
      })

       //Click on cart icon 
         cy.get('.cart-icon > img').click();
         //Click on Proceed to Checkout 
         cy.contains('PROCEED TO CHECKOUT').click();
         //Clicking on Place Order
         cy.contains('Place Order').click();
   })


});