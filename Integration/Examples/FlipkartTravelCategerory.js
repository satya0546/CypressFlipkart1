/// <reference types="cypress"  />

Cypress.on('uncaught:exception', (err, runnable) => {

    // returning false here prevents Cypress from
  
    // failing the test
  
    return false
  
    });
describe('My first test suite',function()
{
it('My fisrt test case',function()
{
    cy.visit("https://www.flipkart.com/");
    cy.contains("Login").click();
    cy.get(":nth-child(1) > ._2IX_2-").type("9581516088")
    cy.get(":nth-child(2) > ._2IX_2-").type("satya0546")
    cy.get('._1D1L_j > ._2KpZ6l').click()
    //cy.get(":nth-child(2) > label span")
    cy.wait(5000)

    //Select Travel in flipkart
    cy.get('.InyRMC._3Il5oO :nth-child(8)').click()
    cy.get(':nth-child(1) > .GTbXbG > ._3qBKP_ > ._1w3ZZo').click()
    //cy.spy(console, 'log').as('console')
    cy.wait(1000)

    cy.get('[for="ROUND_TRIP"]').click()
   //cy.get('[for="ONE_WAY"]').click()
    
   //From location
  // cy.get('input[name="0-departcity"]').invoke('attr', 'value', 'Hyderabad, HYD - Rajiv Gandhi International Airport')
   //cy.get(':nth-child(1) > .GTbXbG > ._3qBKP_ > ._1w3ZZo').type("Hyderabad")
   //console.log()
  // cy.get("._24hoQ2._1EzOls").invoke("show").contains("HYD").click();
   //cy.get('._1fa_Yn').find(':nth-child(1) > ._3uA4ax').eq(2).contains('BLR').click() 
   //cy.get('[value="Hyderabad IN"]').click()
   cy.get('input[name="0-departcity"]').type('Hyderabad')
   cy.get(':nth-child(1) > .GTbXbG > ._1fa_Yn > ._24hoQ2 > :nth-child(3)').contains('HYD').click({ force:true })
   cy.wait(1000)
    
     //To location
    //cy.get(':nth-child(3) > .GTbXbG > ._3qBKP_ > ._1w3ZZo').clear().type("Mumbai")
    
    //cy.get('input[name="0-arrivalcity"]').invoke('attr', 'value', 'Mumbai, BOM - Chatrapati Shivaji International Airport')
    cy.get('input[name="0-arrivalcity"]').type('Mumbai')
    //cy.wait(1000)
    cy.get(':nth-child(3) > .GTbXbG > ._1fa_Yn > ._24hoQ2 > ._3uA4ax').contains('BOM').click({ force:true })
   // cy.get('._1fa_Yn').siblings().find('._3uA4ax').eq(0).contains('BOM').click({ force:true })
   // cy.get('[value="Mumbai, BOM - Chatrapati Shivaji International Airport"]').click()
   //cy.get("._1fa_Yn.HQlQNF._18Y7Fu").invoke("show").contains("BOM").click();
   

    //Click on from date and and select depature date
    cy.get(':nth-child(2) > .zzPDhz > ._1w3ZZo').click()
    cy.get(':nth-child(1) > tbody > :nth-child(5) > :nth-child(4) > :nth-child(1) > .jkj0H4').click()

// click on to date and arrival date
    //cy.get(':nth-child(3) > .zzPDhz > ._1w3ZZo').click()
    cy.wait(1000)
   cy.get(':nth-child(2) > tbody > :nth-child(2) > :nth-child(7) > :nth-child(1) > .jkj0H4').click({ force:true })

// Click on Traveller class
   cy.get('._3SCHpg ').click()
   cy.get(':nth-child(2) > ._1_YMe_ > ._39P_Au > :nth-child(3) > ._2KpZ6l > svg').click()  //Incrementing adult
   cy.get(':nth-child(2) > ._1_YMe_ > ._39P_Au > :nth-child(1) > ._2KpZ6l > svg').click() //dcerementing the adult
   
//    cy.get(':nth-child(3) > ._1_YMe_ > ._39P_Au > :nth-child(3) > ._2KpZ6l > svg').click()
//    cy.get(':nth-child(3) > ._1_YMe_ > ._39P_Au > :nth-child(1) > ._2KpZ6l > svg').click()
//    cy.get(':nth-child(3) > ._1_YMe_ > ._39P_Au > :nth-child(3) > ._2KpZ6l > svg').click()

//    cy.get(':nth-child(4) > ._1_YMe_ > ._39P_Au > :nth-child(3) > ._2KpZ6l > svg').click()


   cy.get('[for="b"] > ._1XFPmK').click({ force:true })
   cy.get('.aC49_F').click()
   cy.get('._1QYQF8').click({ force:true })
   //cy.get(':nth-child(4) > .JmIi9x').click()
    cy.wait(5000)
    cy.get('._18jzl6').click()
    cy.get(':nth-child(2) > .vUK3-L > :nth-child(1) >  ._2iDkf8 > ._24_Dny').click()
    cy.get(':nth-child(3) > .vUK3-L > :nth-child(2) >  ._2iDkf8 > ._24_Dny').click()  // morning


})
})