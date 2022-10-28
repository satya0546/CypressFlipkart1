/// <reference types="cypress"  />

Cypress.on('uncaught:exception', (err, runnable) => {

    // returning false here prevents Cypress from
  
    // failing the test
  
    return false
  
    });

describe('My first test suite',function()
{
it('My fisrt test case',function()
{
    cy.visit("https://www.flipkart.com/");
    cy.contains("Login").click();
    cy.get(":nth-child(1) > ._2IX_2-").type("9581516088")
    cy.get(":nth-child(2) > ._2IX_2-").type("satya0546")
    cy.get('._1D1L_j > ._2KpZ6l').click()
    //cy.get(":nth-child(2) > label span")
    cy.wait(5000)
    cy.get('.InyRMC._3Il5oO :nth-child(8)')
    cy.get('._3704LK').type("mobiles").click({ force: true })
    cy.contains("in Mobiles").click()
    cy.contains('MORE').click()
    cy.get('input[placeholder="Search Brand"]').type("vivo")
    //cy.get('[title="vivo"] > ._1Y4Vhm > ._2iDkf8 > ._24_Dny').check()
    cy.get(':nth-child(2) > ._4921Z > ._1Y4Vhm > ._2iDkf8').click()
    cy.get('.THxusM').click()

    // prints all the phone names
    cy.spy(console, 'log').as('console')
    cy.get(':nth-child(2)[style="flex-grow: 1; overflow: auto;"]').each(($el,index ,$list) => {
      const text=($el.text())
      console.log(text)

       if ($el.eq() === 'vivo T1 44W') {

    // wrap this element so we can,use cypress commands on it

    cy.wrap($el).click()

  } else {

    // do something else

  }
cy.contains('vivo T1X ').should('be.visible').invoke('removeAttr', 'target').click();
cy.get('.hivXmn').type('500049')
cy.get('._2P_LDn').click()
cy.get("//*[local-name()='svg' and @viewBox='0 0 16 15']/*[local-name()='path']").click()
//cy.get('.row > :nth-child(1) > ._2KpZ6l').click()
//cy.get('form > ._2KpZ6l').dblclick({force:true})
})
        
    
    }) 
  })








// cy.spy(console, 'log').as('console')
//     cy.get('._13oc-S').each(($el,index ,$list) => {
//       const text=($el.text())
//       console.log(text)
//      if (text.includes( 'vivo X80 Pro')) {
//         //console.log(text)
//         const pop_url = "/vivo-x80-pro-cosmic-black-256-gb/p/itm91e0e7dd2d74d?pid=MOBGE89YSMWJV5PZ&lid=LSTMOBGE89YSMWJV5PZCBLFXL&marketplace=FLIPKART&q=mobiles&store=tyy%2F4io&srno=s_1_19&otracker=AS_QueryStore_OrganicAutoSuggest_1_7_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_1_7_na_na_na&fm=search-autosuggest&iid=cc6ab2fd-96ed-44fd-9a8b-e27c8f82c485.MOBGE89YSMWJV5PZ.SEARCH&ppt=sp&ppn=sp&ssid=l5wzak016o0000001663665821809&qH=eb4af0bf07c16429"
//         cy.window().then(win => {
//           const stub = cy.stub(win, 'open').as('windowopen')
//         })

//         cy.get('[data-id="MOBGE89YSMWJV5PZ"] > ._2kHMtA > ._1fQZEK > ._3pLy-c > .col-7-12 > ._4rR01T').click({force:true})
//        cy.get('@windowopen').should('be.calledWith',pop_url)
//         //cy.go('back')
//         cy.window().then(win => {
//         win.location.href = pop_url
//         //cy.get('.hivXmn').type(500049)
//         //cy.get('._2P_LDn').click()
//        // cy.get('._2usHgU').click()
//        //cy.get('form > ._2KpZ6l').click({force:true})
//        // cy.get('.row > :nth-child(1) > ._2KpZ6l').click({force:true})
//        // cy.get(':nth-child(3) > .Qc7Nxn > :nth-child(2) > ._2wKoSe > ._1UcWw6 > ._2KpZ6l').click({force:true})
//         })

//         //cy.wrap(text).click()
    
       
    
    
