import { Given,When,Then, And } from "cypress-cucumber-preprocessor/steps";


Cypress.on('uncaught:exception', (err, runnable) => {

    // returning false here prevents Cypress from
  
    // failing the test
  
    return false
  
    });

    

Given('User lands on InternetHerokuApp Dashboard page',function()
{
    cy.visit("https://the-internet.herokuapp.com/")
//asserstion
    cy.url().should('include', 'herokuapp.com')
})




When('User Click on AB Testing button', function() {

    cy.get('.heading').should('have.text', 'Welcome to the-internet')
        cy.get('.heading').should('include.text', 'the-internet')
        cy.get('.heading')
            .invoke('text')
            .should('match', /^Welcome/)

        cy.get('ul > :nth-child(1)').click('left')
       
    
})

And('User validate data on the page', function() {

    cy.get('.example > p').should('include.text', 'Also known as split testing')
    var dta1 = cy.get('.example > p').invoke('show')
    console.log(dta1.textContent)
    cy.get('.large-4 > div > a').invoke('removeAttr', 'target').click('center')

    cy.get('h2.subheader').should('have.text', 'A free, once-weekly e-mail on how to use Selenium like a Pro')
    // cy.go('back').go('back')
    // cy.wait(1000)
    // //cy.location('pathname').should('not.include', 'navigation')
})

When('User Click on Drag and drop Testing button', function() {

    cy.get("a[href='/drag_and_drop']").click()
    

})

And('Drag and drop box A on the box B and validate text', function() {

    const dataTransfer = new DataTransfer();
    cy.get('#column-a').trigger('dragstart', {
        dataTransfer
    });

    cy.get('#column-b').trigger('drop', {
        dataTransfer

    });
    cy.get('#column-b').should('have.text', 'A')

    cy.get('#column-b').trigger('dragstart', {
        dataTransfer
    });

    cy.get('#column-a').trigger('drop', {
        dataTransfer
    });
    cy.get('#column-a').should('have.text', 'A')

})

When('User Click on DropDown Testing button', function() {

    cy.get("a[href='/dropdown']").click()
    
})

And('User will able to select on the option in Dropdown list', function() {
    cy.get('#dropdown').select(1).invoke("val").should("eq", "1")//
    cy.get('#dropdown').select('Option 2').invoke("val").should("eq", "2")

})

When('User Click on Checkboxes Testing button', function() {

    cy.get('ul > :nth-child(6)').click('left')
    
})

And('User click on the checkbox 1 and validate', function() {

    cy.get('#checkboxes > :nth-child(1)').click()
    cy.get('#checkboxes > :nth-child(1)').uncheck().should('not.be.checked').and('have.value', 'on')
    cy.get('#checkboxes > :nth-child(3)').click({ force: true })
    cy.get('#checkboxes > :nth-child(3)').check().should('be.checked').and('have.value', 'on')
    
})

When('User Click on Context Menu Testing button', function() {

    cy.get('ul > :nth-child(7)').click('left')
    
})

And('User Right click on the box', function() {

    cy.get('.example > :nth-child(2)').should('have.text', 'Context menu items are custom additions that appear in the right-click menu.')
        cy.get('#hot-spot').rightclick('bottomRight')
        cy.on('window:alert', (txt) => {
            //Mocha assertions
        expect(txt).to.contains('You selected a context menu')
        })
})

When('User Click on Form Authentication Testing button', function() {

    cy.get("a[href='/login']").click()
    
})

And('User click on the username and enter the username', function() {

    cy.get('#username').type('tomsmith')

})

And('User click on the password and enter the password', function() {

    cy.get('#password').type('SuperSecretPassword!')

})

Then('User click on the Login button', function() {
    cy.get('.radius').click()

})

And('User validates login successfully or not', function() {
    cy.get('#flash').should('include.text','You logged into a secure area') 
    cy.get('.button').click()

})

When('User Click on JQueryUI Menu Testing button', function() {
    cy.get('a[href="/jqueryui/menu"]').click()
    
})

And('User clicks on the JQuery link', function() {
    
    cy.get('a[href="http://api.jqueryui.com/menu/"]').click()
})

