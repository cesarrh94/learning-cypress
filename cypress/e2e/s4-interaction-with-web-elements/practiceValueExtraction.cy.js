/// <reference types="cypress" />

beforeEach('open web application', () => {
    cy.visit('/')
    cy.contains('Forms').click()
    cy.contains('Form Layouts').click()
})

it('lesson 30 - extracting values', () => {
    
    // 1. using JQuery method
    cy.get('[for="exampleInputEmail1"]').then(label => {
        const emailLabel = label.text()
        console.log(emailLabel)
    })

    // 2. using invoke() method
    cy.get('[for="exampleInputEmail1"]').invoke('text').then(emailLabel => {
        console.log(emailLabel)
    })

    // 3. invoke attribute value
    cy.get('#exampleInputEmail1').invoke('attr', 'class').then(classValue => {
        console.log(classValue)
    })

    // 4. invoke input field value
    cy.get('#exampleInputEmail1').type('hello@test.com')
    cy.get('#exampleInputEmail1').invoke('prop', 'value').then(value => {
        console.log(value)
    })

})
