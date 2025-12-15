describe("test login", () => {
  it("should go to main page with valid credentials", () => {
    cy.visit('https://www.onliner.by/')
    // cy.get('.auth-bar__item.auth-bar__item--text').click();
    cy.get('#submit-button').click()
    cy.wait(3000)
    cy.get('.header-style__underlay').click();
    cy.get('.header-style__bottom .header-style__link.header-style__link_primary').click();
    cy.get('[placeholder="Ник или e-mail"]').type('Login Name');
    cy.get('[placeholder="Пароль"]').type('Password')
    cy.get('.auth-button_primary').click();
    cy.get('.auth-form__description_error').should('contains.text', 'Неверный логин или пароль');
  });
});

it('new', function() {
  cy.visit('https://www.onliner.by/')
  cy.get('#submit-button').click();
  cy.get('#cart-desktop a.b-top-profile__cart').click();
  
});