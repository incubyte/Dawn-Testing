import BasePage from './BasePage';
import { SELECTORS } from '../constants/selectors';
import { TEST_DATA } from '../constants/testData';

class HomePage extends BasePage {
  constructor() {
    super();
    this.selectors = SELECTORS;
    this.testData = TEST_DATA;
  }

  visitHomePage() {
    this.visit('/');
  }

  clickNewProject() {
    this.clickByText('New Project', this.selectors.newProjectBtn);
  }

  clickLoadProject() {
    this.clickByText('Load Project', this.selectors.loadProjectBtn);
  }

  clickImportAudio() {
    this.clickByText('Import Audio', this.selectors.importAudioButton);
  }

  clickAddTrack() {
    this.clickByText('Add Track', this.selectors.addTrackButton);
  }

  selectFileFromSoundFiles(filename) {
    this.selectFile(this.selectors.fileInput, `Sound Files/${filename}`);
    cy.get(this.selectors.confirmImport).click({ force: true });
  }

  selectTrack(index) {
    this.getElementByIndex(this.selectors.trackName, index).click();
  }

  clickMuteButton(index) {
    this.getElementByIndex(this.selectors.muteButton, index).click();
  }

  clickSoloButton(index) {
    this.getElementByIndex(this.selectors.soloButton, index).click();
  }

  clickDeleteTrackButton(index) {
    this.getElementByIndex(this.selectors.deleteTrackBtn, index).click();
  }

  clickDeleteClipButton() {
    this.click(this.selectors.deleteClipButton);
  }

  clickDeleteTrackButtonInTransport() {
    this.click(this.selectors.deleteTrackButton);
  }

  clickDeleteButtonOnClip() {
    this.clickFirst(this.selectors.clipDeleteBtn);
  }

  selectClip(index) {
    this.getElementByIndex(this.selectors.audioClip, index).click();
  }

  verifyHomePage() {
    this.shouldExist(this.selectors.welcomeScreen);
    this.shouldExist(this.selectors.welcomeContent);
    this.shouldExist(this.selectors.newProjectBtn);
    this.shouldExist(this.selectors.loadProjectBtn);
  }

  verifyDawInterface() {
    this.shouldExist(this.selectors.dawContainer);
  }

  verifyTransportControls() {
    this.shouldExist(this.selectors.transportControls);
    this.shouldExist(this.selectors.playButton);
    this.shouldExist(this.selectors.pauseButton);
    this.shouldExist(this.selectors.stopButton);
  }

  verifyTimeline() {
    this.shouldExist(this.selectors.timeline);
    this.shouldExist(this.selectors.timelineRuler);
    this.shouldExist(this.selectors.timelineCursor);
  }

  verifyTrackList() {
    this.shouldExist(this.selectors.trackList);
    this.shouldExist(this.selectors.tracksContainer);
    this.shouldExist(this.selectors.importAudioButton);
    this.shouldExist(this.selectors.addTrackButton);
  }

  verifyDefaultTrack() {
    this.shouldHaveLength(this.selectors.track, 1);
    this.getElement(this.selectors.track).first().within(() => {
      this.shouldContainText(this.selectors.trackName, this.testData.trackNames.track1);
      this.shouldExist(this.selectors.muteButton);
      this.shouldExist(this.selectors.soloButton);
      this.shouldExist(this.selectors.effectsButton);
      this.shouldExist(this.selectors.gainSlider);
    });
  }

  verifyTrackCount(count) {
    this.shouldHaveLength(this.selectors.track, count);
  }

  verifyAudioDebugPanel() {
    this.shouldBeVisible(this.selectors.audioDebug);
    this.shouldHaveCss(this.selectors.audioDebug, 'position', 'fixed');
    this.shouldHaveCss(this.selectors.audioDebug, 'bottom', '10px');
    this.shouldHaveCss(this.selectors.audioDebug, 'right', '10px');
  }

  verifyAudioContextState(state) {
    this.shouldBeVisible(this.selectors.audioContextState);
    this.shouldContainText(this.selectors.audioContextState, state);
    if (state === this.testData.audioContextStates.running) {
      this.shouldHaveCss(this.selectors.audioContextState, 'color', this.testData.colors.success);
    }
  }

  verifyActiveSourcesCount(count) {
    this.shouldBeVisible(this.selectors.activeSourcesCount);
    this.shouldContainText(this.selectors.activeSourcesCount, count.toString());
  }

