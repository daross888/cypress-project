Feature: W3.org bad page scenarios

    I want to make sure there are no console errors
    I want to make sure the response code is 404
    I want to make sure all links on the page go to another live page


    Scenario: No console errors found
        Given I visit "https://www.w3.org/standards/badpage"
        Then I see no console errors
        
    Scenario: Check status code
        Given I fetch "https://www.w3.org/standards/badpage"
        Then I see status code of 404

    Scenario: All links go to a live page
        Given I visit "https://www.w3.org/standards/badpage"
        When I click the links
        Then I arrive on a page with status 200
    