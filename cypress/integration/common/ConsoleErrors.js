import { Before, Then } from 'cypress-cucumber-preprocessor/steps'

let consoleError;

Before(() => {
    consoleError = cy.spy(window.console, "error");
})

Then("I see no console errors", () => {
    cy.get("@visitPage");
    cy.wait(1000).then(() => {
        expect(consoleError).to.not.be.called;
    })
})