describe('My test suite',function()
{

    it('My Handling ALERTS testcase', function()
    {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get('#alertbtn').click();
        //window alert
        cy.on('window:alert',(str)=>
        {
           expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })
        
        //window:confirm
        cy.get('[value="Confirm"]').click();
        cy.on('window:confirm',(str)=>
        {
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })

       //cypress not handle child tabs instead of its load on same window by using the removeattr method in jquery
        cy.get('#opentab').invoke('removeAttr','target').click();
        cy.url().should('include','rahulshettyacademy')
        cy.go('back');
    })

})