describe('Post Test Feature', () => {
    beforeEach(() => {
        cy.login('admin@admin.com', 'admin')
        cy.url().should('eq', 'http://localhost:8080/')
    })
    it('Logged user can access to page posts and view the post list', () => {
        cy.contains('h1', 'Home')
        cy.contains('sunt aut facere repellat provident occaecati excepturi optio reprehenderit')
    })
    it('user can access to detail post view', () => {
        cy.contains('sunt aut facere repellat provident occaecati excepturi optio reprehenderit').click()
        cy.url().should('eq', 'http://localhost:8080/detail/1')
        cy.contains('h1', 'Detail Post')
    })
})