/// <reference types="Cypress" />
 
describe('My Test Suite', function() 
{
 
it('My handlemouseover testcase',function() {
 

cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
//using jquery function called show methos to handle mouseover
cy.get('div.mouse-hover-content').invoke('show')
cy.contains('Top').click()

//using force:true we click on the visible elements
//cy.contains('Top').click({force: true})

cy.url().should('include','top')

})

})