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

    cy.get('.card')
      .should('have.css', 'background-color', 'rgb(255, 243, 205)')
      .should(
        'have.css',
        'box-shadow',
        'rgba(77, 99, 119, 0.47) 0px 2px 4px -2px'
      );
  });
});
