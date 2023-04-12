
class About{   
    visit(){
        cy.visit('https://parabank.parasoft.com/parabank/register.htm');
    }
    getAbout(){
        const button = cy.get('.leftmenu > :nth-child(2) > a');
        button.click();        
        }
        getTitle(){
            return cy.contains('ParaSoft Demo Website');
        }
   
    getDiv1(){
        return cy.get('#rightPanel > :nth-child(2)');
    }
}
class Services{
    visit(){
        cy.visit('https://parabank.parasoft.com/parabank/register.htm');
    }
    getServices(){
        const button = cy.get('.leftmenu > :nth-child(3) > a');
        button.click();        
        }
    getTitle1(){
        return cy.get('#rightPanel > :nth-child(4)');
    }
    getTitle2(){
        return cy.get('#rightPanel > :nth-child(9)');
    }
    getTitle3(){
        return cy.get('#rightPanel > :nth-child(14)');
    }
    getTitle4(){
        return cy.get('#rightPanel > :nth-child(19)');
    }
    getTitle5(){
        return cy.get('#rightPanel > :nth-child(24)');
    }
}
class Products{
    visit(){
        cy.visit('https://parabank.parasoft.com/parabank/register.htm');
    }
    getProducts(){
        const button = cy.get('.leftmenu > :nth-child(4) > a');
        button.click();        
        }
}
class Location{
    visit(){
        cy.visit('https://parabank.parasoft.com/parabank/register.htm');
    }
    getLocation(){
        const button = cy.get('.leftmenu > :nth-child(5) > a');
        button.click();        
        }
}
class AdminPage{
    visit(){
        cy.visit('https://parabank.parasoft.com/parabank/register.htm');
    }
    getAdminPage(){
        const button = cy.get('.leftmenu > :nth-child(6) > a');
        button.click();        
        }
    getTitle(){
            return cy.contains('Administration');
        }
    getSOAP(){
        return cy.get('#soapEndpoint');
    }
    getREST(){
        return cy.get('#restEndpoint')
    }
    getEndpoint(){
        return cy.get('#endpoint');
    }
    submit(){
        const button = cy.get('#adminForm > .button');
        return button;
    }
}

export const checkA = new About();
export const checkS = new Services();
export const checkP = new Products();
export const checkL = new Location();
export const checkAP = new AdminPage();