describe('template spec', () => {
  it('passes', () => {
    cy.visit("http://localhost:3000/");
    /* ==== Generated with Cypress Studio ==== */
    cy.get('[href="/buying"] > p').click();
    cy.get('.btn_selling').click();
    /* ==== End Cypress Studio ==== */
  })
})