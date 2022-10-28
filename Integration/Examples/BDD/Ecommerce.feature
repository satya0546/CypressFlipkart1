Feature: End To End Ecommers Validation

    Application Regression

    @Regression
    Scenario: Ecommers Products Delivery
    Given User open Ecommerce page
    When User add products to cart
    And User validates the total prices
    Then Select the country submit and verify Thankyou

    @Smoke
    Scenario: Filling the form to shop
    Given User open Ecommerce page
    When User fill the form details
      |name  | gender |
      |bobz  | Male   |
    Then User validates the forms behaviour
    And User the select the Shop page