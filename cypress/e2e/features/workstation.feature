Feature: Workstation Page

  As a user
  I want to access the workstation page
  So that I can create and edit audio projects

  Background: 
    Given I visit the DAWN application
    When I click on "New Project" button

  Scenario: Verify workstation page header elements
    Then I should see the DAWN logo in the header
    And I should see transport controls
    And I should see time display showing "00:00:000"
    And I should see editing controls
    And I should see project controls

  Scenario: Verify transport control buttons
    Then I should see the following transport buttons
      | button | icon |
      | Play   | ▶    |
      | Pause  | ⏸    |
      | Stop   | ■    |

  Scenario: Verify editing control buttons
    Then I should see the following editing buttons
      | button         | icon |
      | Copy          | 📋   |
      | Paste         | 📄   |
      | Trim          | ✂️   |
      | Delete Clip   | 🗑️   |
      | Delete Track  | 🗑️   |

  Scenario: Verify project control buttons
    Then I should see the following project buttons
      | button    |
      | Save      |
      | Save As   |
      | Load      |
      | Export    |

  Scenario: Verify timeline and track section
    Then I should see the timeline with time markers
    And I should see zoom controls
    And I should see track controls
    And I should see workstation "Import Audio" button
    And I should see workstation "Add Track" button
    And I should see one default track
    And the default track should have basic controls
      | control  |
      | Mute     |
      | Solo     |
      | Effects  |
      | Volume   |