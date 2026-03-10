describe("API Testing Basics", function () {
    it("API Testing", function () {

        cy.request('POST','https://216.10.245.166/Library/Addbook.php',{
            "name":"Rafay Dairy",
            "isbn":"bbb",
            "aisle":"111", 
            "author":"Rafay"
        }).then(function(response){
           expect(response.body).to.have.property('Msg', 'successfully added')
           expect(response.status).to.equal(200)
        })
    })
})