And('user clicks on the Selectors in Jquery UI menu', function() {
cy.wait(1000)
    cy.get("a[href='//api.jqueryui.com/category/selectors/']").click()
    cy.get("a[title='Permalink to :data() Selector']").should('have.text', ":data() Selector")

})

When('User Click on Hovers Testing button',function()
{
    cy.get("a[href='/hovers']").click()
    
})
And('User mouseover on the profile pics and data will display',function()
{
    cy.get(".example > div:nth-child(3)").should('be.visible')
    
})
And('User validates the details',function()
{
    cy.get('.figcaption').should('include.text','user1')
    
})

When('User Click on Key presses Testing button',function()
{
    cy.get("a[href='/key_presses']").click()
    
})
And('User enter or press the keypad and shortcuts keys then text will display',function()
{
    
        cy.get('#target').type('{enter}')
       
       // cy.get('#result').should('have.text','enter')
        cy.get('#target').type('{del}')
        cy.get('#target').type('{ctrl}')
        cy.get('#target').type('{rightArrow}')
        cy.get('#target').type('tab order')
        cy.get('#target').type('{selectAll}{backspace}')
})


When('User Click on Multiple windows Testing button',function()
{
    cy.get("a[href='/windows']").click()
    
    
})
And('User click on click here link',function()
{
    
    cy.get("a[href='/windows/new']").invoke('removeAttr', 'target').click()
})

When('User Click on Horizontal sliders Testing button',function()
{
    cy.get("a[href='/horizontal_slider']").click()
    
    
})
And('User click on the slider to move by 0.5 at a time',function()
{
    
    cy.get("input[type='range']").invoke("val", "2").trigger("change")

    cy.get('span#range').should('have.text', 2)
})

When('User Click on Sortable data tables Testing button',function()
{
    cy.get("a[href='/tables']").click()
    
    
})
And('User will sort the table by individual rows data',function()
{
    
    cy.get('#table1 > tbody > tr ')
    .each(($row, index, $rows) => {
        cy.wrap($row).within(function () {

            cy.get('td').each(function ($celldata, index, $columns) {
                cy.log($celldata.text())
            })
        })

    })

    cy.get("#table1 > tbody > tr ").eq(3)

        .within(function () {

            cy.get('td').eq(5)

                .within(function () {

                    cy.get('a').eq(1)

                        .invoke('show').click()

                })

        })
})

When('User Click on WYSIWYG Editor Testing button',function()
{
    cy.get("a[href='/tinymce']").click()
    
    
})
And('User will enter text in the Your context goes here',function()
{
    
    cy.get('#mce_0_ifr').then(function($Iframe){
        const IframeContest= $Iframe.contents().find('body')
        cy.wrap(IframeContest)
        .clear()
        .type('HELLO!')
    }) 
})

When('User Click on File upload Testing button',function()
{
    cy.get("a[href='/upload']").click()
    
    
})
And('User will choose the file location and click on upload button',function()
{
    
    cy.get('#file-upload').selectFile('C:/Users/satyanarayana.k/CypressAutomation/cypress/fixtures/images/upload_file.xlsx', { action: 'drag-drop' })
    // cy.get("#drag-drop-upload").click().selectFile('C:/Users/satyanarayana.k/CypressAutomation/cypress/fixtures/images/upload_file.xlsx', { action: 'drag-drop' })
    cy.get('#file-submit').click()
    cy.get('#uploaded-files').contains('upload_file.xlsx')
})

When('User Click on Add or Remove element Testing button',function()
{
    cy.get('ul > :nth-child(2)').click('left')
      
})
And('User will on add element and later  click on delete element',function()
{
    cy.get('h3').should('have.text', 'Add/Remove Elements')
    cy.get('.example').click('left')
    cy.get('#elements :nth-child(1)').click()
    
})

When('User Click on Broken Images Testing button',function()
{
    cy.get('ul > :nth-child(4)').click('left')
    cy.get('h3').should('have.text', 'Broken Images')
      
})
And('User will on  the broken image',function()
{
    cy.get('[src="asdf.jpg"]').click()
        .should('be.visible')
        //.and($img => expect($img[120].naturalWidth).to.be.gt(3))
    
})


