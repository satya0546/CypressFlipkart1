import { Given,When,Then, And } from "cypress-cucumber-preprocessor/steps";
import HomePage from '../../../../support/PageObjects/Homepage'
import ProductPage from '../../../../support/PageObjects/ProductPage'


const homePage=new HomePage()
const productPage= new ProductPage()
let name
Given('User open Ecommerce page',()=> 
{
    cy.visit('https://rahulshettyacademy.com/angularpractice/');
})
    //When User add products to cart
  
When('User add products to cart',function()

{

   homePage.getShopTab().click()

   this.data.productName.forEach(function(element)

   {

     cy.SelectProduct(element)

   });

   productPage.getCheckoutbutton().click()

})
    //And User validates the total prices

And('User validates the total prices',function()
{
    var sum=0
     cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {
        const Amount=$el.text()
        var res= Amount.split(" ")
        res= res[1].trim()
        sum= Number(sum)+Number(res)

     }).then(function()
     {
        cy.log(sum)
     })

     cy.get('h3 strong').then(function(element)
     {
        const Amount=element.text()
        var res= Amount.split(" ")
       var total= res[1].trim()
       expect(Number(total)).to.equal(sum)
     })
})   
    //Then Select the country submit and verify Thankyou

Then('Select the country submit and verify Thankyou',function()
{
    cy.contains('Checkout').click()
    cy.get('#country').type('india')

    Cypress.config('defaultCommandTimeout',8000)
    cy.wait(6000)
    cy.get('.suggestions > ul > li > a').click()
    cy.get('#checkbox2').click({force: true})
    cy.get('input[type="submit"]').click()
    //cy.get('.alert').should('have.text','Success! Thank you! Your order will be delivered in next few weeks :-)')
    cy.get('.alert').then(function(element)
    {

        const ActualText=element.text()
        expect(ActualText.includes("Success")).to.be.true

    })
})    


//When Use fill the form details
When('User fill the form details',function(dataTable)
{
    // driven driven using cucumber 
    name=dataTable.rawTable[1][0]
    homePage.getEditNameBox().type(dataTable.rawTable[1][0]);
    homePage.getGender().select(dataTable.rawTable[1][1])

    //Data driven using cypress fixture file
    // homePage.getEditNameBox().type(this.data.name);
    // homePage.getGender().select(this.data.gender)

})

 //   Then User validates the forms behaviour 

 Then('User validates the forms behaviour',function()
 {
    homePage.getTwoDataBinding().should('have.value',name)
    homePage.getEditNameBox().should('have.attr','minlength','2') 
    homePage.getEntrepreneaur().should('be.disabled')
    Cypress.config('defaultCommandTimeout',8000)

 })
 
 //And User the select the Shop page

 And('User the select the Shop page',function()
 {
    homePage.getShopTab().click()
 })