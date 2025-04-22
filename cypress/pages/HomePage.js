import BasePage from './BasePage';

class HomePage extends BasePage {
    constructor() {
        super();
        this.iconClass = '.button-icon';  // Override icon class for homepage
        this.locator = {
            ...this.locator,
            welcomeScreen: {
                container: () => cy.get('.welcome-screen'),
                content: () => cy.get('.welcome-content')
            },
            header: {
                container: () => cy.get('.welcome-header'),
                logo: () => cy.get('.welcome-logo'),
                title: () => cy.get('h1'),
                subtitle: () => cy.get('.subtitle')
            },
            actions: {
                container: () => cy.get('.actions-container'),
                sectionTitle: () => cy.get('h2').contains('Create or Load Project'),
                newProjectBtn: () => cy.get('#new-project-btn'),
                loadProjectBtn: () => cy.get('#load-project-btn')
            },
            storage: {
                container: () => cy.get('.storage-options'),
                header: () => cy.get('h2').contains('Storage Location'),
                option: () => cy.get('.storage-option'),
                icon: () => cy.get('.storage-icon'),
                title: () => cy.get('.storage-details h3'),
                description: () => cy.get('.storage-details p'),
                radioButton: () => cy.get('#storage-local')
            }
        };
    }

    // Verification methods
    verifyWelcomeScreen() {
        this.verifyElementVisible(this.locator.welcomeScreen.container);
        this.verifyElementVisible(this.locator.welcomeScreen.content);
    }

    verifyHeader() {
        this.verifyElementVisible(this.locator.header.container);
        this.verifyElementVisible(this.locator.header.logo);
        this.verifyContainsText(this.locator.header.title, 'Welcome to DAWN');
        this.verifyContainsText(this.locator.header.subtitle, 'Digital Audio Workstation for the Web');
    }

    verifyActionButtons() {
        this.verifyElementVisible(this.locator.actions.container);
        this.verifyContainsText(this.locator.actions.sectionTitle, 'Create or Load Project');
        
        // Verify New Project button
        const newProjectBtn = this.locator.actions.newProjectBtn;
        this.verifyElementVisible(newProjectBtn);
        this.verifyIconText(newProjectBtn, '📝');
        this.verifyContainsText(() => newProjectBtn().find('.button-text'), 'New Project');
        
        // Verify Load Project button
        const loadProjectBtn = this.locator.actions.loadProjectBtn;
        this.verifyElementVisible(loadProjectBtn);
        this.verifyIconText(loadProjectBtn, '📂');
        this.verifyContainsText(() => loadProjectBtn().find('.button-text'), 'Load Project');
    }

    verifyStorageSection() {
        this.verifyElementVisible(this.locator.storage.container);
        this.verifyContainsText(this.locator.storage.header, 'Storage Location');
        this.verifyElementVisible(this.locator.storage.option);
        this.verifyContainsText(this.locator.storage.icon, '💾');
        this.verifyContainsText(this.locator.storage.title, 'Local Storage');
        this.verifyContainsText(this.locator.storage.description, 'Save projects to your device');
        
        // Verify radio button is checked
        this.locator.storage.radioButton().should('be.checked');
    }

    // Action methods
    clickNewProject() {
        this.locator.actions.newProjectBtn().click();
    }

    clickLoadProject() {
        this.locator.actions.loadProjectBtn().click();
    }
}

export default new HomePage();