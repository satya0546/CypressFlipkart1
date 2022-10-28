import { Given,When,Then, And } from "cypress-cucumber-preprocessor/steps";
//import { when } from "cypress/types/jquery";
import FlipkartLoginPage from '../../../../support/PageObjects/FlipkartLoginPage'
//import ProductPage from '../../../../support/PageObjects/ProductPage'

const flipkartloginPage =new FlipkartLoginPage()
let name

Cypress.on('uncaught:exception', (err, runnable) => {

    // returning false here prevents Cypress from
  
    // failing the test
  
    return false
  
    });

    

Given('User lands on Flipkart Dashboard page',function()
{
    cy.visit("https://www.flipkart.com")
//asserstion
    cy.url().should('include', 'flipkart.com')
})

When('User clicks the Login on Header page',function()
{
    flipkartloginPage.getClickLogin().click()
   
})    

Then('User enter Email or PhoneNumber and password',function(dataTable)
{
    name=dataTable.rawTable[1][0]
    flipkartloginPage.getUserName().type(dataTable.rawTable[1][0])
    flipkartloginPage.getPassword().type(dataTable.rawTable[1][1])
    cy.get(':nth-child(1) > ._2IX_2-').should('have.value', '9581516088')
})

And('User clicks on the Login in popup window',function()
{
    flipkartloginPage.getLoginButton().click()
    cy.wait(2000)
    cy.get(':nth-child(3) > ._28p97w > ._1psGvi > :nth-child(1) > .exehdJ').should('have.text', 'Satyanarayana')
})

When('User searches for any catagerory by entering any Catagerory name',function()
{
    flipkartloginPage.getClickSearchTab().type(this.Data.Search)//click({ force: true })
    cy.wait(100)
    flipkartloginPage.getMobileclick().click({ force: true })
    cy.contains('._10Ermr','results for')
    
})

Then('User apply filters on paritular brand on the catagerory',function()
{
    flipkartloginPage.getMoreBrands().click()
    flipkartloginPage.getFilterBrand().type(this.Data.BrandFliter)
    flipkartloginPage.getCheckboxClickforMi().click()
    flipkartloginPage.getApplyFilters().click()
    flipkartloginPage.getApplyonRating().click( {force:true} )
    cy.wait(1000)
    flipkartloginPage.getApplyonRam().click()
})

And('User validates that Nextpage and Previous page is clickable mode or not',function()
{
    flipkartloginPage.getSortBy().click()
    cy.contains('._5THWM1 > :nth-child(3)','Popularity')
    cy.get('._5THWM1 > :nth-child(2)').should('have.text', 'Relevance')
    cy.wait(500)
    cy.contains('._1LKTO3','Next')
    flipkartloginPage.getNextPage().click()
    cy.wait(1000)
    cy.contains('.yFHi8N > :nth-child(1) > span','Previous')
    flipkartloginPage.getPreviousPage().click()
    
})

//My Profile tab

When('User should be mouseover on Signin tab then click on My profile',function()
{
    cy.contains("div","Satyanarayana").trigger('mouseover')
    cy.wait(2000)
    cy.contains("div","Satyanarayana").should('be.visible') 
    //cy.get("div","Satyanarayana").invoke('show')
    cy.contains('My Profile').invoke('show').click()
    
})

And('User validates that First name and last was visible or not',function()
{
    cy.get('input[name="firstName"]').should('have.value','Satyanarayana')
    cy.get('input[name="lastName"]').should('have.value','Karadhi')
    cy.get('[for="Male"] > ._1XFPmK').click()
    
})

And('User should clickon the edit function of Email address',function()
{
    flipkartloginPage.getChangeEmailiDByEdit().click()
    cy.get('input[name="email"]').should('have.value','satya.karadhi007@gmail.com')
})

And('User should clickon the Change password option',function()
{
    flipkartloginPage.getChangePassword().click()
    cy.get('form > :nth-child(1) > ._1Jqgld > ._1w3ZZo').eq(0).click().type(this.Data.password)
    cy.get(' form > :nth-child(2) > ._1Jqgld > ._1w3ZZo').click().type(this.Data.ChangePassword)
    cy.get('form > :nth-child(3) > ._1Jqgld > ._1w3ZZo').click().type(this.Data.ConformPassword)
    cy.get('._1KAjNd').click({ force: true })
})

Then('User click on the edit function of Phone Number',function()
{
    cy.get(':nth-child(2) > ._30ILIt > form > ._2509-j > ._1tli27 > ._1Jqgld > ._1w3ZZo').should('be.disabled')
    flipkartloginPage.getPhoneEditable().click()
    cy.get(':nth-child(2) > ._30ILIt > form > ._2509-j > ._1tli27 > ._1Jqgld > ._1w3ZZo').should('be.visible')
      
})

//My Logout tab

When('User should be mouseover on Signin tab then click on My Logout tab',function()
{
    cy.wait(2000)
    cy.contains("div","Satyanarayana").trigger('mouseover')
    
    cy.contains("div","Satyanarayana").should('be.visible') 
    //cy.get("div","Satyanarayana").invoke('show')
    cy.contains('Logout').invoke('show').click()
    
})

//My Travel Catagerory

And('User clicks on the My Travel catagerory',function()
{
    flipkartloginPage.getClickOnTravelCategory().click()

})

When('User select the round Trip option',function()
{
    flipkartloginPage.getRoundTrip().click()

})

And('User selects the from and to state option',function()
{
//     //From location

   cy.get('input[name="0-departcity"]').type('Hyderabad')
   cy.get(':nth-child(1) > .GTbXbG > ._1fa_Yn > ._24hoQ2 > :nth-child(3)').contains('HYD').click({ force:true })
   cy.wait(1000)
    
     //To location
     cy.get('input[name="0-arrivalcity"]').type('Mumbai')
     
     cy.get(':nth-child(3) > .GTbXbG > ._1fa_Yn > ._24hoQ2 > ._3uA4ax').contains('BOM').click({ force:true })


})

And('User selects the Depature and Return Date',function()
{
     //Click on from date and and select depature date
     cy.get(':nth-child(2) > .zzPDhz > ._1w3ZZo').click()
     cy.get(':nth-child(1) > tbody > :nth-child(5) > :nth-child(5) ').click()
 
 // click on to date and arrival date
     //cy.get(':nth-child(3) > .zzPDhz > ._1w3ZZo').click()
     cy.wait(1000)
    cy.get(':nth-child(2) > tbody > :nth-child(2) > :nth-child(7) > :nth-child(1) > .jkj0H4').click({ force:true })
 
})

And('User selects the Travellers and Cabin Class',function()
{
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
   
})

And('User clicks on the Search Tab',function()
{
    flipkartloginPage.getSearchTab()
    
   // cy.get(':nth-child(2) > .JmIi9x').dblclick()
    cy.wait(5000)
})

Then('User apply filters as per Customer Requirements',function()
{
    flipkartloginPage.getResetAll()
    flipkartloginPage.getStops()
    flipkartloginPage.getStartedFromDepature()
  //  flipkartloginPage.getOnlyStartedFromDepature()
})




