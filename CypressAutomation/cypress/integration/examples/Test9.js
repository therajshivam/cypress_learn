/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'


// 11. Handling Frames

describe('Handling Frames', function(){
    it('Should Handle Frames', function(){
        // Step 1: Navigate to the practice website
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        
        // Step 2: Setup iframe handling
        // Note: Plugin must be installed first using: npm install -D cypress-iframe
        
        // Step 3: Load and verify iframe is present
        cy.frameLoaded("#courses-iframe") // Tells Cypress to wait for iframe to load

        // Step 4: Interact with elements inside iframe
        // Find and click the first mentorship link
        cy.iframe().find('a[href*="mentorship"]').eq(0).click()
        cy.wait(6000) // Wait for content to load after click

        // Step 5: Verify content inside iframe
        // Check if there are exactly 2 pricing title headers
        cy.iframe().find("h1[class*='pricing-title']").should('have.length', 2)

    })
})

/*
Learning Notes: Handling iframes in Cypress

What we learned:
1. iframe Basics:
   - iframes are like embedded webpages within a webpage
   - Regular Cypress commands don't work directly on iframe content
   - Special handling is required using cypress-iframe plugin

2. Setup Requirements:
   - Need to import cypress-iframe plugin
   - Must include reference types for typescript support
   - Required npm installation: npm install -D cypress-iframe

3. Key Commands:
   - cy.frameLoaded() - Waits for iframe to load completely
   - cy.iframe() - Switches context to work within iframe
   - Combined with .find() to locate elements inside iframe

4. Important Concepts:
   - Always load frame before interacting with it
   - Use cy.iframe() before every command that works inside iframe
   - Regular Cypress commands work after cy.iframe()
   - Waits might be needed for iframe content to update

5. Best Practices:
   - Always verify iframe is loaded using frameLoaded()
   - Use proper selectors within iframe
   - Include appropriate waits for dynamic content
   - Verify elements exist before interacting

6. Common Patterns:
   - Load frame → Switch to iframe context → Find elements → Interact → Verify
   - Using partial selectors (href*="mentorship") for flexibility
   - Verifying counts of elements for assertions

This test demonstrates handling iframes, which is a common challenge in web automation.
The cypress-iframe plugin makes it possible to work with iframe content almost as easily
as regular page content, but with proper frame context switching.
*/