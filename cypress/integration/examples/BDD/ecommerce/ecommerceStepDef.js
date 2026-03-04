import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../../../support/pageObjects/HomePage";

const homePage = new HomePage();
Given('I am on Ecommerce Page', () => {
    homePage.goTo(Cypress.env('url') + "/loginpagePractise/");
});

When('I login to the application', function () {
    this.productPage = homePage.Login(this.data.username, this.data.password);
    // Page Validation to check if we are on the correct page or not
    this.productPage.pageValidation();
    // verify number of products are there in the page 
    this.productPage.getProductCount().should('have.length', 4);
});

When('I login to the application portal', function (dataTable) {
    this.productPage = homePage.Login(dataTable.rawTable[1][0], dataTable.rawTable[1][1]);
    // Page Validation to check if we are on the correct page or not
    this.productPage.pageValidation();
    // verify number of products are there in the page 
    this.productPage.getProductCount().should('have.length', 4);

})

When('I add items to cart and Checkout', function () {
    this.productPage.selectProduct(this.data.productName);
    //Add another product to the cart
    this.productPage.selectFirstProduct();
    // Locate and click on the checkout button 
    this.cartPage = this.productPage.gotoCart();
})

When('I validate the total price limit', function () {
    this.cartPage.sumofProducts().then(function (sum) {
        //Verify the total price of the products in the cart is less than $200,000
        expect(sum).to.be.lessThan(200000);
    })
})

Then('Select the country submit and verify Thank You', function () {
    //Locate and click on the checkout button to proceed further
    const confirmpage = this.cartPage.checkoutItems();
    confirmpage.submitFormdetails(this.data.country);
    confirmpage.getAlertMessage().should('contain', this.data.successMessage);
})