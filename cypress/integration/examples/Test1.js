/// <reference types="cypress" />

describe('First Test Suite', function () {
   //First Test Case 
   it('My First Test Case', function () {
      // cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

      cy.visit(Cypress.env('url') + "/seleniumPractise/#/")
      cy.get('.search-keyword').type('ca')
      cy.wait(2000);
      cy.get('.product:visible').should('have.length', 4)

      //Parent child chaining

      //Aliasing 
      cy.get('.products').as('productLocator')

      cy.get('@productLocator').find('.product').should('have.length', 4)

      // Second element selection and adding to cart 

      cy.get('@productLocator').find('.product').eq(1).contains('ADD TO CART').click().then(function () {
         console.log("Second element added to cart!");
      })

      // Perform the actiuon based on the text 
      cy.get('@productLocator').find('.product').each(($el, index, $list) => {
         const requireText = $el.find('h4.product-name').text();

         if (requireText.includes('Cashews')) {
            //   cy.wrap($el).find('button').click();
            //Two methods to do same thing but contains is more powerful if that product has more buttons than the add to cart button 
            cy.wrap($el).contains('ADD TO CART').click();

            //Let's test the assertion 
            cy.get('.brand').should('have.text', 'GREENKART');

            //Let's get the logo and perform some assertion
            cy.get('.brand').then(function (logofelement) {
               cy.log(logofelement.text());

            })
            //const logo=cy.get('.brand')
            //cy.log(cy.get('.brand').text())
            // cy.log(logo.text())

         }
      })
   })


});