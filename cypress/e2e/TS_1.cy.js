/// <reference types="cypress" />
describe('SignIn', () => {
  it('Verify login functionality with valid credtials', () => {
    cy.visit('https://demoqa.com/automation-practice-form');    
    cy.get('#firstName').type('username');
    cy.get('#lastName').type('username');
    cy.get('#userEmail').type('jnjk@gmail.com');   
    cy.get('#gender-radio-1').click({force: true});
    //cy.get('#gender-radio-2').click();
    // cy.get('#gender-radio-3').click();
    // cy.get('#userNumber').type('');
    // cy.get('#dateOfBirth-label').type('');
    // cy.get('#subjectsContainer').type('');
    // cy.get('#hobbiesWrapper').type('');     
    cy.get('#currentAddress').type('Bagraygv 45');  
  })
  it('Verify login functionality with valid credtials', () => {
    cy.visit('https://demoqa.com/automation-practice-form');    
    cy.get('#firstName').type('5124');
    cy.get('#lastName').type('u5531531521352rname');
    cy.get('#userEmail').type('jnjkcom');   
    cy.get('#gender-radio-1').click({force: true});
    //cy.get('#gender-radio-2').click();
    // cy.get('#gender-radio-3').click();
    // cy.get('#userNumber').type('');
    // cy.get('#dateOfBirth-label').type('');
    // cy.get('#subjectsContainer').type('');
    // cy.get('#hobbiesWrapper').type('');     
    cy.get('#currentAddress').type('Bagraygv 45');  
  })
})
