Feature: Clip Deletion

  As a user
  I want to delete audio clips from my tracks
  So that I can manage my audio content effectively

  Background:
    Given I visit the CloudJam website
    When I click the "New Project" button
    Then I should be navigated to the DAW interface
    And I should see one default track
    When I select the first track
    And I click the "Import Audio" button
    And I select "Audio1.mp3" from Sound Files
    Then I should see the audio clip in the first track

  Scenario: Delete a clip using the delete button on the clip
    When I select the first track
    And I click the delete button on the audio clip
    Then the track should not contain any audio clips

  Scenario: Delete a clip using the transport controls
    When I select the first track
    And I select the audio clip in the first track
    And I click the delete clip button in the transport controls
    Then the clip should be deleted from the first track

  Scenario: Delete a clip from multiple tracks
    When I click the "Add Track" button
    And I click the "Add Track" button
    Then I should see three tracks in the track list
    When I select the second track
    And I click the "Import Audio" button
    And I select "Audio2.mp3" from Sound Files
    Then I should see the audio clip in the second track
    When I select the third track
    And I click the "Import Audio" button
    And I select "Audio3.mp3" from Sound Files
    Then I should see the audio clip in the third track
    When I select the second track
    And I select the audio clip in the second track
    And I click the delete clip button in the transport controls
    Then the clip should be deleted from the second track
    And I should see the audio clip in the first track
    And I should see the audio clip in the third track 