Feature: Export Functionality

  Scenario: Export audio as WAV file
    Given I visit the CloudJam website
    When I click the "New Project" button
    Then I should be navigated to the DAW interface
    When I click the "Import Audio" button
    And I select "Audio1.mp3" from Sound Files
    When I click the export button
    Then a WAV file should be downloaded 