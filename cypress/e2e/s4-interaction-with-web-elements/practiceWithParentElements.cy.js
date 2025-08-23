/// <reference types="cypress" />

beforeEach('open web application', () => {
    cy.visit('/')
    cy.contains('Forms').click()
    cy.contains('Form Layouts').click()
})

it('lesson 27 - parent elements', () => {
    
    // parent() method, selects the immediate parent element of the selected element. 
    // It only goes one level up in the DOM tree.
    cy.contains('Using the Grid').parent().find('button')
    
    // parents() method, Este método selecciona todos los elementos padres del elemento seleccionado,
    //  hasta el <html>, pasando por cada nivel hacia arriba en el árbol DOM. 
    // Regresa una lista de todos los ancestros del elemento.
    cy.get('#inputEmail1').parents('form').find('button')
    
    // parentsUntil() method, is similar to parents() but with a limit on how far up the DOM it can go.
    //You specify a selector that will stop the search when the first element matching the given selector is found.
    cy.get('#inputEmail1').parentsUntil('nb-card-body').find('button')
})
