describe('faking request and intercepting it ', () => {
    it('test', () => {
        cy.visit('https://rahulshettyacademy.com/angularAppdemo')
        cy.intercept('GET', 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty', (req) => {

            req.url = "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra"

            req.continue((res) => {
               // expect(res.statusCode).to.equal(403)
            })
        }).as('dummyURL')

        cy.contains('button', 'Library').click()
        cy.wait('@dummyURL')
    })


})