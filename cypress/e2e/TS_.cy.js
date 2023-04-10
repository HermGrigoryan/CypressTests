import { loginPage } from "../pages/SignIn";
import { data } from "../utils/data";
describe("SignIn", () => {
  it("Verify login functionality with valid credentials", () => {
   loginPage.visit();
   loginPage.getUsername(data.username)
   loginPage.getPassword(data.password)
   loginPage.submit();
   cy.url().should('include', '/parabank/overview.htm')
  });
  it("Verify login functionality with unvalid credentials", () => {
    loginPage.visit();
    loginPage.getUsername('doubl')
    loginPage.getPassword('doubl')
    loginPage.submit();
    cy.url().should('include', '/parabank/overview.htm')
   });
   it("Verify login functionality with nothing", () => {
    loginPage.visit();
    loginPage.getUsername('')
    loginPage.getPassword('')
    loginPage.submit();
    cy.url().should('include', '/parabank/overview.htm')
   });
   it("Verify login functionality with valid username and unvalid password", () => {
    loginPage.visit();
    loginPage.getUsername(data.username)
    loginPage.getPassword('doubl')
    loginPage.submit();
    cy.url().should('include', '/parabank/overview.htm')
   });
   it("Verify login functionality with valid password and unvalid user", () => {
    loginPage.visit();
    loginPage.getUsername('doubl')
    loginPage.getPassword(data.password)
    loginPage.submit();
    cy.url().should('include', '/parabank/overview.htm')
   });
   it("Verify login functionality with upper cases", () => {
    loginPage.visit();
    loginPage.getUsername('DOUBLE')
    loginPage.getPassword('DOUBLE')
    loginPage.submit();
    cy.url().should('include', '/parabank/overview.htm')
   });
   it("Verify the messages for invalid login.", () => {
    loginPage.visit();
    loginPage.getUsername("doubl")
    loginPage.getPassword('doubl')
    loginPage.submit();
    cy.url().should('include', 'https://parabank.parasoft.com/parabank/login.htm')
    cy.should('.title', 'Error!')
   });  
});
