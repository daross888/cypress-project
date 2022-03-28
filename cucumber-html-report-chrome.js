const report = require("multiple-cucumber-html-reporter");

report.generate({
    jsonDir: "cypress/cucumber-json",
    reportPath: "./reports/chrome",
    metadata: {
        browser: {
            name: "chrome",
            version: "99",
        },
        device: "Local test machine",
        platform: {
            name: "mac",
            version: "Catalina",
        },
    },
});