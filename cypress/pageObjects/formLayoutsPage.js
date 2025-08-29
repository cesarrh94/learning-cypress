
// lesson 49 - parametrized object method
class FormLayoutsPage {

    /**
     * Method to sumbit "Using the Grid" Form with valid credentials
     * @param {string} email - valid user email
     * @param {string} password - valid user password
     * @param {number} optionIndex - provide index of the option radio button. Start from 0
     */
    submitUsingTheGridForm(email, password, optionIndex) {
        cy.contains('nb-card', 'Using the Grid').then(form => {
            cy.wrap(form).find('#inputEmail1').clear().type(email)
            cy.wrap(form).find('#inputPassword2').clear().type(password)
            cy.wrap(form).find('[type="radio"]').eq(optionIndex).check({ force: true })
            cy.wrap(form).contains('Sign in').click()
        })
    }

    submitBasicForm(email, password, isCheckboxSelected) {
        cy.contains('nb-card', 'Basic form').then(form => {
            cy.wrap(form).find('[placeholder="Email"]').clear().type(email)
            cy.wrap(form).find('[placeholder="Password"]').clear().type(password)
            if (isCheckboxSelected) {
                cy.wrap(form).find('[type="checkbox"]').check({ force: true })
            }
            cy.wrap(form).contains('Submit').click()
        })
    }
}

export const onFormLayoutsPage = new FormLayoutsPage()