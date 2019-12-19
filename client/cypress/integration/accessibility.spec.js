/**
 * Define assertions
 */

describe('Accessibility', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('has sufficient color contrast', () => {
    cy.get('body').should('has.css', 'background-color', 'rgba(0, 0, 0, 0)');

    cy.get('h6').should('have.css', 'color', 'rgb(0, 0, 0)');
  });
});
