/// <reference types="cypress" />

beforeEach('open web application', () => {
    cy.visit('/')
})

it('lesson 45 - iframes', () => {

    // in order to Cypress to provide support for iframes, I installed a cypress plugin.
    // https://www.npmjs.com/package/cypress-iframe 
    // imported on the support/commands.js

    cy.contains('Modal & Overlays').click()
    cy.contains('Dialog').click()
    // this command checks that an iframe has loaded onto the page
    cy.frameLoaded('[data-cy="esc-close-iframe"]')

    // this will cause subsequent commands to be executed inside of the given iframe
    cy.iframe('[data-cy="esc-close-iframe"]').contains('Open Dialog with esc close').click()
    cy.contains('Dismiss Dialog').click()

    cy.enter('[data-cy="esc-close-iframe"]').then( getBody => {
        getBody().contains('Open Dialog with esc close').click()
        cy.contains('Dismiss Dialog').click()
        getBody().contains('Open Dialog without esc close').click()
        cy.contains('OK').click()
    })
})