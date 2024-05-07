describe('Login Test Feature', () => {
  it('user can not access to protected routed when is no logged in', () => {
    cy.visit('/')
    cy.url().should('eq', 'http://localhost:8080/login')
  })
  it('user with wrong credentials can not pass', () => {
    cy.login('email@admin.com', '159482673')
    cy.contains('User or password incorrect')
  })
  it('user can successfully log in', () => {
    cy.login('admin@admin.com', 'admin')
    cy.url().should('eq', 'http://localhost:8080/')
  })

})
