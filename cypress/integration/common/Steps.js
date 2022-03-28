import { Given } from 'cypress-cucumber-preprocessor/steps';

Given("I fetch {string}", url => {
    cy.request({
        url: url,
        failOnStatusCode: false,
        followRedirect: true
    }).as('fetchPage');
});

Given("I visit {string}", url => {
    cy.visit(url, {
        failOnStatusCode: false,
        followRedirect: true
    }).as('visitPage');
});