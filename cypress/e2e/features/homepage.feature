Feature: Homepage

  As a user
  I want to access the DAWN application homepage
  So that I can create or load audio projects

  Background:
    Given I visit the DAWN application

  Scenario: Verify homepage layout and content
    Then I should verify the welcome screen
    And I should verify the header section
    And I should verify the action buttons
    And I should verify the storage section

  Scenario: Navigate to new project
    When I click on "New Project" button
    Then I should see transport controls

  Scenario: Select storage location
    Then I should verify the storage section
    And the local storage option should be selected by default