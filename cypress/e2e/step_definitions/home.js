import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from '../page_objects/HomePage';
import { TEST_DATA } from '../constants/testData';

const homePage = new HomePage();

Given("I visit the CloudJam website", () => {
  homePage.visitHomePage();
});

Then("I should see the home page", () => {
  homePage.verifyHomePage();
});

When('I click the "New Project" button', () => {
  homePage.clickNewProject();
});

Then("I should be navigated to the DAW interface", () => {
  homePage.verifyDawInterface();
});

Then("I should see the transport controls", () => {
  homePage.verifyTransportControls();
});

Then("I should see the timeline", () => {
  homePage.verifyTimeline();
});

Then("I should see the track list", () => {
  homePage.verifyTrackList();
});

Then("I should see one default track", () => {
  homePage.verifyDefaultTrack();
});

When('I click the "Add Track" button', () => {
  homePage.clickAddTrack();
});

Then("I should see two tracks in the track list", () => {
  homePage.verifyTrackCount(2);
});

Then("I should see three tracks in the track list", () => {
  homePage.verifyTrackCount(3);
  homePage.verifyTrackName(2, TEST_DATA.trackNames.track3);
});

Then("I should see the audio debug panel", () => {
  homePage.verifyAudioDebugPanel();
});

Then('I should see the audio context state is "running"', () => {
  homePage.verifyAudioContextState(TEST_DATA.audioContextStates.running);
});

Then('I should see "0" active sources', () => {
  homePage.verifyActiveSourcesCount(0);
});

Then("I should see the MP3 decoder status", () => {
  homePage.verifyMp3DecoderStatus(TEST_DATA.mp3DecoderStatus.notSupported);
});

Then("I should see the track and clip counts", () => {
  homePage.verifyTrackAndClipCounts(1, 0);
});

When('I uncheck the "Show Debug Panel" checkbox', () => {
  homePage.toggleDebugPanel();
});

Then("the debug panel should be hidden", () => {
  homePage.verifyDebugPanelHidden();
});

When('I click the "Import Audio" button', () => {
  homePage.clickImportAudio();
});

When("I select {string} from Sound Files", (filename) => {
  homePage.selectFileFromSoundFiles(filename);
});

When("I select the first track", () => {
  homePage.selectTrack(0);
});

When("I select the second track", () => {
  homePage.selectTrack(1);
});

When("I select the third track", () => {
  homePage.selectTrack(2);
});

Then("I should see the audio clip in the first track", () => {
  homePage.verifyAudioClipInTrack(0);
});

Then("I should see the audio clip in the second track", () => {
  homePage.verifyAudioClipInTrack(1);
});

Then("I should see the audio clip in the third track", () => {
  homePage.verifyAudioClipInTrack(2);
});

Then("the clip should show {string} as the name", (name) => {
  homePage.verifyClipName(name);
});

Then("the clip should have waveform visualization", () => {
  homePage.verifyClipWaveform();
});

Then("the clip should have trim handles", () => {
  homePage.verifyClipTrimHandles();
});

When("I click the delete button on the first track", () => {
  homePage.clickDeleteTrackButton(0);
});

When("I click the delete button on the second track", () => {
  homePage.clickDeleteTrackButton(1);
});

When("I click the delete button on the third track", () => {
  homePage.clickDeleteTrackButton(2);
});

When("I click the delete track button in the transport controls", () => {
  homePage.clickDeleteTrackButtonInTransport();
});

Then("the track should be deleted", () => {
  homePage.verifyTrackCount(0);
});

Then('the remaining track should be "Track 1"', () => {
  homePage.verifyTrackName(0, TEST_DATA.trackNames.track1);
});

Then('the remaining track should be "Track 2"', () => {
  homePage.verifyTrackName(0, TEST_DATA.trackNames.track2);
});

Then('the remaining track should be "Track 3"', () => {
  homePage.verifyTrackName(0, TEST_DATA.trackNames.track3);
});

Then('the remaining tracks should be "Track 1" and "Track 2"', () => {
  homePage.verifyRemainingTracks([TEST_DATA.trackNames.track1, TEST_DATA.trackNames.track2]);
});

Then('the remaining tracks should be "Track 1" and "Track 3"', () => {
  homePage.verifyRemainingTracks([TEST_DATA.trackNames.track1, TEST_DATA.trackNames.track3]);
});

Then('the remaining tracks should be "Track 2" and "Track 3"', () => {
  homePage.verifyRemainingTracks([TEST_DATA.trackNames.track2, TEST_DATA.trackNames.track3]);
});

When("I click the delete clip button in the transport controls", () => {
  homePage.clickDeleteClipButton();
});

When("I click the delete button on the audio clip", () => {
  homePage.clickDeleteButtonOnClip();
});

When("I select the audio clip in the first track", () => {
  homePage.selectClip(0);
});

When("I select the audio clip in the second track", () => {
  homePage.selectClip(1);
});

When("I select the audio clip in the third track", () => {
  homePage.selectClip(2);
});

Then("the clip should be deleted from the first track", () => {
  homePage.verifyClipDeletedFromTrack(0);
});

Then("the clip should be deleted from the second track", () => {
  homePage.verifyClipDeletedFromTrack(1);
});

Then("the clip should be deleted from the third track", () => {
  homePage.verifyClipDeletedFromTrack(2);
});

Then("the track should not contain any audio clips", () => {
  homePage.verifyTrackHasNoClips(0);
});

When("I click the mute button on the first track", () => {
  homePage.clickMuteButton(0);
});

When("I click the mute button on the first track again", () => {
  homePage.clickMuteButton(0);
});

Then("the mute button should be active", () => {
  homePage.verifyMuteButtonActive(0);
});

Then("the mute button should not be active", () => {
  homePage.verifyMuteButtonNotActive(0);
});

Then("the waveform should be black and white", () => {
  homePage.verifyTrackMuted(0);
});

Then("the waveform should have color", () => {
  homePage.verifyTrackNotMuted(0);
});

Then("the first track should be muted", () => {
  homePage.verifyTrackMuted(0);
});

Then("the second track should not be muted", () => {
  homePage.verifyTrackNotMuted(1);
});

Then("the first track should not be muted", () => {
  homePage.verifyTrackNotMuted(0);
});

When("I click the export button", () => {
  homePage.clickExportButton();
});

Then("a WAV file should be downloaded", () => {
  homePage.verifyWavFileDownload();
});

When("I click the save button", () => {
  homePage.clickSaveButton();
});

When("I accept the project name alert", () => {
  homePage.acceptProjectNameAlert();
});

Then("a ZIP file should be downloaded", () => {
  homePage.verifyZipFileDownload();
}); 