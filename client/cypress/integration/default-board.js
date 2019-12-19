/** 
 * Define assertions
 */

describe('Default Board', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('has 4 default lists', () => {
    cy.contains('h6', 'Backlog');
    cy.contains('h6', 'To Do');
    cy.contains('h6', 'In Progress');
    cy.contains('h6', 'Done');
  });
})
