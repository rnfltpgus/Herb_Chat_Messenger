/// <reference types="cypress" />

export default describe('login Component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('Login with google이 잘 나오나요??', () => {
    cy.get('div').contains('Login with google');
  });
});
