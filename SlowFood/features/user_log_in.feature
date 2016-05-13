Feature: As a registered user
So that i can sign in
I would like to log in using my credentials

  Background:
  Given a User exists

  Scenario: Allows user to log in
  Given I am on the "Log In" page
  Then I fill in "username" with "test"
  And I fill in "password" with "test"
  And I click on "Submit"
  Then I should be on the home page
  And I should see "Successfully logged in"
