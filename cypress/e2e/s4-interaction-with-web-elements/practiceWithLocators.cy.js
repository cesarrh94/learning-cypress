/// <reference types="cypress" />

beforeEach('open test application', () => {
    cy.visit('/')

    // navigate to the forms page
    // contains() method search elements by the text
    cy.contains('Forms').click()
    cy.contains('Form Layouts').click()
})

it('lesson 24 - locator syntax rules', () => {
    
    // by tag
    cy.get('input')
    
    // by id value
    cy.get('#inputEmail1')
    
    // by class value
    cy.get('.input-full-width')
    
    // by attribute
    cy.get('[fullwidth]')

    // by attribute with value
    cy.get('[placeholder="Email"]')
    
    // by entire class value
    cy.get('[class="input-full-width size-medium status-basic shape-rectangle nb-transition"]')
    
    // how to combine several attributes
    cy.get('[placeholder="Email"][fullwidth]')
    cy.get('input[placeholder="Email"]')

    // find by data-cy attribute
    cy.get('[data-cy="inputEmail1"]')
})

it('lesson 25 - cypress locator methods', () => {
    // there are 3 ways of finding locators on cypress:
    
    // get() - to find elements on the page globally
    // find() - to find only child elements 
    // contains() - to find elements by text or partial text but it will retrieve the first match.
    // also, be aware the contains() is case-sensitive.
    
    // to disable the case-sentive property on the contains(), use the {matchCase: false}
    cy.contains('Sign In', {matchCase: false})

    // contains(), accepts two arguments: locator and text
    cy.contains('[status="warning"]', 'Sign in')
    
    cy.contains('nb-card', 'Horizontal form').find('button')
    cy.contains('nb-card', 'Horizontal form').contains('Sign in')

})

it.only('lesson 29 - reusing locators', () => {
    // note: IMPORTANT LESSON

    // This approach will NOT work for Cypress.
    /* const inputEmail1 = cy.get('#inputEmail1')
    inputEmail1.parents('form').find('button')
    inputEmail1.parents('form').find('nb-radio') */

    // 1. Cypress alias
    /* It's simply a name that is assigned to an object/element/command/data on the test, 
        to use it later without searching it again. 
        
        To use an alias, the as('aliasName') method is needed and as parameter,
         the name that will serve as identifier.
    */

    cy.get('#inputEmail1').as('inputEmail1')
    cy.get('@inputEmail1').parents('form').find('button')
    cy.get('@inputEmail1').parents('form').find('nb-radio')

    // 2. Cypress then() method
    /* It allows execute a callback function when Cypress finish to execute the previous command.
        Often used when you need to do something with the result of a command, DOM element, 
        API call or any data retrieved from a previous step.

        warp() method cast the jQuerySelector to a Cypress Chainable object in this case to
        be able execute Cypress commands
     */
    cy.get('#inputEmail1').then(inputEmail => {
        cy.wrap(inputEmail).parents('form').find('button')
        cy.wrap(inputEmail).parents('form').find('nb-radio')
        cy.wrap(inputEmail).as('inputEmail2')
    })

    cy.get('@inputEmail2').click()
})
