/// <reference types="cypress" />

beforeEach('open web application', () => {
    cy.visit('/')
    cy.contains('Forms').click()
    cy.contains('Form Layouts').click()
})

it('lesson 31 - assertions and retry', () => {
    
    // should assertion
    cy.get('[for="exampleInputEmail1"]').should('have.text', 'Email address')

    // expect assertion
    cy.get('[for="exampleInputEmail1"]').then(label => {
        expect(label).to.have.text('Email address')
    })

    cy.get('[for="exampleInputEmail1"]').invoke('text').then( emailLabel => {
        expect(emailLabel).to.equal('Email address')
        cy.wrap(emailLabel).should('equal', 'Email address')
    })
})
