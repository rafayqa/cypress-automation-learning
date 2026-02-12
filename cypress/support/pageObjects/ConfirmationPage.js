class ConfirmationPage {

    submitFormdetails(country) {
        cy.get('#country').type(country);

        cy.get('.suggestions ul li a ').each(($el, index, $list) => {
            if ($el.text() === country) {
                cy.wrap($el).click();
            }
        })


        //Checking if value is Pakistan or not 
        cy.get('#country').should('have.value', country);


        //Check the terms and condition and click on the purchase button and
        // using force true to click on the button as it is covered by another element
        cy.get('#checkbox2').check({ force: true }).should('be.checked');

        //Locate and click on Purchase button 

        cy.get('input[value="Purchase"]').click();
    }

    getAlertMessage() {
        return cy.get('.alert-success');    
    }   
}

export default ConfirmationPage;