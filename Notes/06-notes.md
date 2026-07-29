# Module 7

## Checkboxes

### Check

```javascript
cy.get("#checkBoxOption1")
  .check()
  .should("be.checked")
  .and("have.value", "option1");
```

### Uncheck

```javascript
cy.get("#checkBoxOption1").uncheck().should("not.be.checked");
```

### Multiple Checkboxes

```javascript
cy.get('input[type="checkbox"]').check(["option2", "option3"]);
```

**Commands**

- `.check()` → Select checkbox/radio button.
- `.uncheck()` → Deselect checkbox.
- `be.checked` → Verify checked state.
- `have.value` → Verify value attribute.
- `.and()` → Chain multiple assertions.

---

## Static Dropdown

```javascript
cy.get("select").select("option2").should("have.value", "option2");
```

- `.select()` works only with native HTML `<select>` elements.

---

## Dynamic Dropdown

```javascript
cy.get("#autocomplete").type("ind");

cy.get(".ui-menu-item div").each(($el) => {
  if ($el.text() === "India") {
    cy.wrap($el).click();
  }
});

cy.get("#autocomplete").should("have.value", "India");
```

### Flow

```
Type
   ↓
Suggestions appear
   ↓
Iterate (.each())
   ↓
Compare text
   ↓
Click matching option
   ↓
Validate selected value
```

---

## Handling Visible and Invisible Elements using Assertions

### Visibility Assertions

```javascript
// task 1 : verify whether the editbox is in visible or not.
cy.get("#displayed-text").should("be.visible");
// task 2 : click on hide button, verify its disappear or not.
cy.get("#hide-textbox").click();
cy.get("#displayed-text").should("not.be.visible");
// task 2 : click on show button, verify its appear back or not.
cy.get("#show-textbox").click();
cy.get("#displayed-text").should("be.visible");
```

- `be.visible` → Element is visible.
- `not.be.visible` → Element exists but is hidden.

---

## Radio Button

```javascript
cy.get('[value="radio2"]').check().should("be.checked");
```

- Radio buttons are selected using `.check()`.

---

## Commands Learned

| Command      | Purpose                                    |
| ------------ | ------------------------------------------ |
| `.check()`   | Select checkbox/radio                      |
| `.uncheck()` | Deselect checkbox                          |
| `.select()`  | Select option from static dropdown         |
| `.type()`    | Enter text                                 |
| `.should()`  | Assertion                                  |
| `.and()`     | Chain assertions                           |
| `.each()`    | Iterate elements                           |
| `cy.wrap()`  | Convert jQuery object to Cypress Chainable |

---

## Points To Remember

- Use `.check()` for **checkboxes and radio buttons**.
- `.select()` works only for **native `<select>` dropdowns**.
- Dynamic dropdowns are handled using:
  - `.type()`
  - `.each()`
  - `.text()`
  - `cy.wrap().click()`
- Use `be.visible` and `not.be.visible` for visibility assertions.
- Use `.and()` to chain multiple assertions.
- Prefer `cy.wrap($el).click()` over `$el.click()` to keep actions inside the Cypress command chain.
