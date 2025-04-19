Feature: Track Deletion

  As a user
  I want to delete tracks from my project
  So that I can manage my tracks effectively

  Background:
    Given I visit the CloudJam website
    When I click the "New Project" button
    Then I should be navigated to the DAW interface
    And I should see one default track

  Scenario: Delete the only track
    When I click the delete button on the first track
    Then the track should be deleted

  Scenario: Delete one track from multiple tracks
    When I click the "Add Track" button
    And I click the "Add Track" button
    Then I should see three tracks in the track list
    When I click the delete button on the second track
    Then I should see two tracks in the track list
    And the remaining tracks should be "Track 1" and "Track 3"

  Scenario: Delete the first track from multiple tracks
    When I click the "Add Track" button
    And I click the "Add Track" button
    Then I should see three tracks in the track list
    When I click the delete button on the first track
    Then I should see two tracks in the track list
    And the remaining tracks should be "Track 2" and "Track 3"

  Scenario: Delete the last track from multiple tracks
    When I click the "Add Track" button
    And I click the "Add Track" button
    Then I should see three tracks in the track list
    When I click the delete button on the third track
    Then I should see two tracks in the track list
    And the remaining tracks should be "Track 1" and "Track 2"

  Scenario: Delete all tracks
    When I click the "Add Track" button
    And I click the "Add Track" button
    Then I should see three tracks in the track list
    When I click the delete button on the first track
    And I click the delete button on the first track
    And I click the delete button on the first track
    Then the track should be deleted

  Scenario: Delete track using transport controls
    When I click the "Add Track" button
    And I click the "Add Track" button
    Then I should see three tracks in the track list
    When I select the second track
    And I click the delete track button in the transport controls
    Then I should see two tracks in the track list
    And the remaining tracks should be "Track 1" and "Track 3" 