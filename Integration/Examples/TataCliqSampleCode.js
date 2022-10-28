describe('My Test Suite', function() 
{
 
it('My handlemouseover testcase',function() {
 

   cy.visit("https://www.tatacliq.com/")
   cy.wait(5000)
   //cy.get('.wzrkPPtitle').eq(1).click()
   cy.get('.QuickLinks__quickLinksCard ').eq(7).click({force:true})
   cy.get('.QuickLinks__quickLinksCard').eq(1).click({force:true})
   cy.wait(1000)
  // cy.get('#ProductModule-MP000000007356780 > .ProductModule__imageAndDescriptionWrapper').click()

   cy.get('.Grid__element').each(($el,index ,$list) => {
    const text=($el.text())
   })
   const pop_url = "/homepro-fingertip-pulse-oximeter-with-oled-display-white-blue/p-mp000000007356780"
      cy.window().then(win => {
        const stub = cy.stub(win, 'open').as('windowopen')
      })
   cy.get('@windowopen').should('be.calledWith',)






   //  cy.contains('HomePro Fingertip Pulse Oximeter with OLED Display')
   //  .invoke('removeAttr','target')
   //  .click()


    //console.log(text)
   // if (text.includes( 'HomePro Fingertip Pulse Oximeter with OLED Display ')) {
   //    //console.log(text)
   //    const pop_url = "/homepro-fingertip-pulse-oximeter-with-oled-display-white-blue/p-mp000000007356780"
   //    cy.window().then(win => {
   //      const stub = cy.stub(win, 'open').as('windowopen')
   //    })

   //    cy.get('#ProductModule-MP000000007356780 > .ProductModule__imageAndDescriptionWrapper').click({force:true})
   //    cy.get('@windowopen').should('be.calledWith',pop_url)
      //cy.go('back')
   //    cy.window().then(win => {
      
   //    try {
   //       win.location.href = pop_url
   //       const result = JSON.parse(undefined);
   //     } catch (err) {
   //       // 👇️ This runs
   //       console.log('Error: ', err.message);
   //     }
   //    cy.wait(10000)
   //    cy.get('[data-test="input2-field"]').type(500049)
   //    cy.get(':nth-child(1) > .ProductDescriptionPage__buttonAddToBag > [data-test="button-main-div"]').click()
   //   // cy.get('._2usHgU').click()
   //    //cy.get('form > ._2KpZ6l').click({force:true})
   //    //cy.get('.row > :nth-child(1) > ._2KpZ6l').click({force:true})
   //   // cy.get(':nth-child(3) > .Qc7Nxn > :nth-child(2) > ._2wKoSe > ._1UcWw6 > ._2KpZ6l').click({force:true})
   //    })

       

//})

})
})




// cy.window().then(function(p){
//    //stubbing prompt window
//    cy.stub(p, "prompt").returns("Tutorialspoint");
//    // click on Click for JS Prompt button
//    cy.get('#ProductModule-MP000000009127736 > .ProductModule__imageAndDescriptionWrapper').invoke('removeAttr','target').click()
//    // verify application message on clicking on OK
//   // cy.get('#result').contains('HomePro Fingertip Pulse Oximeter with OLED Display')
// });