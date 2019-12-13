/**
 * Define assertions
 */

describe('Content', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Has default lists', () => {
    cy.contains('Backlog');
    cy.contains('To Do');
    cy.contains('In Progress');
    cy.contains('Done');
  });
});
