import {checkA, checkP} from "../pages/OtherChecks"
import {checkS, checkL} from "../pages/OtherChecks"
import {checkAP} from "../pages/OtherChecks"
import {data} from "../utils/data"
describe("Buttons", () => {
    it("Verify About button", () => {        
        checkA.visit();
        checkA.getAbout()        
        cy.url().should("include", "/parabank/about.htm");       
        checkA.getTitle().should('be.visible')
        checkA.getDiv1().should('be.visible')
    })
    it("Verify Services button", () => {        
        checkS.visit();
        checkS.getServices()        
        cy.url().should("include", "/parabank/services.htm");       
        checkS.getTitle1().should('be.visible')
        checkS.getTitle2().should('be.visible')
        checkS.getTitle3().should('be.visible')
        checkS.getTitle4().should('be.visible')
        checkS.getTitle5().should('be.visible')
    })
    it("Varify Products button", () =>{
        checkP.visit();
        checkP.getProducts();
    })
    it("Varify Loaction button", () =>{
        checkL.visit();
       checkL.getLocation();
    })
    it("Varify Admin Page button", () =>{
        checkAP.visit();
        checkAP.getAdminPage();
        checkAP.getTitle();
        cy.get(':nth-child(1) > form > .form2 > tbody > tr > :nth-child(1)').should('be.visible');
        cy.get(':nth-child(1) > form > .form2 > tbody > tr > :nth-child(2)').should('be.visible');
        cy.get(':nth-child(1) > :nth-child(2) > form > .form2').should('be.visible');
        cy.get('#accessMode1').click();
        cy.get('.form > tbody > :nth-child(3) > td').should('be.visible');
        cy.get(':nth-child(5) > tbody > :nth-child(1) > td').should('be.visible');
        checkAP.getSOAP(data.SOAP);
        checkAP.getREST(data.REST);
        checkAP.getEndpoint(data.Endpoint);
        checkAP.submit().click();
        cy.contains('Settings saved successfully.').should('be.visible')
    })
})