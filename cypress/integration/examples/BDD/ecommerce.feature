Feature: end to end Ecommerce Validation
    @UnitTest
    Scenario: Ecommerce products delivery
        Given I am on Ecommerce Page
        When I login to the application
        And I add items to cart and Checkout
        And I validate the total price limit
        Then Select the country submit and verify Thank You

    @SmokeTest
    Scenario Outline: Ecommerce products delivery cucumber driven
        Given I am on Ecommerce Page
        When I login to the application portal
            | username           | password          |
            | rahulshettyacademy | Learning@830$3mK2 |
        And I add items to cart and Checkout
        And I validate the total price limit
        Then Select the country submit and verify Thank You




