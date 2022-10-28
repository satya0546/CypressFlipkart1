/// <reference types="Cypress" />
import HomePage from '../../support/PageObjects/Homepage'
import ProductPage from '../../support/PageObjects/ProductPage'

describe('My Test Suite', function() 
{
 
before(function()  {
    //Runs only once before execution of all it block
    cy.fixture('example').then(function(data) 
    {
this.data=data
    })
})


it('My handlemouseover testcase',function() {
    const homePage=new HomePage()
   const productPage= new ProductPage()

//After hook the data driven with fixture file with before function method

   cy.visit('https://rahulshettyacademy.com/angularpractice/');
   homePage.getEditNameBox().type(this.data.name);
   homePage.getGender().select(this.data.gender)
   homePage.getTwoDataBinding().should('have.value',this.data.name)
   homePage.getEditNameBox().should('have.attr','minlength','2') 
   homePage.getEntrepreneaur().should('be.disabled')
   Cypress.config('defaultCommandTimeout',8000)
   homePage.getShopTab().click()
   



// Before hook data with fixture file


//    cy.visit('https://rahulshettyacademy.com/angularpractice/');
//     cy.get('input[name="name"]:nth-child(2)').type('Bob');
//     cy.get('select').select("Female")


    cy.get(':nth-child(2) > .nav-link').click()
//Customiszes cypress commands start by support folder with command.js file we have written
    // cy.get('h4.card-title').each(($el, index, $list) =>{
    //    if( $el.text().includes('Blackberry'))
    //    {
    //     cy.get('.btn.btn-info').eq(index).click(); 
    //    }
    // })   
    

    cy.SelectProduct('Blackberry')
    cy.SelectProduct('Nokia Edge')

    this.data.productName.forEach(function(element) {
        cy.SelectProduct(element)
    });
    productPage.getCheckoutbutton().click()
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

    cy.contains('Checkout').click()
    cy.get('#country').type('india')

    //Cypress.config('defaultCommandTimeout',8000)
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

})