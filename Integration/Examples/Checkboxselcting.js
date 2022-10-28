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
    cy.get('.InyRMC._3Il5oO :nth-child(8)')
    cy.get('._3704LK').type("mobiles").click()
    cy.contains("in Mobiles").click({ force: true })
    // cy.get('[type="checkbox"]')
    //   .not('[disabled]')
    //   .check({force:true})
    //   .should('be.checked')
   // cy.get('')
    // cy.get('[type="checkbox"]')
    // .invoke("show").wait(5000)
    // .check('[title="realme"] > ._1Y4Vhm > ._2iDkf8'
    // .should('be.checked').and('have.value','Realme');
    //cy.get(':checkbox').not('[disabled]').click({force:true})
  var sat = cy.get(':checkbox:enabled')
   .invoke("show").wait(5000)
   .check({force:true})
  // .check('[title="realme"] > ._1Y4Vhm > ._2iDkf8 > ._24_Dny')
   //cy.get(':checked').should('have.length',sat)

   cy
   .get(':checkbox')
   .as('checkbox')
   .invoke('is', ':checked')
   .then(checked => {
     if (checked) {
       cy
         .get('@checkbox')
         .uncheck();
     } else {
       cy
         .get('@checkbox')
         .check();
     }
   });

})
})