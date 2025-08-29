/// <reference types="cypress" />

beforeEach('open web application', () => {
    cy.visit('/')
})

it('lesson 44 - drag and drop', () => {

    cy.contains('Extra Components').click()
    cy.contains('Drag & Drop').click()

    // trigger() method, triggers an event on a DOM element.
    cy.get('#todo-list div').first().trigger('dragstart')
    cy.get('#drop-list').trigger('drop')
})