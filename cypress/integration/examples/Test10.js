describe("Handling calendar in cypress", function () {

    it("Handling calendar in cypress", function () {
        const monthNumber = "6";
        const year = "2023";
        const date = "15";

        const expectedDateList = [monthNumber,date,year];
        
        // cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/offers')
        
        cy.visit(Cypress.env('url') + "/seleniumPractise/#/offers")
        // cy.get('.react-date-picker__inputGroup').click();
        cy.get('.react-date-picker__calendar-button__icon').click();

        cy.get('.react-calendar__navigation__label').click();
        cy.get('.react-calendar__navigation__label').click();

        cy.contains('button', year).click();

        cy.get('.react-calendar__year-view__months__month').eq(Number(monthNumber) - 1).click();

        cy.contains('abbr', date).click();

        cy.get('.react-date-picker__inputGroup__input').each(($el, index, $list) => {
            cy.wrap($el).invoke('val').should('eq', expectedDateList[index])

    
        })
        });

    });
