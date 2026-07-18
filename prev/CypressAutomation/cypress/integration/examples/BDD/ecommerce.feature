Feature: End to end Ecommerce Website

@Regression
Scenario: Ecommerce product delivery
Given I am on Ecommerce Page
When I login to the application
And I add items to the cart and checkout
And Validate the total price limit
Then select the country submit and verify Thankyou


@Smoke
Scenario Outline: Ecommerce product delivery cucumber driver
Given I am on Ecommerce Page
When I login to the application portal
| username           | password |
| rahulshettyacademy | learning |
And I add items to the cart and checkout
And Validate the total price limit
Then select the country submit and verify Thankyou