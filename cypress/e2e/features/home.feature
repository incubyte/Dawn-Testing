Feature: CloudJam Home Page
  As a user
  I want to verify the home page elements
  So that I can ensure the basic functionality

  Scenario: Verify home page loads successfully
    Given I visit the CloudJam website
    Then I should see the home page

  Scenario: Navigate to DAW interface when clicking New Project
    Given I visit the CloudJam website
    When I click the "New Project" button
    Then I should be navigated to the DAW interface
    And I should see the transport controls
    And I should see the timeline
    And I should see the track list
    And I should see one default track

  Scenario: Add new track to the DAW
    Given I visit the CloudJam website
    When I click the "New Project" button
    And I click the "Add Track" button
    Then I should see two tracks in the track list

  Scenario: Verify debug panel functionality
    Given I visit the CloudJam website
    When I click the "New Project" button
    Then I should see the audio debug panel
    And I should see the audio context state is "running"
    And I should see "0" active sources
    And I should see the MP3 decoder status
    And I should see the track and clip counts
    When I uncheck the "Show Debug Panel" checkbox
    Then the debug panel should be hidden

  Scenario: Import single audio file to track
    Given I visit the CloudJam website
    When I click the "New Project" button
    And I click the "Import Audio" button
    And I select "Audio1.mp3" from Sound Files
    Then I should see the audio clip in the first track
    And the clip should show "Audio1" as the name
    And the clip should have waveform visualization
    And the clip should have trim handles

  Scenario: Import multiple audio files to different tracks
    Given I visit the CloudJam website
    When I click the "New Project" button
    And I click the "Add Track" button
    And I click the "Add Track" button
    Then I should see three tracks in the track list
    When I select the first track
    And I click the "Import Audio" button
    And I select "Audio1.mp3" from Sound Files
    Then I should see the audio clip in the first track
    When I select the second track
    And I click the "Import Audio" button
    And I select "Audio2.mp3" from Sound Files
    Then I should see the audio clip in the second track
    When I select the third track
    And I click the "Import Audio" button
    And I select "Audio3.mp3" from Sound Files
    Then I should see the audio clip in the third track 