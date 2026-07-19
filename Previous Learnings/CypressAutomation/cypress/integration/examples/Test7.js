/// <reference types="Cypress" />

// 9. Handling Mouse Hover Pop-ups 

describe('Handling Mouse Hover Pop-ups', function(){
    it('Should Handle Mouse Hover Pop-ups', function(){
        // Step 1: Navigate to the practice website
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        // Method 1: Using jQuery's show() method
        // Note: Cypress doesn't directly support hover events
        // Strategy: Make hidden elements visible using jQuery's show()
        
        // Step 2: Show the hover menu using jQuery
        cy.get("div.mouse-hover-content").invoke('show')  // Makes hidden menu visible
        // Step 3: Click the 'Top' link in the now-visible menu
        cy.contains('Top').click()
        // Step 4: Verify the navigation worked
        cy.url().should('include','top')

        // Method 2: Using force click
        // Alternative approach: Click element even when it's not visible
        cy.contains('Top').click({force: true})  // Forces click without showing menu
        cy.url().should('include','top')  // Verify navigation again

    })
})

/*
Learning Notes: Handling Mouse Hover Pop-ups in Cypress

What we learned:
1. Hover Event Limitations:
   - Cypress doesn't have direct support for mouse hover events
   - Traditional hover interactions don't work as in manual testing
   - Need alternative approaches to handle hover-dependent elements

2. Two Solution Strategies:
   a) jQuery show() method:
      - Uses jQuery to make hidden elements visible
      - Must target immediate parent of hidden element
      - More "natural" approach as it reveals the actual menu
   
   b) Force Click approach:
      - Uses {force: true} option with click()
      - Bypasses visibility checking
      - More direct but less realistic

3. Important Concepts:
   a) jQuery Integration:
      - Cypress can invoke jQuery methods
      - .invoke('show') makes hidden elements visible
      - Useful for manipulating DOM element visibility

   b) Force Interactions:
      - {force: true} bypasses Cypress's built-in checks
      - Can click elements even when they're not visible
      - Useful when normal interaction isn't possible

4. Key Commands Used:
   - cy.get() - Element selection
   - .invoke() - Call jQuery methods
   - .contains() - Find element by text
   - .click() - Click interaction
   - .url() - URL verification

5. Best Practices:
   - Try jQuery show() method first (more realistic)
   - Use force click as a backup approach
   - Always verify the result of the interaction
   - Include proper assertions after actions

6. Common Use Cases:
   - Navigation menus
   - Dropdown menus
   - Tooltips
   - Contextual popups

This test demonstrates two different approaches to handle hover-dependent elements,
showing how to work around Cypress's limitations with mouse events. Both methods
are valid, but the jQuery approach more closely mimics real user interaction.
*/