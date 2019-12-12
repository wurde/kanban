/**
 * Define assertions
 */

describe('Accessibility', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Has sufficient color contrast', () => {
    cy.get('body').should('has.css', 'background-color', 'rgba(0, 0, 0, 0)');

    cy.get('h6').should('have.css', 'color', 'rgb(0, 0, 0)');

    cy.get('.list').should(
      'have.css',
      'background-color',
      'rgb(239, 239, 239)'
    ).should('have.css', 'height', '100%');

    cy.get('.card')
      .should('have.css', 'background-color', 'rgb(255, 255, 255)')
      .should('have.css', 'box-shadow', '0 3px 5px #999;');
  });
});
