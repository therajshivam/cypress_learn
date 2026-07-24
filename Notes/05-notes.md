# Module 6

## Parent Child Chaining

`cy.get().find()`

```Javascript
    cy.get('.products').find('.product').should('have.length', 4)

    // task : out of four products, add to cart the third product.
    cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
```

- `cy.get()` → Select parent element.
- `.find()` → Find child element(s) inside the parent.
- `.eq(index)` → Select element at a specific index (0-based).
- `.contains()` → Find an element containing the given text.
- `.click()` → Click the selected element.


## `.each( )` - Iterate through an array

`cy.get('.products').find('.product')` - this will returns an array.

`.each()` loops through every element yielded by the previous Cypress command. It takes a callback function.

```Javascript
    cy.get('.products').find('.product')
        .each(($el, index, $list) => {

          const textVeg = $el.find('h4.product-name').text()

          if(textVeg.includes('Cashew')) {
            cy.wrap($el).find('button').click()
          }
        })
```

`.each(($el, index, $list) => {})` 
- `$el` → Current jQuery element.
- `index` → Current index.
- `$list` → All matched elements.


`cy.wrap()` : Converts a jQuery object (or any JavaScript object) into a Cypress Chainable.

  
`.text()` : Returns the text content of the selected element. It is a jQuery method, not a Cypress command.

**Why `cy.wrap()`?**
- `$el` is a jQuery object.
- Cypress commands cannot run directly on jQuery objects.
- `cy.wrap()` converts it into a Cypress Chainable so Cypress can continue the command chain (wait, retry, and execute commands).

## Cypress Asynchronous Nature and Promise Handling

**What is Asynchronous?**  
In asynchronous programming, tasks do not wait for the previous task to finish before starting. Multiple operations can be initiated without blocking the execution flow.

JavaScript is asynchronous by nature, and Cypress is built on top of JavaScript (Node.js).

### How Cypress Handles Asynchronous Code
- Although Cypress is asynchronous internally, it **executes Cypress commands in the order they are written**.

- It achieves this by placing every Cypress command into an internal **Command Queue** and executing them one by one.

- So, from the developer's perspective, Cypress behaves as if it were synchronous.

**Command Queue**  
Every Cypress command (`cy.visit()`, `cy.get()`, `cy.click()`, etc.) is first added to the Command Queue.
Cypress waits for each command to complete before executing the next command.   
This is why explicit Promise handling is usually not required.


**Promises** : Every asynchronous operation eventually reaches one of these states:

- **Pending** → Operation is still running.
- **Fulfilled (Resolved)** → Operation completed successfully.
- **Rejected** → Operation failed.


### `.then()`

`.then()` executes only after the previous Cypress command has completed successfully.

It is commonly used to access the value returned by the previous command.

Example:

```javascript
cy.get('.product').then(($products) => {
    console.log($products.length)
})
```

Here, `.then()` waits until `cy.get()` finishes before executing the callback.


