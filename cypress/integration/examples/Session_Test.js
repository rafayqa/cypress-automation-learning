/// <reference types="cypress" />
let ProductName,productNumber; 
describe("Session management in Cypress", function () {
    // Function to parse CSV manually
    const parseCSV = (csvText) => {
        const lines = csvText.trim().split('\n')
        const headers = lines[0].split(',').map(h => h.trim())
        const data = lines.slice(1).map(line => {
            const values = line.split(',').map(v => v.trim())
            const obj = {}
            headers.forEach((header, index) => {
                obj[header] = values[index]
            })
            return obj
        })
        return data
    }
    it("should maintain session across tests", async () => {
        // Log in and set session
        cy.LoginAPI()
        cy.visit("https://rahulshettyacademy.com/client/", {
            onBeforeLoad: (win) => {
                win.localStorage.setItem('token', Cypress.env('token'));
            }
        })
        cy.get(".card-body b").eq(1).then(function (ele) {
            ProductName = ele.text();
        })

        

        // cy.get(".card-body div.text-muted").eq(1).then(function (ele) {
        //     productPrice = ele.text();
        // })
        cy.get(".card-body button:last-of-type").eq(1).click()
        cy.get("[routerLink *='cart']").click()

        cy.wait(3000);
        cy.contains("Checkout").click()
        cy.get("[placeholder='Select Country']").type("ind")
        cy.wait(2000)
        cy.get(".ta-results button").each(($el, index, $list) => {
            if ($el.text().trim() === "India") {
                cy.wrap($el).click()
            }
        })

        cy.get(".action__submit").click()
        cy.wait(2000)

        cy.get('tbody tr:nth-child(3) label')
  .invoke('text')
  .then((text) => {
    const orderId = text.replace(/\|/g, '').trim()
    cy.log(orderId)
    productNumber = orderId
  })
        cy.contains("button", "Click To Download Order Details in CSV").click()
        cy.readFile(Cypress.config("fileServerFolder") + "/cypress/downloads/order-invoice_qa.csv")
            .then((text) => {
                try {
                    const csvData = parseCSV(text)
                    console.log("CSV parsed successfully:", csvData)
                    const actualProductNameCSV = csvData[0]["Product Name"]
                    expect(ProductName).to.equal(actualProductNameCSV)

                    const actualProductNumberCSV = csvData[0]["Invoice Number"]
                    expect(productNumber).to.equal(actualProductNumberCSV)

                    // const actualProductPriceCSV = csvData[0]["Product Price"]
                    // expect(productPrice).to.equal(actualProductPriceCSV)    




                } catch (error) {
                    console.error("Error parsing CSV:", error)
                }
            })
    })
})