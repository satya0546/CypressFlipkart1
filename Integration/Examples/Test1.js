/// <reference types="cypress"  />
describe('My first test suite', function () {
  it('My fisrt test case', function () {

    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get(".search-keyword").type('ca');
    cy.wait(2000);
    cy.get('.product:visible').should('have.length', 4);

    //parent child chaining
    cy.get('.products').as('productlocator')
    cy.get('@productlocator').find('.product').should('have.length', 4);

    //using index model
    cy.get('@productlocator').find('.product').eq(2).contains('ADD TO CART').click().then(function () {
      console.log("sf")   // this method reuns on browser concole
    })

    cy.get('@productlocator').find('.product').each(($el, index, $list) => {

      const Text = $el.find('h4.product-name').text();
      if (Text.includes('Cashews')) {
        cy.wrap($el).find('Button').click();
      }

    })

    //assert if logo text is displayed correctly
    cy.get('.brand').should('have.text', 'GREENKART')


    //this is to print in logs
    cy.get('.brand').then(function (Logoelement) {

      cy.log(Logoelement.text());

    })



  })

})