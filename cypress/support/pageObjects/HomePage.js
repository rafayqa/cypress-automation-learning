import ProductPage from "./ProductPage";
class HomePage {


    Login(username, password) {
        // Enter the username and password
        cy.get('#username').type(username);
        cy.get('#password').type(password)

        //click the Admin radio button 

        cy.get('input[value="admin"]').click();

        // Select the dropdown and check the selected value 
        cy.get('select').select('Consultant').should('have.value', 'consult');

        //Check the terms and condition and verify 
        cy.get('#terms').check().should('be.checked')

        cy.contains('input', 'Sign In').click();

        return new ProductPage();
    }


}

export default HomePage;