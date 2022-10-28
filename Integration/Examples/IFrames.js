/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />


import 'cypress-iframe'


 describe('My Test Suite', function() 
{
 
it('My handlemouseover testcase',function() {
 

   cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
   cy.frameLoaded('#courses-iframe')
   cy.iframe().find("a[href*='mentorship']").eq(0).click()
   cy.wait(3000)
   cy.iframe().find("h1[class*='pricing-title']").should('have.length',2)
 



})

})

