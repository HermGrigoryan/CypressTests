import { loginPage } from "../pages/SignUp";
import { data } from "../utils/data";
describe("SignIn", () => {
  it.only("Verify Sign in functionality with valid credentials", () => {
    loginPage.visit(); //read once more about should assertion
    loginPage.getFirstName(data.firstName);
    loginPage.getLastName(data.lastName);
    loginPage.getAdress(data.adress);
    loginPage.getCity(data.city);
    loginPage.getState(data.state);
    loginPage.getZipCode(data.zipCode);
    loginPage.getPhone(data.phone);
    loginPage.getSSN(data.SSN);
    loginPage.getZipCode(data.zipCode);
    loginPage.getUsername(data.username);
    loginPage.getPassword(data.password);
    loginPage.getReapetPassword(data.repeatPassword);
    loginPage.register();
    cy.url().should("include", "/parabank/register.htm");
  });
  it("Verify Sign in functionality with unvalid credentials", () => {
    loginPage.visit(); //read once more about should assertion
    loginPage.getFirstName(data.emptyString);
    loginPage.getLastName(data.emptyString);
    loginPage.getAdress(data.emptyString);
    loginPage.getCity(data.emptyString);
    loginPage.getState(data.emptyString);
    loginPage.getZipCode(data.emptyString);
    loginPage.getPhone(data.emptyString);
    loginPage.getSSN(data.emptyString);
    loginPage.getZipCode(data.emptyString);
    loginPage.getUsername(data.emptyString);
    loginPage.getPassword(data.emptyString);
    loginPage.getReapetPassword(data.emptyString);
    loginPage.register();
    cy.url().should("include", "/parabank/register.htm");
  })
});
