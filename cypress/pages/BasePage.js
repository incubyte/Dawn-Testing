class BasePage {
    constructor() {
        this.baseUrl = 'https://cloudjam.netlify.app/';
        this.iconClass = '.icon';  // Default icon class, can be overridden by child classes
        this.locator = {
            logo: () => cy.get('.welcome-logo'),
            buttons: {
                getByText: (text) => cy.contains('button', text),
                getById: (id) => cy.get(`#${id}`),
                getByClass: (className) => cy.get(`.${className}`)
            }
        };
    }

    // Common methods
    visit() {
        cy.visit(this.baseUrl);
    }

    clickButton(buttonText) {
        if (buttonText === 'New Project') {
            cy.get('#new-project-btn').click();
        } else {
            cy.contains('button', buttonText).click();
        }
    }

    verifyElementVisible(selector) {
        if (typeof selector === 'function') {
            selector().scrollIntoView().should('be.visible');
        } else {
            cy.wrap(selector).scrollIntoView().should('be.visible');
        }
    }

    verifyElementExists(selector) {
        if (typeof selector === 'function') {
            selector().should('exist');
        } else {
            cy.wrap(selector).should('exist');
        }
    }

    verifyButtonVisible(buttonText) {
        cy.contains('button', buttonText).scrollIntoView().should('be.visible');
    }

    verifyIconText(selector, expectedText) {
        if (typeof selector === 'function') {
            selector().find(this.iconClass).invoke('text').should('contain', expectedText);
        } else {
            cy.wrap(selector).find(this.iconClass).invoke('text').should('contain', expectedText);
        }
    }

    verifyExactText(selector, expectedText) {
        if (typeof selector === 'function') {
            selector().invoke('text').should('eq', expectedText);
        } else {
            cy.wrap(selector).invoke('text').should('eq', expectedText);
        }
    }

    verifyContainsText(selector, expectedText) {
        if (typeof selector === 'function') {
            selector().invoke('text').should('contain', expectedText);
        } else {
            cy.wrap(selector).invoke('text').should('contain', expectedText);
        }
    }
}

export default BasePage;