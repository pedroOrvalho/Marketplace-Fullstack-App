describe('template spec', () => {
  it('passes', () => {
    cy.visit("http://localhost:3000/");
    /* ==== Generated with Cypress Studio ==== */
    cy.get('[href="/login"] > p').click();
    cy.get('.MuiGrid-root > a').click();
    cy.get('#firstName').type('hilja');
    cy.get('#email').clear('h');
    cy.get('#email').type('hiljauulenga@gmail.com');
    cy.get('#lastName').type('uulenga');
    cy.get('#password').type('12345');
    cy.get('.css-dvxtzn > .MuiBox-root').click();
    cy.get('.MuiButtonBase-root').click();
    /* ==== End Cypress Studio ==== */
  })
})