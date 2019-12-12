/**
 * Define assertions
 */

describe('Content', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Has default lists', () => {
    cy.get('#board').should('have.css', 'display', 'flex');

    cy.contains('Backlog').should('be.visible');
    cy.contains('To Do').should('be.visible');
    cy.contains('In Progress').should('be.visible');
    cy.contains('Done').should('be.visible');
  });
});
