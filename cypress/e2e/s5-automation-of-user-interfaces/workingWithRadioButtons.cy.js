/// <reference types="cypress" />

beforeEach('open web application', () => {
    cy.visit('/')
})

it('lesson 34 - radio buttons', () => {
    cy.contains('Forms').click()
    cy.contains('Form Layouts').click()
    
    // same as the checkboxes, it's recommended to use check() method
    // here we are accessing to all the radio buttons on the component nb-card.
    cy.contains('nb-card', 'Using the Grid').find('[type="radio"]').then(allRadioButtons => {
        cy.wrap(allRadioButtons).eq(0).check({force: true}).should('be.checked')
        cy.wrap(allRadioButtons).eq(1).check({force: true}).should('be.checked')
        cy.wrap(allRadioButtons).eq(0).should('not.be.checked')
        cy.wrap(allRadioButtons).eq(2).should('be.disabled')
    })

    cy.contains('nb-card', 'Using the Grid').contains('Option 1').click()
    cy.contains('nb-card', 'Using the Grid')
        .contains('label', 'Option 1')
        .find('input')
        .check({force: true})
})