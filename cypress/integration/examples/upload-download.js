/// <reference types="cypress" />

let searchText = "Mango";
let ReplaceText = 333;
let SheetName = "Sheet1";
let output = { rowNumber: -1, columnNumber: -1 };
describe('upload-reupload-test', () => {

    it('verify excel upload download', () => {
        let filePath = Cypress.config('fileServerFolder') + "/cypress/downloads/download.xlsx";

        //First land on the page and download the file
        cy.visit("https://rahulshettyacademy.com/upload-download-test/index.html");

        cy.get('#downloadButton').click();

        cy.wait(3000);

        cy.task('WriteExcelTest', { searchText, ReplaceText, change: { rowChange: 0, colChange: 2 }, SheetName, filePath: filePath })

        cy.get("#fileinput").selectFile(filePath)

        // Go to parent element (td to tr)
        cy.contains(searchText).parent().parent().find("#cell-4-undefined").should("have.text", ReplaceText)




    });
})