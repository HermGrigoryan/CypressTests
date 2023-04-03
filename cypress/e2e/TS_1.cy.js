describe('SignIn', () => {
  it('Verify login functionality with valid credtials', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('standard_souce');
    cy.get('#login-button').click();
  })

  it.only('Verify login functionality with unvalid credtials', () => {
    cy.visit('https://demoqa.com/automation-practice-form');
    cy.get('header > a > img').should('be.exist');
    
  })
})
