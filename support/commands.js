// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
Cypress.Commands.add('downloadFile', (url, directory, fileName) => {
    return cy.getCookies().then((cookies) => {
      return cy.task('downloadFile', {
        url,
        directory,
        cookies,
        fileName,
      })
    })
  })
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
Cypress.Commands.add("SelectProduct", (productName) => { 

    cy.get('h4.card-title').each(($el, index, $list) =>{
        if( $el.text().includes(productName))
        {
         cy.get('.btn.btn-info').eq(index).click(); 
        }
     })
 

})

Cypress.Commands.add("SelectBrand",(BrandFliter) => {
    cy.get('._2iDkf8.t0pPfW').each(($el, index, $list) =>{
        if( $el.text().includes(BrandFliter))
        {
         cy.get('input[type="checkbox"]').eq(index).click(); 
        }
    })
})

Cypress.Commands.add("loginByApi", (username, password) => {
    return cy.request("POST", `http://localhost:3000/login`, {
      username,
      password,
    })
  })







// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-file-upload';
require('cypress-downloadfile/lib/downloadFileCommand');