/// <reference types="cypress"  />
describe('My Second test suite',function()
{
it('My Second test case',function()
{

cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
cy.get(".search-keyword").type('ca');
cy.wait(2000);

//parent child chaining
cy.get('.products').as('productlocator')
cy.get('@productlocator').find('.product').each(($el,index,$list)  =>   {
const Text=$el.find('h4.product-name').text();
if(Text.includes('Cashews'))
{
  cy.wrap($el) .find('Button').click();
}

})
cy.get('.cart-icon > img').click();
cy.contains('PROCEED TO CHECKOUT').click();
cy.contains('Place Order').click();

})

})