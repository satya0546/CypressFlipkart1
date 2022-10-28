class FlipkartLoginPage
{

getClickLogin()
{
  return cy.contains("Login")
}

getUserName()
{
  return cy.get(":nth-child(1) > ._2IX_2-.VJZDxU")
}

getPassword()
{
    return cy.get(":nth-child(2) > ._2IX_2-._3mctLh.VJZDxU")
}

getLoginButton()
{
    return cy.get('._1D1L_j > ._2KpZ6l')
}

//Search functionality methods


getClickSearchTab()
{
  return cy.get('._3704LK').click({ force: true })
  //return cy.get('input[name="q"]')
}

getMobileclick()
{
  return cy.contains("in Mobiles")
}

//Filter brand name after saerch 
getFilterBrand()
{
  return cy.get('input[placeholder="Search Brand"]')
}
getMoreBrands()
{
  return cy.contains('MORE')
}

getCheckboxClickforMi()
{
  return cy.get(':nth-child(2) > ._4921Z > ._1Y4Vhm > ._2iDkf8')
}
getApplyFilters()
{
  return cy.get('.THxusM')
}

getApplyonRating()
{
  return cy.get('[title="4★ & above"] > ._1Y4Vhm > ._2iDkf8 > ._24_Dny')
}
getApplyonRam()
{
  return cy.get('[title="8 GB and Above"]> ._1Y4Vhm > ._2iDkf8 > ._24_Dny')
}

getSortBy()
{
  return cy.get('._5THWM1 > :nth-child(3)')
}

getNextPage()
{
  //filter apply for brand,
  //return cy.get('.yFHi8N > :nth-child(11)')

  //filter apply for brand,ram,internal storage
  return cy.get('._1LKTO3')
}

getPreviousPage()
{
  //filter apply for brand,
  //return cy.get('.yFHi8N > :nth-child(1)')

//filter apply for brand,ram,internal storage
  return cy.get('.yFHi8N > :nth-child(1) > span')
}
getclickonMintab()
{
  return cy.get('._1YAKP4  > ._2YxCDZ ')
}
getSetMinPriceValue()
{
  return cy.get('._1YAKP4  > ._2YxCDZ  > :nth-child(5)')
}

getSetMaxPriceValue()
{
  return cy.get('._1YAKP4  > ._2YxCDZ  > :nth-child(8)')
}

//My Profile functionality methods

getEditPersonalImformation()
{
  return cy.get('._1cyhik > :nth-child(2)')
}

getPhoneEditable()
{
  return cy.get(':nth-child(2) > ._30ILIt > ._2GZbEx > ._3memBI')
}

getChangePassword()
{
  return cy.get('._2GZbEx > :nth-child(3)')

}

getChangeEmailiDByEdit()
{
  return cy.get(' :nth-child(1) > ._30ILIt > ._2GZbEx > ._3memBI')
  
}

//My Flipkart Travel categerory

getClickOnTravelCategory()
{
  return cy.get('.InyRMC._3Il5oO :nth-child(8)')
}

getRoundTrip()
{
return  cy.get('[for="ROUND_TRIP"]').click()
//cy.get('[for="ONE_WAY"]').click()
}

getSearchTab()
{
  return cy.get('._1QYQF8').dblclick({ force:true })
}

getResetAll()
{
  return cy.get('._18jzl6').click()

}

getStops()
{
  return cy.get(':nth-child(2) > .vUK3-L > :nth-child(1) >  ._2iDkf8 > ._24_Dny').click()     //non stop
  //return cy.get(':nth-child(2) > .vUK3-L > :nth-child(2) >  ._2iDkf8 > ._24_Dny').click()  // 1 stop
}

getStartedFromDepature()
{
  //return cy.get(':nth-child(3) > .vUK3-L > :nth-child(1) >  ._2iDkf8 > ._24_Dny').click()  // early morning
  return cy.get(':nth-child(3) > .vUK3-L > :nth-child(2) >  ._2iDkf8 > ._24_Dny').click()  // morning
  return cy.get(':nth-child(3) > .vUK3-L > :nth-child(3) >  ._2iDkf8 > ._24_Dny').click()  // afternoon
  return cy.get(':nth-child(3) > .vUK3-L > :nth-child(4) >  ._2iDkf8 > ._24_Dny').click()  // Night
}

getOnlyStartedFromDepature()
{
  return cy.get(':nth-child(4) > .vUK3-L > :nth-child(1) >  ._2iDkf8 > ._24_Dny').click()  // early morning'
  return cy.get(':nth-child(4) > .vUK3-L > :nth-child(2) >  ._2iDkf8 > ._24_Dny').click()  // morning
  return cy.get(':nth-child(4) > .vUK3-L > :nth-child(3) >  ._2iDkf8 > ._24_Dny').click()  // afternoon
  return cy.get(':nth-child(4) > .vUK3-L > :nth-child(4) >  ._2iDkf8 > ._24_Dny').click()  // Night
}

}
export default FlipkartLoginPage