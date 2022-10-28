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
 
//After hook the data driven with fixture file with before function method

   cy.visit('https://rahulshettyacademy.com/angularpractice/');
   cy.get('input[name="name"]:nth-child(2)').type(this.data.name);
   cy.get('select').select(this.data.gender)
   cy.get('input[name="name"]:nth-child(1)').should('have.value',this.data.name)
   cy.get('input[name="name"]:nth-child(2)').should('have.attr','minlength','2')
   cy.get('#inlineRadio3').should('be.disabled')


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
})

})