/// <reference types="cypress" />

beforeEach('open web application', () => {
    cy.visit('/')
    cy.contains('Modal & Overlays').click()
    cy.contains('Dialog').click()
})

it('lesson 32 - timeouts', () => {
    
    /* There are 2 ways of setup a timeout on Cypress:
        1. global settings
        2. by add the {timeout: milliseconds} object to the specific command
    */

    cy.contains('Open with delay 10 seconds').click()
    cy.get('nb-dialog-container nb-card-header', {timeout: 11000})
        .should('have.text', 'Friendly reminder')
})
