import CartPage from "./CartPage";
class ProductPage {

    pageValidation() {

        cy.contains('Shop Name').should('be.visible');

    }

    getProductCount () {

        return cy.get('app-card');
    }

    selectFirstProduct() {
        cy.get('app-card').eq(0).contains('button', 'Add').click();
    }

    gotoCart() {
        cy.get('.nav-link').contains('Checkout').click();
        return new CartPage();
    }
    selectProduct(productName) {
        cy.get('app-card').filter(`:contains("${productName}")`).then(
            ($el) => {
                cy.wrap($el).should('have.length', 1)
                cy.wrap($el).contains('button', 'Add').click();
            })

    }
}

export default ProductPage;