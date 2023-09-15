describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/");');
    /* ==== Generated with Cypress Studio ==== */
    cy.get('[href="/selling"] > p').click();
    cy.get('.btn_buying').click();
    /* ==== End Cypress Studio ==== */
  })
})