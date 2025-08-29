/// <reference types="cypress" />

beforeEach('open web application', () => {
    cy.visit('/')
})

it('lesson 43 - sliders', () => {

    // invoke() method, allows you to invoke a method or property of an object or 
    // DOM element inside the Cypress command flow.
    // commonly used to get text directly, get a value of an input, get properties, 
    // get css styles, calling DOM functions.
    cy.get('[tabtitle="Temperature"] circle')
        .invoke('attr', 'cx', '38.66')
        .invoke('attr', 'cy', '57.75')
        .click()

    cy.get('[class="value temperature h1"]').should('contain.text', '18')
})