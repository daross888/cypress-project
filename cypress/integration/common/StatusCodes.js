import { Then } from 'cypress-cucumber-preprocessor/steps'

Then("I see status code of {int}", status => {
    cy.get('@fetchPage').then(response => {
        expect(response.status).to.equal(status)
    })
})