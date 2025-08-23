/// <reference types="cypress" />

beforeEach('open web application', () => {
    cy.visit('/')
    cy.contains('Forms').click()
    cy.contains('Form Layouts').click()
})

it('', () => {
    // code here...
})
