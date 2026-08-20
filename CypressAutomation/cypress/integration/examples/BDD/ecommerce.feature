Feature: End to End Ecommerce validation

Scenario: Ecommerce product delivery
Given I am on Ecommerce Page
When I login to the application
And I add items to Cart and checkout
And Validate the total price limit
Then select the country submit and verify Thankyou