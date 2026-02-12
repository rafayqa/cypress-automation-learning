describe('Sixth Test Suite', function () {
   //First Test Case 
   it('handling lists in cypress', function () {
      // cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
      cy.visit(Cypress.env('url') + "/AutomationPractice/") 
      cy.get('tr td:nth-child(2):visible').each(($el, index, $list) => {
         const text = $el.text()
         
         if(text.includes("Python")){
            // extracting and moving with siblings elements (i.e desc & price)
            cy.get('tr td:nth-child(2):visible').eq(index).next().then(function(price){
               const priceText = price.text()
               expect(priceText).to.equal('25')
            })

         }

      })
    
   })
});