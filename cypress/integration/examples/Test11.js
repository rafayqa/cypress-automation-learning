/// <reference types="cypress" /> 

describe("Intercepting HTTP requests ", () => {
    it("should intercept and stub HTTP requests", () => {

        cy.visit("https://rahulshettyacademy.com/angularAppdemo")


        cy.intercept({
            method: 'GET',
            url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'

        }, {
            statusCode: 200,
            body: [{
                "book_name": "Rafay ki Diary",
                "isbn": "PAK-01",
                "aisle": "7782"
            }]
        }).as('bookretrieval')
        cy.contains("button", "Library").click()

        cy.wait('@bookretrieval').then(({ request, response }) => {
            cy.get('tr').should('have.length', response.body.length + 1) // +1 for the header row
        })
       

        cy.get("p").should("have.text", "Oops only 1 Book available")
    });
});