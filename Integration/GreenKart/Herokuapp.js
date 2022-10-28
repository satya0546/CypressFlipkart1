/// <reference types="cypress"  />



Cypress.on('uncaught:exception', (err, runnable) => {

    // returning false here prevents Cypress from

    // failing the test

    return false

});
describe('My first Herokuapp test suite', function () {

    this.beforeEach(function () {
        cy.visit('https://the-internet.herokuapp.com/')
    })

    it('My fisrt A/B Testing test case', function () {
        //cy.visit("https://the-internet.herokuapp.com/")
        cy.get('.heading').should('have.text', 'Welcome to the-internet')
        cy.get('.heading').should('include.text', 'the-internet')
        cy.get('.heading')
            .invoke('text')
            .should('match', /^Welcome/)

        cy.get('ul > :nth-child(1)').click('left')
        cy.get('.example > p').should('include.text', 'Also known as split testing')
        var dta1 = cy.get('.example > p').invoke('show')
        console.log(dta1.textContent)
        cy.get('.large-4 > div > a').invoke('removeAttr', 'target').click('center')

        cy.get('h2.subheader').should('have.text', 'A free, once-weekly e-mail on how to use Selenium like a Pro')
        cy.go('back').go('back')
        cy.wait(1000)
        //cy.location('pathname').should('not.include', 'navigation')

    })

    it('its Basic Auth test case', function () {
        // cy.on('window:alert', function(alerttext){
        //   expect(alerttext).eq('https://the-internet.herokuapp.com/')
        // })

        cy.window().then(function ($win) {
            cy.stub($win, 'prompt').returns('admin')
        })

        cy.get('ul > :nth-child(3)').click('left')

        cy.go("back")
    })


    it('its Add/Remove Elements test case', function () {
        cy.get('ul > :nth-child(2)').click('left')
        cy.get('h3').should('have.text', 'Add/Remove Elements')
        cy.get('.example').click('left')
        cy.get('#elements :nth-child(1)').click()
        cy.go("back")
    })

    it('its Broken Images  test case', function () {
        cy.get('ul > :nth-child(4)').click('left')
        cy.get('h3').should('have.text', 'Broken Images')
        cy.get('[src="asdf.jpg"]')
        .should('be.visible')
        .and($img => expect($img[0].naturalWidth).to.be.gt(0))
        cy.go('back')
    })

    it('its Challanging dom test case', function () {
        cy.get('ul > :nth-child(5)').click('left')
        cy.get('h3').should('have.text', 'Challenging DOM')
        cy.get(':nth-child(2) > :nth-child(7) > [href="#edit"]').click()

        //printing entire table
        cy.get("div[class='large-10 columns']>table>tbody>tr")
            .each(($row, index, $rows) => {

                cy.wrap($row).within(function () {
                    cy.get('td').each(function ($celldata, index, $columns) {
                        cy.log($celldata.text())
                    })
                })
            })
        //printing parirular row element of coloumn
        cy.get("div[class='large-10 columns']>table>tbody>tr").eq(3)

            .within(function () {

                cy.get('td').eq(6)

                    .within(function () {

                        cy.get('a').eq(1)

                            .invoke('show').click()

                    })

            })
        cy.wait(1000)

        cy.get('.large-2 ').within(function () {

            cy.get('a').eq(2).invoke('show').click()
        })

    })


    it('its checkboxes test case', function () {
        cy.get('ul > :nth-child(6)').click('left')
        cy.get('#checkboxes > :nth-child(1)').click()
        cy.get('#checkboxes > :nth-child(1)').uncheck().should('not.be.checked').and('have.value', 'on')
        cy.get('#checkboxes > :nth-child(3)').click({ force: true })
        cy.get('#checkboxes > :nth-child(3)').check().should('be.checked').and('have.value', 'on')
        cy.go('back')
    })

    it('its Context Menu test case', function () {
        cy.get('ul > :nth-child(7)').click('left')
        cy.get('.example > :nth-child(2)').should('have.text', 'Context menu items are custom additions that appear in the right-click menu.')
        cy.get('#hot-spot').rightclick('bottomRight')
        cy.on('window:alert', (txt) => {
            //Mocha assertions
            expect(txt).to.contains('You selected a context menu');
        })
    })


    it('its Disappering elements test case', function () {
        cy.get("a[href='/disappearing_elements']").click()
        cy.get('h3').should('have.text', 'Disappearing Elements')
        cy.get("a[href='/']").click()
        cy.go('back')
        cy.get("a[href='/about/']").click()
        cy.get('h1').should('have.text', 'Not Found')
        cy.go('back')
        cy.get("a[href='/contact-us/']").click()

    })


    it('its Drag And Drop test case', function () {
        cy.get("a[href='/drag_and_drop']").click()
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

    it('its DropDown test case', function () {
        cy.get("a[href='/dropdown']").click()
        cy.get('#dropdown').select(1).invoke("val").should("eq", "1")//
        cy.get('#dropdown').select('Option 2').invoke("val").should("eq", "2")
    })

    it('its Dynamic Loading test case', function () {
        cy.get("a[href='/dynamic_loading']").click()
        cy.get("a[href='/dynamic_loading/1']").click()
        cy.get('#start').click('left')
        cy.get('#finish > h4').should('have.text', 'Hello World!')

    })

    it('its File Download test case', function () {

        cy.on("window:confirm", (s) => {
            return false;
        });
        Downloads
        //cy.downloadFile()
        cy.on('window:confirm', (t) => {
            //Mocha assertions
            expect(t).to.equal("It's commonly used to encourage a user to take an action");
        })
        cy.wait(1000)
        cy.get('.modal-footer > p').click()
    })

    it('File Upload using cypress-file-upload npm package', () => {
        // const filepath = 'Downloads/upload_file'
        cy.get("a[href='/upload']").click()
        cy.get('#file-upload').selectFile('C:/Users/satyanarayana.k/CypressAutomation/cypress/fixtures/images/upload_file.xlsx', { action: 'drag-drop' })
        // cy.get("#drag-drop-upload").click().selectFile('C:/Users/satyanarayana.k/CypressAutomation/cypress/fixtures/images/upload_file.xlsx', { action: 'drag-drop' })
        cy.get('#file-submit').click()
        cy.get('#uploaded-files').contains('upload_file.xlsx')
    })


    it('File download using cypress-file-upload npm package', () => {
        //const filepath = 'Downloads/upload_file'
        cy.get("a[href='/download']").click()
        cy.downloadFile('https://the-internet.herokuapp.com/download', 'C:/Users/satyanarayana.k/OneDrive/Documents/Cypress Flipkart', 'Selenium.docx')
    })

    it('horizontal slider', function () {

        cy.get("a[href='/horizontal_slider']").click()

        cy.get("input[type='range']").invoke("val", "2").trigger("change")

        cy.get('span#range').should('have.text', 2)
    })

    it.skip('Scroll Infinite', function () {

        cy.get("a[href='/infinite_scroll']").click()
        cy.window().scrollTo("bottom")
        cy.get('.jscroll-added').should('be.visible')
        cy.get('.jscroll-inner')
        cy.get('.jscroll-added').should('have.length',2)
        cy.wait(2000)
        cy.window().scrollTo('bottom')
        cy.contains('Elemental Selenium')


        cy.get('.jscroll-added').should('have.length.at.most', 4).then(quotes =>
            {
                cy.window().scrollTo('bottom')
                cy.get('.jscroll-added').should('have.length', quotes.Length * 2)
                cy.window().scrollTo('bottom')
                cy.get(' .jscroll-added').should('have.length', quotes.Length * 3)
                cy.window().scrollTo('bottom')
               // cy.get('.jscroll-added').should('have.length' , quotes.length * 4)
            })

    })

    it('hovers', function () {

        cy.get("a[href='/hovers']").click()

        cy.get(".example > div:nth-child(3)").trigger('mouseover').invoke('show')
        cy.get(".example > div:nth-child(3)").should('be.visible')
        cy.get('.figcaption').should('include.text','user1')
        cy.get("a[href='/users/1']").invoke('show').click({force:true})
        cy.go('back')
        cy.get('.figcaption').should('include.text','user2')
        cy.get("a[href='/users/2']").invoke('show').click({force:true})

        cy.go('back')
        cy.get('.figcaption').should('include.text','user3')
        cy.get("a[href='/users/3']").invoke('show').click({force:true})
    })

    it('Key Presses', function () {

        cy.get("a[href='/key_presses']").click()
        cy.get('#target').type('{enter}')
       
       // cy.get('#result').should('have.text','enter')
        cy.get('#target').type('{del}')
        cy.get('#target').type('{ctrl}')
        cy.get('#target').type('{rightArrow}')
        cy.get('#target').type('tab order')
        cy.get('#target').type('{selectAll}{backspace}')
        
    })

    it('Multiple Windows', function () {

        cy.get("a[href='/windows']").click()
        cy.get("a[href='/windows/new']").invoke('removeAttr', 'target').click()
       
    }) 
    
    it('Redirect Link', function () {

        cy.get("a[href='/redirector']").click()
        cy.get("#redirect").click()

        cy.get("a[href='status_codes/200']").click()
       
    }) 

    // it.only('Redirect Link', function () {
    //     cy.visit('https://www.google.com/')

    //     cy.get("input[name='q']").type('gmail').type('{enter}')
    //     //cy.get("#redirect").click()

    //    // cy.get("a[href='status_codes/200']").click()
       
    // }) 
        
    it('WYSIWYG Editor', function () {

        cy.get("a[href='/tinymce']").click()
        cy.get('#mce_0_ifr').then(function($Iframe){
           const IframeContest= $Iframe.contents().find('body')
           cy.wrap(IframeContest)
           .clear()
           .type('HELLO!')

        })    

    })    
       
    it('Form Authentication', function () {

       cy.get("a[href='/login']").click()
       cy.get('#username').type('tomsmith')
       cy.get('#password').type('SuperSecretPassword!')
       cy.get('.radius').click()   
       cy.get('#flash').should('include.text','You logged into a secure area') 
       cy.get('.button').click()   
    }) 

    it('Sortable Data Tables', function () {

        cy.get("a[href='/tables']").click()
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

    it.only('Cypress commands are Asych', function () {

        cy.get('a[href="/jqueryui/menu"]').click()
        cy.get('a[href="http://api.jqueryui.com/menu/"]').click()
        cy.get("a[href='//api.jqueryui.com/category/selectors/']").click()
        cy.get("a[title='Permalink to :data() Selector']").should('have.text', ":data() Selector")
        cy.go('back').go('back')
        cy.wait(1000)

        //cy.get('li.ui-state-disabled.ui-menu-item').should('be.visibile')

        cy.contains("Enabled").trigger('mouseover')
        cy.get('#ui-id-4').trigger('mouseover').invoke('show')
        cy.get('#ui-id-5').invoke('show').click({ force: true })
        cy.downloadFile('https://the-internet.herokuapp.com/jqueryui/menu', 'C:/Users/satyanarayana.k/OneDrive/Documents/Cypress Flipkart', 'menu.pdf')
        cy.go('back')
        cy.contains("Enabled").trigger('mouseover')
        cy.get('#ui-id-4').trigger('mouseover').invoke('show')
        cy.get('#ui-id-5').invoke('show').click({ force: true })
        cy.downloadFile('https://the-internet.herokuapp.com/jqueryui/menu', 'C:/Users/satyanarayana.k/OneDrive/Documents/Cypress Flipkart', 'menu.csv')
    })
    

})


