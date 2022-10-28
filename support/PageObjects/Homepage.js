class HomePage
{

getEditNameBox()
{
  return cy.get('input[name="name"]:nth-child(2)')
}

getTwoDataBinding()
{
    return cy.get('input[name="name"]:nth-child(1)')
}

getGender()
{
    return cy.get('select')
}

getEntrepreneaur()
{
    return cy.get('#inlineRadio3')
}

getShopTab()
{
    return cy.get(':nth-child(2) > .nav-link')
}

}

export default HomePage;