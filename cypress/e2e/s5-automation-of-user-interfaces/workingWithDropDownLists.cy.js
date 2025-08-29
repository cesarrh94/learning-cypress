/// <reference types="cypress" />

beforeEach('open web application', () => {
    cy.visit('/')
})

it('lesson 36 - dropdown lists', () => {
    cy.contains('Modal & Overlays').click()
    cy.contains('Toastr').click()

    // native dropdown, you can use the select() method
    cy.contains('div', 'Toast type:').find('select').select('info').should('have.value', 'info')

    // custom dropdown
    cy.contains('div', 'Position:').find('nb-select').click()    
    cy.get('.option-list').contains('bottom-left').click()
    cy.contains('div', 'Position:').find('nb-select').should('have.text', 'bottom-left')

    // test senario: when we what to loop every element on list
    cy.contains('div', 'Position:').find('nb-select').then(dropdown => {
        cy.wrap(dropdown).click()
        cy.get('.option-list nb-option').each((option, index, list) => {
            cy.wrap(option).click()
            if (index < list.length - 1) {
                cy.wrap(dropdown).click()
            }
        })
    })
    
})