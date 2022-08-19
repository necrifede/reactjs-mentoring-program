describe('Home Page tests', () => {
    it('should verify title and url on homepage', () => {
        cy.visit('http://localhost:3000/');
        cy.url().should('include', 'search');
        cy.title().should('eq', 'React Movies App');
    });

    it('should search for "war" movies', () => {
        cy.visit('http://localhost:3000/');
        cy.get('#movieName').type('war').should('have.value', 'war');
        cy.get('button.btn.btn-primary[type="submit"]').should('have.text', 'Search').click();
        cy.url().should('include', 'search/war');
    });

    it('should select one movie of search', () => {
        cy.visit('http://localhost:3000/search/war');
        cy.wait(3000);
        cy.get('.all-movies').find('.card').first().find('.card-title').click();
        cy.get('.title-movie-selected').find('h1').contains('War');
    });
});
