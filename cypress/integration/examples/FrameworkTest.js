import HomePage from "../../support/pageObjects/HomePage";

describe('End to End Ecommerce Testing ', function () {
    before(function () {
        // runs once before all tests in the block
        cy.fixture('example').then(function (data) {
            this.data = data;
            this.homepage = new HomePage();
        })



    })

    it('Submit Order Successfully', function () {

        // visit the login page 
        this.homepage.goTo(Cypress.env('url')+ "/loginpagePractise/");

        //calling the login function from the HomePage class to perform login action
        const productPage = this.homepage.Login(this.data.username, this.data.password);

        ``
        // Page Validation to check if we are on the correct page or not
        productPage.pageValidation();
        // verify number of products are there in the page 

        productPage.getProductCount().should('have.length', 4);

        // Add the required product to the cart
        productPage.selectProduct(this.data.productName);

        //Add another product to the cart
        productPage.selectFirstProduct();

        // Locate and click on the checkout button 
        const cartPage = productPage.gotoCart();


        cartPage.sumofProducts().then(function(sum) {

            //Verify the total price of the products in the cart is less than $200,000
            expect(sum).to.be.lessThan(200000);
        })

        //Locate and click on the checkout button to proceed further
       const confirmpage = cartPage.checkoutItems();

       confirmpage.submitFormdetails(this.data.country);

       confirmpage.getAlertMessage().should('contain', this.data.successMessage);

        //Locate the country text box and type the country name and select the country from the dropdown

     

        // // Using custyom command to add the country with autocomplete and click on the purchase button
        // cy.AddCountrywithAutocomplete(this.data.country);

        //Verify the success message after placing the order
        cy.get('.alert-success').should('contain', this.data.successMessage);






    })


});

