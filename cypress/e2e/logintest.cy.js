describe('template spec', () => {
  it('passes', () => {
    cy.visit("http://localhost:3000/");
    /* ==== Generated with Cypress Studio ==== */
    cy.get('[href="/login"] > p').click();
    cy.get('#email').clear('h');
    cy.get('#email').type('hiljauulenga@gmail.com');
    cy.get('#password').clear('1');
    cy.get('#password').type('123435');
    cy.get('.MuiButtonBase-root').click();
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#email').click();
    cy.get('#email').should('be.visible');
    cy.get('.app').click();
    /* ==== End Cypress Studio ==== */
  })


})