it('Validate Content', () => {
    cy.request('GET', 'https://pokeapi.co/api/v2/pokemon/ditto', abilities).then((response) => {
        expect(response.status).equal(200)
        expect(response.ability.name).to.eq(limber.name)
});

});
