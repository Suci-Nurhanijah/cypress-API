it('Add a new user', () => {
    var user = {
        "name": 'Suci',
        "job": 'Quality Assurance'
    } 
    cy.request('POST', 'https:reqres.in/api/users', user).then((response) => {
        expect(response.status).equal(201)
    })
})
