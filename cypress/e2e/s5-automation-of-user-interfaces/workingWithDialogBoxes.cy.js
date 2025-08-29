/// <reference types="cypress" />

beforeEach('open web application', () => {
    cy.visit('/')
})

it('lesson 38 - dialog boxes', () => {
    // native dialog box
    cy.contains('Tables & Data').click()
    cy.contains('Smart Table').click()

    // 1. approach with custom dialog boxes
    cy.get('.nb-trash').first().click()
    // cy.on() allows to register a listener for specific events that happens 
    // during the execution of the test.
    cy.on('window:confirm', confirm => {
        expect(confirm).to.equal('Are you sure you want to delete?')
    })

    // 2. approach with custom dialog boxes
    // cy.window() gets the global object "window" of the browser application.
    // it's used to access functions or global variables,manipulate the behavior, 
    // access localStorage, sessionStorage, intercept global functions.
    cy.window().then( window => {
        cy.stub(window, 'confirm').as('dialogBox').returns(true)
    })
    cy.get('.nb-trash').first().click()
    cy.get('@dialogBox').should('be.calledWith', 'Are you sure you want to delete?')

})