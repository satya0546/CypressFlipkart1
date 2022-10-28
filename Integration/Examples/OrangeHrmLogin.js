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
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    cy.wait(5000)
    
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
    cy.get('.oxd-button').click()
    cy.get(':nth-child(5) > .oxd-main-menu-item').click()
    cy.get('.orangehrm-header-container > .oxd-button').click()
    cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type("Satya")
    cy.get('.--name-grouped-field > :nth-child(2) > :nth-child(2) > .oxd-input').type("Narayana")
    cy.get('.--name-grouped-field > :nth-child(3) > :nth-child(2) > .oxd-input').type("Karadhi")
    cy.get('.oxd-select-text').click().invoke('show')
    cy.contains('Software Engineer').click({force:true})    
    cy.get(':nth-child(3) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Satya.kardhi007@gmail.com')
    cy.get('.oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('9581516088')
    cy.get('.orangehrm-save-candidate-page-full-width > .oxd-input-group > :nth-child(2) > .oxd-input').type("ManualTesting,SELENIUM")
    cy.get('.oxd-textarea').type("ExperianceCanditate")
    cy.get('.oxd-checkbox-input > .oxd-icon').click()
    cy.get('.oxd-date-input > .oxd-input').clear().type("2022-09-21").click()
    cy.get('.oxd-button--secondary').click()
    cy.get('.oxd-button--success').click({force:true})
    cy.get('.oxd-button--secondary').click()
    cy.get('.oxd-button--success').click({force:true})

    // cy.get(':nth-child(1) > .oxd-grid-4 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click().invoke('show');
    // cy.contains('Network Administrator').click();
    // cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click().invoke('show')
    // cy.contains('Software Engineer').click({force:true})
    // cy.wait(5000)
    // cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click().invoke('show')
    // cy.contains('Offer Declined').click({force:true})
    // cy.get('.oxd-autocomplete-text-input > input').type('satya')
    // cy.get(':nth-child(2) > .oxd-input').type('Automation')
    // cy.get(':nth-child(3) > .oxd-grid-4 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click().invoke('show')
    // cy.contains('Manual').click({force:true})




   // cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click().invoke('show')
    //cy.get('Linda Anderson').click({force:true});

    // cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click()
    // cy.get(':nth-child(2) > .oxd-input').type('Sonu@131')
    // cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click().invoke('show')
    // cy.contains('ESS').click()
    // cy.get('.oxd-autocomplete-text-input > input').type('Apoorva Manala')
    // cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click().invoke('show')
    // cy.get('Enabled').click()


})
})
