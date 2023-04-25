it.only('Validate body', () => {
    cy.request('https://pokeapi.co/api/v2/ability/150/').as('pokemon')
    cy.get('@pokemon').its('body').its('name')
        .should('include', 'imposter')
});
