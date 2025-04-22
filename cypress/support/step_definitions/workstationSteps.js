import { Then, When } from '@badeball/cypress-cucumber-preprocessor';
import WorkstationPage from '../../pages/WorkstationPage';

Then('I should see transport controls', () => {
    WorkstationPage.verifyElementVisible(WorkstationPage.locator.transport.controls);
});

Then('I should see time display showing {string}', (time) => {
    WorkstationPage.verifyExactText(WorkstationPage.locator.header.timeDisplay, time);
});

Then('I should see editing controls', () => {
    WorkstationPage.verifyElementExists(WorkstationPage.locator.editing.copyButton);
    WorkstationPage.verifyElementExists(WorkstationPage.locator.editing.pasteButton);
});

Then('I should see project controls', () => {
    WorkstationPage.verifyElementExists(WorkstationPage.locator.project.saveButton);
    WorkstationPage.verifyElementExists(WorkstationPage.locator.project.loadButton);
});

Then('I should see the following transport buttons', (dataTable) => {
    dataTable.hashes().forEach(row => {
        WorkstationPage.verifyTransportButton(row.button, row.icon);
    });
});

Then('I should see the following editing buttons', (dataTable) => {
    dataTable.hashes().forEach(row => {
        WorkstationPage.verifyEditingButton(row.button, row.icon);
    });
});

Then('I should see the following project buttons', (dataTable) => {
    dataTable.hashes().forEach(row => {
        WorkstationPage.verifyProjectButton(row.button);
    });
});

Then('I should see the timeline with time markers', () => {
    WorkstationPage.verifyElementVisible(WorkstationPage.locator.timeline.container);
    WorkstationPage.verifyElementExists(WorkstationPage.locator.timeline.timeMarkers);
});

Then('I should see zoom controls', () => {
    WorkstationPage.verifyElementVisible(WorkstationPage.locator.timeline.zoomIn);
    WorkstationPage.verifyElementVisible(WorkstationPage.locator.timeline.zoomOut);
});

Then('I should see track controls', () => {
    WorkstationPage.verifyElementVisible(WorkstationPage.locator.tracks.importAudio);
    WorkstationPage.verifyElementVisible(WorkstationPage.locator.tracks.addTrack);
});

Then('I should see one default track', () => {
    WorkstationPage.verifyElementVisible(WorkstationPage.locator.tracks.defaultTrack);
    WorkstationPage.verifyContainsText(
        () => WorkstationPage.locator.tracks.defaultTrack().find('.track-name'),
        'Track 1'
    );
});

Then('the default track should have basic controls', (dataTable) => {
    dataTable.hashes().forEach(row => {
        WorkstationPage.verifyTrackControl(row.control);
    });
});

When('I click the Add Track button', () => {
    WorkstationPage.clickAddTrack();
});

When('I delete track {int}', (trackNumber) => {
    cy.contains('.track-name', `Track ${trackNumber}`)
        .parents('.track')
        .find('.delete-track-btn')
        .click();
});

Then('I should see {int} tracks', (expectedCount) => {
    WorkstationPage.getTrackCount().should('eq', expectedCount);
});

Then('I should see track {int}', (trackNumber) => {
    WorkstationPage.verifyTrackExists(trackNumber);
});

Then('I should not see track {int}', (trackNumber) => {
    WorkstationPage.verifyTrackNotExists(trackNumber);
});