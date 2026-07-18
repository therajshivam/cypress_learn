/// <reference types="Cypress" />

// 10. Handling Child Windows

describe('Handling Child Windows', function(){
    it('Should Handle Child Windows', function(){
        // Step 1: Navigate to the practice website
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        // Note: Cypress cannot directly handle child windows or new tabs
        // Strategy: Instead of opening new window, we'll get the URL and navigate to it

        // Step 2: Get the URL from the window opener button
        // Using jQuery's .prop() method to get the 'href' property value
        cy.get('#opentab').then(function(el){
            // Extract URL from the element
            const url = el.prop('href')
            // Step 3: Navigate to the extracted URL
            cy.visit(url) // navigates to qaclickacademy.com

            // Step 4: Handle cross-origin navigation using cy.origin
            cy.origin(url, ()=>{
                // Click on the About link in the new page
                cy.get('div.sub-menu-bar a[href*="about"]').click()
            })
        })
    })
})

/*
Learning Notes: Handling Child Windows in Cypress

What we learned:
1. Child Window Limitations:
   - Cypress doesn't support multiple browser windows/tabs
   - Cannot directly interact with pop-up windows
   - Need alternative approaches for handling such scenarios

2. Alternative Solution Strategy:
   - Instead of opening new window, extract target URL
   - Navigate directly to the URL in the same window
   - Use cy.origin() for cross-origin navigation

3. Important Concepts:
   a) jQuery Properties:
      - .prop() method used to get element properties
      - Different from .attr() as it gets JavaScript property value
      - Useful for getting dynamic values

   b) Cross-Origin Navigation:
      - cy.origin() handles cross-domain navigation
      - Requires separate context for commands
      - Helps maintain security while testing across domains

4. Key Commands Used:
   - cy.get() - Element selection
   - .prop() - Get element property
   - cy.visit() - Page navigation
   - cy.origin() - Cross-origin handling

5. Best Practices:
   - Always handle child windows by URL extraction
   - Use cy.origin() when navigating to different domains
   - Include proper error handling
   - Consider alternative flows for pop-up dependent features

6. Common Use Cases:
   - OAuth windows
   - Payment gateway popups
   - External link verification
   - Multi-domain applications

This test demonstrates a common web automation challenge - handling child windows,
and shows how to work around Cypress's single-page architecture limitation by
using URL extraction and direct navigation instead of actual window handling.
*/
 