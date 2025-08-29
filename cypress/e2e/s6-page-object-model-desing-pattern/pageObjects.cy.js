/// <reference types="cypress" />

import { onDatepickerPage } from "../../pageObjects/datepickerPage.js"
import { onFormLayoutsPage } from "../../pageObjects/formLayoutsPage.js"
import { navigateTo } from "../../pageObjects/navigationPage.js"

beforeEach('open web application', () => {
    // lesson 51 - use of custom commands
    // note: the limitations of custom commands is that doesn't have intellisense support but
    // there is a workaround: 
    cy.openHomePage()
})

it('lesson 47 & 48 (POM) - navigation test', () => {
    navigateTo.formLayoutsPage()
    navigateTo.datePickerPage()
    navigateTo.toastrPage()
    navigateTo.tooltipPage()
})

it.only('lesson 49 (POM) - parametrized object method', () => {
    navigateTo.formLayoutsPage()
    onFormLayoutsPage.submitUsingTheGridForm('test@test.com', 'password1.', 0)
    onFormLayoutsPage.submitBasicForm('test2@test.com', 'password2', true)

    navigateTo.datePickerPage()
    onDatepickerPage.selectCommonDatepickerDateFromToday(15)
    onDatepickerPage.selectRangePickerDateFromToday(10, 50)
    
})
