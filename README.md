# cypress-project
This automation test uses Cypress and Cucumber to test w3.org urls.

# Prerequisites
- Docker installed

# How to run the tests
- Using a CLI, go to the project folder
- Type `docker-compose -f docker-compose.yml up --build` to run the tests. This command will run the tests on Chrome and Firefox (parallel).
- Screenshots will be placed in `./cypress/screenshots` if any failure happened
- Reports will be in `./reports/chrome` and `./reports/firefox` folders. Open the html file to view the result details.

# Results
The test results are automatically generated using `multiple-cucumber-html-reporter` report generator.
To view results, once the tests are finished, go to `./reports/chrome` and `./reports/firefox` to view the html file(s).