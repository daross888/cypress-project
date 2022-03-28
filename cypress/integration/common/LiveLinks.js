import { Then, When } from 'cypress-cucumber-preprocessor/steps'

let urls = [];

When("I click the links", () => {
    cy.get("@visitPage").then(win => {
        const currentUrl = win.location.href;

        cy.get("a").each(link => {
            const url = link.prop("href");

            if(url && !url.startsWith(currentUrl) && !url.includes("mailto:") && !url.includes(".edu.") && !url.includes("twitter") && !url.includes('tel:') && !urls.includes(url)) {
                urls.push(url);
            }
        })
    });
})

Then("I arrive on a page with status {int}", status => {
    urls.map(url => {
        cy.request({
            url: url,
            failOnStatusCode: false,
            followRedirect: true
        }).then(response => {
            expect(response.status).to.eq(status);
        });
    })
})