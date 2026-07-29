# Module 8

## Alerts & Confirm Popups

```javascript
cy.on('window:alert', (text) => {
  expect(text).to.equal(...)
})

cy.on('window:confirm', (text) => {
  expect(text).to.equal(...)
})
```

- Cypress automatically accepts browser alerts and confirm dialogs.
- `window:alert` → Validate alert text.
- `window:confirm` → Validate confirm popup text.

---

## Child Tab Handling

```javascript
cy.get('#opentab')
  .invoke('removeAttr', 'target')
  .click()
```

- `.invoke()` → Call a jQuery method.
- `removeAttr('target')` → Open the page in the same tab.

### Cross-Origin

```javascript
cy.origin('https://example.com', () => {
  // commands
})
```

- `cy.origin()` → Execute commands on another origin (domain).

---

## Web Tables

```javascript
cy.get('tr td:nth-child(2)').each(($el, index) => {
  if ($el.text().includes('Python')) {
    cy.wrap($el).next().should('have.text', '25')
  }
})
```

**Flow**

```
Iterate → Find Text → next() → Validate
```

---

## Mouse Hover

```javascript
cy.get('div.mouse-hover-content')
  .invoke('show')

cy.contains('Top').click()
```

OR

```javascript
cy.contains('Top').click({ force: true })
```

- Cypress has no built-in `.hover()` command.
- `.invoke('show')` → Show hidden element.
- `force: true` → Ignore actionability checks.

---

## Commands Learned

| Command | Purpose |
|---------|---------|
| `cy.on()` | Listen to browser events |
| `.invoke()` | Call a jQuery method |
| `.next()` | Get next sibling |
| `cy.origin()` | Handle cross-origin |
| `.click({ force: true })` | Force click |

---

## Points To Remember

- Cypress automatically accepts alerts and confirm dialogs.
- Use `window:alert` and `window:confirm` to validate popup text.
- Remove `target="_blank"` to stay in the same tab.
- Use `cy.origin()` for different domains.
- Use `.next()` to move to the next sibling.
- Mouse hover can be handled with `.invoke('show')` or `.click({ force: true })`.