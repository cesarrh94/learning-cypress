/// <reference types="cypress" />

beforeEach('open web application', () => {
    cy.visit('/')
    cy.contains('Forms').click()
    cy.contains('Form Layouts').click()
})

it('lesson 26 - child elements', () => {

    // to use child elements in cypress, use find() method, 
    // and you can chain as many find methods as you need
    cy.contains('nb-card', 'Using the Grid').find('.row').find('button')
    
    cy.get('nb-card').find('nb-radio-group').contains('Option 1')

    // if you are going to use get() method is recommended to put all the selectors
    // in one get() just separete them with a space
    cy.get('nb-card nb-radio-group').contains('Option 1')

    cy.get('nb-card > nb-card-body [placeholder="Jane Doe"]')
})
