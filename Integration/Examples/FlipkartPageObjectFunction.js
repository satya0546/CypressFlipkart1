/// <reference types="Cypress" />
import CheckBoxButton from '../../support/PageObjects/CheckBoxButton'
import FlipkartLoginPage from '../../support/PageObjects/FlipkartLoginPage'
//import MyChatPage from '../../support/PageObjects/MyChatPage'

Cypress.on('uncaught:exception', (err, runnable) => {

    // returning false here prevents Cypress from
  
    // failing the test
  
    return false
  
    });
describe('My Test Suite', function() 
{
 
before(function()  {
   
    //Runs only once before execution of all it block
    cy.fixture('FlipkartLogin').then(function(Data) 
    {
this.Data=Data
    })
})

it('My Flipkart login testcase',function() {
    const flipkartloginPage=new FlipkartLoginPage()
    const checkBoxButton=new CheckBoxButton()
    const arr = undefined;
   
    //const myChatPage=new MyChatPage()

    cy.visit("https://www.flipkart.com/");
    cy.url().should('include', 'flipkart.com')
    flipkartloginPage.getClickLogin().click()
    
  
    flipkartloginPage.getUserName().type(this.Data.PhoneNumber)
   
   
    flipkartloginPage.getPassword().type(this.Data.password)
    cy.get(':nth-child(1) > ._2IX_2-').should('have.value', '9581516088')
    flipkartloginPage.getUserName().click()
   // cy.get(':nth-child(2) > ._2IX_2-').should('have.text', 'satya0546')
    flipkartloginPage.getLoginButton().click()
    
    cy.wait(1000)
    cy.get(':nth-child(3) > ._28p97w > ._1psGvi > :nth-child(1) > .exehdJ').should('have.text', 'Satyanarayana')
    //search functionality
    flipkartloginPage.getClickSearchTab().type(this.Data.Search)//click({ force: true })
    flipkartloginPage.getMobileclick().click({ force: true })
    cy.get('._10Ermr').contains('"mobiles"')
    cy.wait(1000)
    flipkartloginPage.getMoreBrands().click()
    flipkartloginPage.getFilterBrand().type(this.Data.BrandFliter)
    flipkartloginPage.getCheckboxClickforMi().click()
    //cy.get(':nth-child(2) > ._4921Z > ._1Y4Vhm > ._2iDkf8').should('be.checked')
    //cy.get(':nth-child(2) > ._4921Z > ._1Y4Vhm > ._2iDkf8').should('have.prop', 'checked')
    flipkartloginPage.getApplyFilters().click()
    // flipkartloginPage.getclickonMintab()
    // flipkartloginPage.getSetMinPriceValue().select('_3AsjWR')
    // cy.wait(500)
    // flipkartloginPage.getSetMaxPriceValue().click()
   //    cy.get('select[class="._2YxCDZ"]').select('10000').should('have.value', '10000')
  //     flipkartloginPage.getCheckboxClick().click()
 //    cy.SelectProduct('Mi')
//    cy.SelectProduct('POCO')

//    this.data.productName.forEach(function(element) {
//        cy.SelectProduct(element)
//    });
//      checkBoxButton.getCheckboxClick().click()
    flipkartloginPage.getSortBy().click()
    cy.contains('._5THWM1 > :nth-child(3)','Popularity')
    cy.get('._5THWM1 > :nth-child(2)').should('have.text', 'Relevance')
    cy.wait(500)
    cy.contains('.yFHi8N > :nth-child(11)','Next')
    flipkartloginPage.getNextPage().click()
    cy.contains('.yFHi8N > :nth-child(1)','Previous')
    flipkartloginPage.getPreviousPage().click()

   
    //My profile tab 

    cy.contains("div","Satyanarayana").trigger('mouseover')
    cy.wait(2000)
    cy.contains("div","Satyanarayana").should('be.visible') 
    //cy.get("div","Satyanarayana").invoke('show')
    cy.contains('My Profile').invoke('show').click()

    cy.get('input[name="firstName"]').should('have.value','Satyanarayana')
    cy.get('input[name="lastName"]').should('have.value','Karadhi')
    cy.get('[for="Male"] > ._1XFPmK').click()


    flipkartloginPage.getChangeEmailiDByEdit().click()
    cy.get('input[name="email"]').should('have.value','satya.karadhi007@gmail.com')
    flipkartloginPage.getChangePassword().click()
    cy.get('form > :nth-child(1) > ._1Jqgld > ._1w3ZZo').eq(0).click().type(this.Data.password)
    cy.get(' form > :nth-child(2) > ._1Jqgld > ._1w3ZZo').click().type(this.Data.ChangePassword)
    cy.get('form > :nth-child(3) > ._1Jqgld > ._1w3ZZo').click().type(this.Data.ConformPassword)
    cy.get('._1KAjNd').click({ force: true })
    

    cy.get(':nth-child(2) > ._30ILIt > form > ._2509-j > ._1tli27 > ._1Jqgld > ._1w3ZZo').should('be.disabled')
    flipkartloginPage.getPhoneEditable().click()
    cy.get(':nth-child(2) > ._30ILIt > form > ._2509-j > ._1tli27 > ._1Jqgld > ._1w3ZZo').should('be.visible')

 //MyLogout page

    
 cy.contains("div","Satyanarayana").trigger('mouseover')
 cy.wait(2000)
 cy.contains("div","Satyanarayana").should('be.visible') 
 //cy.get("div","Satyanarayana").invoke('show')
 cy.contains('Logout').invoke('show').click()


    

    
    

 })
})