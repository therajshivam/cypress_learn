/// <reference types="Cypress" />

// 12. Handling Calenders

describe('Handling Calenders', function(){
    it('Should Handle Calenders', function(){
        // Step 1: Define the target date components
        const monthNumber = "6"  // June (0-based index in the calendar)
        const date = "15"        // Day of the month
        const year = "2027"      // Target year

        // Create an array for validation
        const expectedList = [monthNumber, date, year]

        // Step 2: Navigate to the website
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/offers')

        // Step 3: Open the calendar widget
        cy.get('.react-date-picker__inputGroup').click()
        // Click twice on the calendar navigation to access year selection
        cy.get('.react-calendar__navigation__label__labelText--from').click()
        cy.get('.react-calendar__navigation__label__labelText--from').click()

        // Step 4: Select the year
        cy.contains('button', year).click() 

        // Step 5: Select the month (subtract 1 as array is 0-based)
        cy.get(".react-calendar__year-view__months__month").eq(Number(monthNumber) - 1).click()

        // Step 6: Select the day
        cy.contains('abbr', date).click() 

        // Assertion
        // Step 7: Verify the selected date
        cy.get(".react-date-picker__inputGroup__input").each(($e1, index) => {
            cy.wrap($e1).invoke('val').should('eq',expectedList[index])
        })

    })
})

/*
Learning Notes: Calendar Handling in Cypress

What we learned:
1. Calendar Structure:
   - Modern React calendars often have a hierarchical structure (year → month → date)
   - We need multiple clicks to drill down to different calendar views

2. Date Selection Process:
   - First click opens the calendar
   - Double click on navigation label to access year selection
   - Select year → month → date in sequence

3. Important Concepts:
   - Array indexing: Months are 0-based (January = 0, December = 11)
   - Element location: Using class selectors for calendar components
   - Dynamic selection: Using eq() for selecting specific months

4. Validation Technique:
   - Created an array of expected values
   - Used .each() to iterate through date input fields
   - Used invoke('val') to get the actual values
   - Compared each component (month, date, year) individually

5. Key Cypress Commands Used:
   - cy.get() - for element selection
   - cy.contains() - for finding elements with specific text
   - cy.click() - for interaction
   - eq() - for index-based selection
   - invoke() - for getting element values
   
This test demonstrates how to handle complex calendar widgets in modern web applications,
particularly those built with React. The approach can be adapted for similar calendar
components with different implementations.
*/
 