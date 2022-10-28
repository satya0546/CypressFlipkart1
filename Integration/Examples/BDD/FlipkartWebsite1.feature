Feature: End To End Flipkart Validation

    Application Regression

   Background:
     Given User lands on Flipkart Dashboard page
     When User clicks the Login on Header page 
     Then User enter Email or PhoneNumber and password
        |PhoneNumber  | password  |
        |9581516088   | satya0546 |
    And User clicks on the Login in popup window
    
    
    Scenario: Flipkart Search functionality steps
    # Given User lands on Flipkart Dashboard page
    When User searches for any catagerory by entering any Catagerory name
       |Search tab|
       |mobiles   |
    Then User apply filters on paritular brand on the catagerory
    And User validates that Nextpage and Previous page is clickable mode or not

    Scenario: Flipkart My Profile tab steps
    # Given User lands on Flipkart Dashboard page
    When User should be mouseover on Signin tab then click on My profile
    And User validates that First name and last was visible or not
    And User should clickon the edit function of Email address
    And User should clickon the Change password option
    Then User click on the edit function of Phone Number

   @Smoke
    Scenario: Flipkart My Logout tab steps
    #Given User lands on Flipkart Dashboard page
    When User should be mouseover on Signin tab then click on My Logout tab


    Scenario: Flipkart My Travel Tab steps
    # Given User land on the Flipkart Dashboard page
    And User clicks on the My Travel catagerory
    When User select the round Trip option
    And User selects the from and to state option
    And User selects the Depature and Return Date
    And User selects the Travellers and Cabin Class
    And User clicks on the Search Tab
    Then User apply filters as per Customer Requirements




    #  Scenario: Flipkart My Logout tab steps
   #  Given User lands on Flipkart Dashboard page
   #  When User should be mouseover on Signin tab then click on My Logout tab
