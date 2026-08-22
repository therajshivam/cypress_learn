Feature: End to End Ecommerce validation

@Regression
Scenario: Ecommerce product delivery
Given I am on Ecommerce Page
When I login to the application
And I add items to Cart and checkout
And Validate the total price limit
Then select the country submit and verify Thankyou

# instead of getting data from the cypress fixtures, get data from feature file using cucumber terminologies.
@Smoke
Scenario: Ecommerce product delivery
Given I am on Ecommerce Page
When I login to the application portal
| username | password | 
|rahulshettyacademy | Learning@830$3mK2 |
And I add items to Cart and checkout
And Validate the total price limit
Then select the country submit and verify Thankyou

# run with tags
# npx cypress run --env tags="@Smoke"

# generating html reporting for cucumber bdd
# two steps -> json then html report
# change something in package.json

# note : leaving the cucumber report part will do later, too much complexities.