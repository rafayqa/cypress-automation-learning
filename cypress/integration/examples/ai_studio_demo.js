describe("playing with ai studio",function () {
    it("test_cases for playing with ai studio",function () {
        //Login Page code 
        cy.visit('https://rahulshettyacademy.com/client')
        
        cy.get('#userEmail').type('qa@tester1.com');
        cy.get('#userPassword').type('Qa@tester4.com');
        cy.get('[name="login"]').click();

        //Dashboard Page Code 
        cy.get('#products div:nth-child(2) > div.card > div.card-body > button.w-10').click();
        cy.get('nav li:nth-child(4)').click();
        cy.get('button[routerlink="/dashboard/cart"]').click();
        cy.get('div.subtotal button.btn').click();
        cy.get('input[ngxtypeahead=""]').click();
        cy.get('input[ngxtypeahead=""]').type('india');
        cy.get('button:nth-child(3) span.ng-star-inserted').click();
        cy.get('input[ngxtypeahead=""]').should('have.value', 'India');
        cy.get('button.btn-primary').click();
        cy.get('[name="coupon"]').click();
        cy.get('[name="coupon"]').should('be.visible');
        cy.get('a.ng-star-inserted').click();
        cy.get('#htmlData button.btn').click();
        cy.get('#htmlData h1.hero-primary').click();
        //Confirmation page code 
        cy.get('#htmlData h1.hero-primary').should('have.text', ' Thankyou for the order. ');
        // cy.get('#htmlData tr.ng-star-inserted td.em-spacer-1').click();
        // cy.get('#htmlData label.ng-star-inserted').should('have.text', ' | 69b29454f86ba51a65fd0727 | ');
    })
})