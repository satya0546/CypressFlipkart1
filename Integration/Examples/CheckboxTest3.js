describe('My test suite',function()
{

    it('My checkbox testcase', function()
    {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1');
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked');
        cy.get('input[type="checkbox"]').check(['option2','option3']);   

     //Static dropdown example
        cy.get(' select#dropdown-class-example').select('option2').should('have.value','option2');

     //Dyinamic dropdown example
     cy.get('#autocomplete').type('Ind');
     cy.get('.ui-menu-item').each(($el,Index,$List) =>{
     if($el.text()==='India'){
       cy.wrap($el).click();
     }

     })
     cy.get('#autocomplete').should('have.value','India')
     
     //Handling visible and non visible element
    cy.get('#displayed-text').should('be.visible');
    cy.get('#hide-textbox').click();
    cy.get('#displayed-text').should('not.be.visible');
    cy.get('#show-textbox').click();
    cy.get('#displayed-text').should('be.visible');
    
     //Handling Radio buttons
     cy.get('[value="radio1"]').check().should('be.checked').should('have.value','radio1');
     cy.get('.radioButton').check(['radio2','radio3']); 

    })



})