  verifyMp3DecoderStatus(status) {
    this.shouldBeVisible(this.selectors.mp3DecoderStatus);
    this.shouldContainText(this.selectors.mp3DecoderStatus, status);
    if (status === this.testData.mp3DecoderStatus.notSupported) {
      this.shouldHaveCss(this.selectors.mp3DecoderStatus, 'color', this.testData.colors.warning);
    }
  }

  verifyTrackAndClipCounts(trackCount, clipCount) {
    this.shouldBeVisible(this.selectors.trackCount);
    this.shouldContainText(this.selectors.trackCount, trackCount.toString());
    this.shouldBeVisible(this.selectors.clipCount);
    this.shouldContainText(this.selectors.clipCount, clipCount.toString());
  }

  toggleDebugPanel() {
    this.click(this.selectors.showDebugLogs);
  }

  verifyDebugPanelHidden() {
    this.shouldNotBeVisible(this.selectors.audioDebug);
    this.shouldHaveCss(this.selectors.audioDebug, 'display', 'none');
  }

  verifyAudioClipInTrack(trackIndex) {
    this.getElementByIndex(this.selectors.track, trackIndex).within(() => {
      this.shouldExist(this.selectors.audioClip);
      this.shouldHaveAttribute(this.selectors.audioClip, 'draggable', 'true');
      this.shouldHaveAttribute(this.selectors.audioClip, 'title', 'Drag to reposition within track or drag to another track to move it');
      this.shouldExist(this.selectors.clipLabel);
      this.shouldExist(this.selectors.clipName);
      this.shouldExist(this.selectors.clipActions);
      this.shouldExist(this.selectors.clipDeleteBtn);
      this.shouldHaveAttribute(this.selectors.clipDeleteBtn, 'title', 'Delete clip');
      this.shouldHaveAttribute(this.selectors.clipDeleteBtn, 'aria-label', 'Delete clip');
      this.shouldExist(this.selectors.clipWaveform);
      this.shouldExist(this.selectors.trimHandleLeft);
      this.shouldExist(this.selectors.trimHandleRight);
      this.shouldExist(this.selectors.trimGuide);
    });
  }

  verifyClipName(name) {
    this.shouldContainText(this.selectors.clipName, name);
  }

  verifyClipWaveform() {
    this.shouldExist(this.selectors.clipWaveform);
  }

  verifyClipTrimHandles() {
    this.shouldExist(this.selectors.trimHandleLeft);
    this.shouldExist(this.selectors.trimHandleRight);
    this.shouldExist(this.selectors.trimGuide);
  }

  verifyClipDeletedFromTrack(trackIndex) {
    this.getElementByIndex(this.selectors.track, trackIndex).find(this.selectors.audioClip).should('not.exist');
  }

  verifyTrackHasNoClips(trackIndex) {
    this.getElementByIndex(this.selectors.track, trackIndex).find(this.selectors.audioClip).should('not.exist');
  }

  verifyMuteButtonActive(trackIndex) {
    this.getElementByIndex(this.selectors.muteButton, trackIndex).should('have.class', 'active');
  }

  verifyMuteButtonNotActive(trackIndex) {
    this.getElementByIndex(this.selectors.muteButton, trackIndex).should('not.have.class', 'active');
  }

  verifyTrackMuted(trackIndex) {
    this.getElementByIndex(this.selectors.track, trackIndex).should('have.class', 'muted');
  }

  verifyTrackNotMuted(trackIndex) {
    this.getElementByIndex(this.selectors.track, trackIndex).should('not.have.class', 'muted');
  }

  verifyTrackName(trackIndex, name) {
    this.getElementByIndex(this.selectors.trackName, trackIndex).should('contain', name);
  }

  verifyRemainingTracks(trackNames) {
    trackNames.forEach((name, index) => {
      this.verifyTrackName(index, name);
    });
  }

  deleteExistingExportFile() {
    cy.task('deleteFile', 'cypress/downloads/daw-export.wav');
  }

  clickExportButton() {
    this.deleteExistingExportFile();
    this.click(this.selectors.exportButton);
  }

  verifyWavFileDownload() {
    cy.readFile('cypress/downloads/daw-export.wav').should('exist');
  }

  deleteExistingZipFile() {
    cy.task('deleteFile', 'cypress/downloads/cloudjam-project.zip');
  }

  clickSaveButton() {
    this.deleteExistingZipFile();
    this.click(this.selectors.saveButton);
  }

  acceptProjectNameAlert() {
    cy.on('window:alert', () => {
      return true;
    });
  }

  verifyZipFileDownload() {
    cy.readFile('cypress/downloads/cloudjam-project.zip').should('exist');
  }
}

export default HomePage; 