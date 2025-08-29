/// <reference types="cypress" />

beforeEach('open web application', () => {
    cy.visit('/')
})

it('lesson 39 & 40 - web tables', () => {
    cy.contains('Tables & Data').click()
    cy.contains('Smart Table').click()

    // 1. how to find by text 
    // find a row with a unique value for the entire table, use contains()
    cy.get('tbody').contains('tr', 'Larry').then(tableRow => {
        cy.wrap(tableRow).find('.nb-edit').click()
        cy.wrap(tableRow).find('[placeholder="Age"]').clear().type('35')
        cy.wrap(tableRow).find('.nb-checkmark').click()
        cy.wrap(tableRow).find('td').last().should('have.text', '35')
    })

    // 2. how to find by index
    cy.get('.nb-plus').click()
    cy.get('thead tr').eq(2).then(tableRow => {
        cy.wrap(tableRow).find('[placeholder="First Name"]').type('John')
        cy.wrap(tableRow).find('[placeholder="Last Name"]').type('Smith')
        cy.wrap(tableRow).find('.nb-checkmark').click()
    })

    cy.get('tbody tr').first().find('td').then(tableColumns => {
        cy.wrap(tableColumns).eq(2).should('have.text', 'John')
        cy.wrap(tableColumns).eq(3).should('have.text', 'Smith')
    })


    // 3. looping throuhg the rows
    // cy.get('[placeholder="Age"]').type('20')
    // cy.wait(1000)
    // cy.get('tbody tr').each(tableRows => {
    //     cy.wrap(tableRows).find('td').last().should('have.text', 20)
    // })

    const ages = [20, 30, 40, 200]

    cy.wrap(ages).each(age => {
        cy.get('[placeholder="Age"]').clear().type(age)
        cy.wait(500) // wait for DOM to be updated, no recomended but sometimes it's needed.
        cy.get('tbody tr').each(tableRows => {
            if (age == 200) {
                cy.wrap(tableRows).should('contain.text', 'No data found')
            } else {
                cy.wrap(tableRows).find('td').last().should('have.text', age)
            }
        })
    })
})