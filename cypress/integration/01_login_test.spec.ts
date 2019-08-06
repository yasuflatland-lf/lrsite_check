/// <reference types="Cypress" />

context("Login.Related", () => {
  beforeEach(() => {
    // CYPRESS_USERNAME
    const username = Cypress.env("UESRNAME");
    // CYPRESS_PASSWORD
    const password = Cypress.env("PASSWORD");

    cy.visit("https://www.liferay.com/en/c/portal/login");

    cy.get("input[name=_58_login]").type(username);

    // {enter} causes the form to submit
    cy.get("input[name=_58_password]").type(`${password}{enter}`);

    cy.visit("https://www.liferay.com/en/web/japan");
  });

  it("Login smoke test", function() {
    // we should be redirected to /dashboard
    cy.url().should("include", "/");

    // UI should reflect this user being logged in
    cy.get("a.btnlfy").should("contain", "デモリクエスト");
  });
});
