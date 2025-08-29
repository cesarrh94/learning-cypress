
// lesson 48 - conditional object function
function selectGroupMenuItem(groupMenuItem) {
    cy.contains('a', groupMenuItem).invoke('attr', 'aria-expanded').then(attr => {
        if (attr.includes('false')) {
            cy.contains('a', groupMenuItem).click()
        }
    })
}

// lesson 47 - first page object
class NavigationPage {

    formLayoutsPage() {
        selectGroupMenuItem('Forms')
        cy.contains('Form Layouts').click()
    }

    datePickerPage() {
        selectGroupMenuItem('Forms')
        cy.contains('Datepicker').click()
    }

    toastrPage() {
        selectGroupMenuItem('Modal & Overlays')
        cy.contains('Toastr').click()
    }

    tooltipPage() {
        selectGroupMenuItem('Modal & Overlays')
        cy.contains('Tooltip').click()
    }

}

export const navigateTo = new NavigationPage()