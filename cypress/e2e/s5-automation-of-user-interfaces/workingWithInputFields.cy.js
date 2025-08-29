/// <reference types="cypress" />

beforeEach('open web application', () => {
    cy.visit('/')
    cy.contains('Forms').click()
    cy.contains('Form Layouts').click()
})

it('lesson 33 - input fields', () => {
    cy.contains('Forms').click()
    cy.contains('Form Layouts').click()

    const name = 'cesar'
    // cy.get('#inputEmail1').type('hello@test.com', {delay: 200}).clear().type('hola')
    cy.contains('nb-card','Using the Grid').contains('Email').type(`${name}@test.com`)

    cy.get('#inputEmail1').should('have.value', `${name}@test.com`)
        .clear()
        .type('test3@mail.com')
        .press(Cypress.Keyboard.Keys.TAB) // simulate to press TAB key

    // cy.contains('Auth').click()
    // cy.contains('Login').click()

    // cy.get('#input-email').type('cesar@mail.com')
    // this command at the end hits entet key after.
    // cy.get('#input-password').type('qwert12345{enter}')
    
})
