import BasePage from './BasePage';

class WorkstationPage extends BasePage {
    constructor() {
        super();
        this.iconClass = '.icon';  // Override icon class for workstation page
        this.locator = {
            ...this.locator,
            logo: () => cy.get('.dawn-logo'),
            header: {
                timeDisplay: () => cy.get('#current-time')
            },
            transport: {
                controls: () => cy.get('#transport-controls'),
                playButton: () => cy.get('#play-button'),
                pauseButton: () => cy.get('#pause-button'),
                stopButton: () => cy.get('#stop-button')
            },
            editing: {
                copyButton: () => cy.get('#copy-button'),
                pasteButton: () => cy.get('#paste-button'),
                trimButton: () => cy.get('#trim-info-button'),
                deleteClipButton: () => cy.get('#delete-clip-button'),
                deleteTrackButton: () => cy.get('#delete-track-button')
            },
            project: {
                saveButton: () => cy.get('#save-button'),
                saveAsButton: () => cy.get('#save-as-button'),
                loadButton: () => cy.get('#load-button'),
                exportButton: () => cy.get('#export-button')
            },
            timeline: {
                container: () => cy.get('#timeline'),
                timeMarkers: () => cy.get('.timeline-marker'),
                zoomIn: () => cy.get('.zoom-in-button'),
                zoomOut: () => cy.get('.zoom-out-button')
            },
            tracks: {
                importAudio: () => cy.get('#import-audio-button'),
                addTrack: () => cy.get('#add-track-button'),
                container: () => cy.get('#tracks-container'),
                defaultTrack: () => cy.get('.track').first(),
                trackControls: {
                    mute: () => cy.get('.mute-button'),
                    solo: () => cy.get('.solo-button'),
                    effects: () => cy.get('.effects-button'),
                    volume: () => cy.get('.gain-slider')
                }
            }
        };
    }

    verifyTransportButton(name, icon) {
        const buttonMap = {
            'play': this.locator.transport.playButton,
            'pause': this.locator.transport.pauseButton,
            'stop': this.locator.transport.stopButton
        };
        const button = buttonMap[name.toLowerCase()];
        this.verifyElementVisible(button);
        this.verifyIconText(button, icon);
    }

    verifyEditingButton(name, icon) {
        const buttonMap = {
            'copy': this.locator.editing.copyButton,
            'paste': this.locator.editing.pasteButton,
            'trim': this.locator.editing.trimButton,
            'delete clip': this.locator.editing.deleteClipButton,
            'delete track': this.locator.editing.deleteTrackButton
        };
        
        const button = buttonMap[name.toLowerCase()];
        this.verifyElementVisible(button);
        this.verifyIconText(button, icon);
    }

    verifyProjectButton(name) {
        const buttonMap = {
            'save': this.locator.project.saveButton,
            'save as': this.locator.project.saveAsButton,
            'load': this.locator.project.loadButton,
            'export': this.locator.project.exportButton
        };
        const button = buttonMap[name.toLowerCase()];
        this.verifyElementVisible(button);
        this.verifyContainsText(button, name);
    }

    verifyTrackControl(control) {
        const controlMap = {
            'mute': this.locator.tracks.trackControls.mute,
            'solo': this.locator.tracks.trackControls.solo,
            'effects': this.locator.tracks.trackControls.effects,
            'volume': this.locator.tracks.trackControls.volume
        };
        this.verifyElementVisible(controlMap[control.toLowerCase()]);
    }
}

export default new WorkstationPage();