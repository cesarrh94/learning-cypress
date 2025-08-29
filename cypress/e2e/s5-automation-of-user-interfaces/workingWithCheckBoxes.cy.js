/// <reference types="cypress" />

beforeEach('open web application', () => {
    cy.visit('/')
})

it('lesson 35 - checkboxes', () => {
    cy.contains('Modal & Overlays').click()
    cy.contains('Toastr').click()

    // recomended to use the check() method, instead of the click()
    cy.get('[type="checkbox"]').check({force: true})
    cy.get('[type="checkbox"]').should('be.checked')
})