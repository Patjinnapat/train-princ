
describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:8080/x.html')
    cy.get('#cars').select('audi')
    cy.contains('td', 'd').should('exist')
  })
})