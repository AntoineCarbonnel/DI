describe('User Parkour Test', () => {
    it('Navigates from index to customer detail page', () => {
        cy.visit('http://localhost:5173/')

        // Clique sur le bouton pour aller à la page de détail d'un client
        cy.get('a[data-cy="go-to-customer-detail"]').first().click()

        // Vérifie que l'URL est correcte
        cy.url().should('include', '/customers/1')
    })
})