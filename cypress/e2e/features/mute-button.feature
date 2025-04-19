Feature: Mute Button Functionality
  As a user
  I want to test the mute button functionality
  So that I can ensure audio tracks can be muted and unmuted

  Scenario: Mute and unmute a track
    Given I visit the CloudJam website
    When I click the "New Project" button
    And I click the "Import Audio" button
    And I select "Audio1.mp3" from Sound Files
    Then I should see the audio clip in the first track
    When I click the mute button on the first track
    Then the mute button should be active
    And the waveform should be black and white
    When I click the mute button on the first track again
    Then the mute button should not be active
    And the waveform should have color

  Scenario: Mute one track while others remain unmuted
    Given I visit the CloudJam website
    When I click the "New Project" button
    And I click the "Add Track" button
    And I click the "Import Audio" button
    And I select "Audio1.mp3" from Sound Files
    Then I should see the audio clip in the first track
    When I select the second track
    And I click the "Import Audio" button
    And I select "Audio1.mp3" from Sound Files
    Then I should see the audio clip in the second track
    When I click the mute button on the first track
    Then the mute button should be active
    And the first track should be muted
    And the second track should not be muted
    When I click the mute button on the first track again
    Then the mute button should not be active
    And the first track should not be muted
    And the second track should not be muted 