describe('Example Page UI Tests', () => {
  const url = 'https://example.com'

  beforeEach(() => {
    cy.visit(url)
  })

  it('should contain expected body text', () => {
    cy.get('body').should('contain', 'Example Domain')
  })
})