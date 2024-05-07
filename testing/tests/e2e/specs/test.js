// https://docs.cypress.io/api/table-of-contents

// describe('My First Test', () => {
//   it('Visits the app root url', () => {
//     cy.visit('/')
//     cy.contains('h1', 'Welcome to Your Vue.js + TypeScript App')
//   })
// })

// describe('Test Name', () => {
//   //Test execution
//   if('Example name', () => {
//     cy.visit('/')
//     cy.url()
//     cy.contains('h1', 'Welcome to Your Vue.js + TypeScript App')
//     cy.should('have.css', 'background-color', 'rgb(255, 255, 255)')
//     cy.request('POST', 'uri', {})
//     cy.get('.class')
//     cy.get('#id')
//     cy.get('[data-cy=cy]')
//     cy.click()
//     cy.type('username') // Escribir
//   })
// })

describe('Counter Feature', () => {
  it('access to page', () => {
    cy.visit('/')
    cy.contains('h1', 'Counter')
  })
  it('user can increment the counter', () => {
    cy.visit('/')
    cy.get('#counter-info').contains('0')
    cy.contains('button', 'Increment').click()
    cy.get('#counter-info').contains('1')
  })
})