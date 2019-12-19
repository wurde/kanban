/**
 * Define assertions
 */

describe('Card Actions', () => {
  beforeEach(() => {
    localStorage.clear();
    cy.visit('/');
  })

  it('has ability to add cards', () => {
    cy.contains('Add a card').click();

    // Check textarea resets on cancel.
    cy.get('.card-textarea').type('This is reset');
    cy.get('.close-icon').click();
    cy.contains('Add a card').click();
    cy.get('.card-textarea').should('have.value', '');

    // Check adding a card.
    cy.get('textarea').type('This is a test');
    cy.contains('Add Card').click();
    cy.contains('.Card', 'This is a test');

    // Check ability to move cards between lists.
    cy.get('.Card').trigger('dragstart');
    cy.get('.List-2').trigger('drop');

    // Check ability to reset the board.
    cy.get('#clear-board').click();
    cy.get('.Card').should('not.exist');
  });
});
