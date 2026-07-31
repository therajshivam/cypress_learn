# Module 9

## Child Window

```javascript
cy.get('#opentab').then(($el) => {
  const url = $el.prop('href')
  cy.visit(url)
})
```

- `.prop('href')` → Get the URL from a link.
- `cy.visit(url)` → Navigate directly to the page.
- Use `cy.origin()` when testing a different origin.

> **Note:** Rahul Shetty's demo is outdated. Learn the modern approach after completing the course.

---

## iFrames

```javascript
cy.frameLoaded('#courses-iframe')

cy.iframe()
  .find(...)
  .click()
```

- An **iFrame** is an HTML document embedded inside another HTML document.
- `cy.frameLoaded()` → Wait for the iframe to load.
- `cy.iframe()` → Access the iframe body.

> **Note:** `cypress-iframe` is a legacy plugin. Modern Cypress projects use different strategies depending on whether the iframe is same-origin or cross-origin. Learn the modern approach after completing the course.

---

## Calendar

```javascript
cy.get('.react-date-picker__calendar-button__icon').click()

cy.contains('button', year).click()

cy.get('.react-calendar__year-view__months__month')
  .eq(month - 1)
  .click()

cy.contains('abbr', date).click()
```

**Flow**

```
Open Calendar
      ↓
Select Year
      ↓
Select Month
      ↓
Select Date
      ↓
Validate
```

---

## Assertion

```javascript
cy.wrap($el)
  .invoke('val')
  .should('eq', expected)
```

- `.invoke('val')` → Get the value of an input field.

---

## Commands Learned

| Command | Purpose |
|---------|---------|
| `.prop()` | Get DOM property |
| `.invoke('val')` | Get input value |
| `cy.frameLoaded()` | Wait for iframe to load |
| `cy.iframe()` | Access iframe body |
| `cy.contains()` | Find element by text |
| `cy.origin()` | Handle cross-origin |

---

## Points To Remember

- `.prop('href')` returns the URL of a link.
- Use `cy.visit()` to navigate directly to a URL.
- An iframe is an embedded HTML document.
- Calendar automation follows **Year → Month → Date**.
- Use `.invoke('val')` to validate input field values.