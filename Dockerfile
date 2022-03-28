FROM cypress/included:9.5.2

RUN mkdir cypress-project
WORKDIR /cypress-project

COPY ./package.json .
COPY ./cypress.json .
COPY ./cypress ./cypress
COPY ./cucumber-html-report-chrome.js .
COPY ./cucumber-html-report-firefox.js .

RUN npm install

ENTRYPOINT ["bash"]