/**
 * Waits for an element to be visible
 * @param {string} selector - The selector to wait for
 * @param {number} timeout - The timeout in milliseconds
 */
export const waitForElement = (selector, timeout = 10000) => {
  cy.get(selector, { timeout }).should('be.visible');
};

/**
 * Waits for an element to exist
 * @param {string} selector - The selector to wait for
 * @param {number} timeout - The timeout in milliseconds
 */
export const waitForElementToExist = (selector, timeout = 10000) => {
  cy.get(selector, { timeout }).should('exist');
};

/**
 * Waits for an element to not exist
 * @param {string} selector - The selector to wait for
 * @param {number} timeout - The timeout in milliseconds
 */
export const waitForElementToNotExist = (selector, timeout = 10000) => {
  cy.get(selector, { timeout }).should('not.exist');
};

/**
 * Waits for an element to not be visible
 * @param {string} selector - The selector to wait for
 * @param {number} timeout - The timeout in milliseconds
 */
export const waitForElementToNotBeVisible = (selector, timeout = 10000) => {
  cy.get(selector, { timeout }).should('not.be.visible');
};

/**
 * Waits for an element to have a specific class
 * @param {string} selector - The selector to wait for
 * @param {string} className - The class name to wait for
 * @param {number} timeout - The timeout in milliseconds
 */
export const waitForElementToHaveClass = (selector, className, timeout = 10000) => {
  cy.get(selector, { timeout }).should('have.class', className);
};

/**
 * Waits for an element to not have a specific class
 * @param {string} selector - The selector to wait for
 * @param {string} className - The class name to wait for
 * @param {number} timeout - The timeout in milliseconds
 */
export const waitForElementToNotHaveClass = (selector, className, timeout = 10000) => {
  cy.get(selector, { timeout }).should('not.have.class', className);
};

/**
 * Waits for an element to have a specific text
 * @param {string} selector - The selector to wait for
 * @param {string} text - The text to wait for
 * @param {number} timeout - The timeout in milliseconds
 */
export const waitForElementToHaveText = (selector, text, timeout = 10000) => {
  cy.get(selector, { timeout }).should('contain', text);
};

/**
 * Waits for an element to have a specific attribute
 * @param {string} selector - The selector to wait for
 * @param {string} attribute - The attribute to wait for
 * @param {string} value - The value to wait for
 * @param {number} timeout - The timeout in milliseconds
 */
export const waitForElementToHaveAttribute = (selector, attribute, value, timeout = 10000) => {
  cy.get(selector, { timeout }).should('have.attr', attribute, value);
};

/**
 * Waits for an element to have a specific CSS property
 * @param {string} selector - The selector to wait for
 * @param {string} property - The CSS property to wait for
 * @param {string} value - The value to wait for
 * @param {number} timeout - The timeout in milliseconds
 */
export const waitForElementToHaveCss = (selector, property, value, timeout = 10000) => {
  cy.get(selector, { timeout }).should('have.css', property, value);
};

/**
 * Waits for an element to have a specific length
 * @param {string} selector - The selector to wait for
 * @param {number} length - The length to wait for
 * @param {number} timeout - The timeout in milliseconds
 */
export const waitForElementToHaveLength = (selector, length, timeout = 10000) => {
  cy.get(selector, { timeout }).should('have.length', length);
};

/**
 * Waits for an element to be enabled
 * @param {string} selector - The selector to wait for
 * @param {number} timeout - The timeout in milliseconds
 */
export const waitForElementToBeEnabled = (selector, timeout = 10000) => {
  cy.get(selector, { timeout }).should('be.enabled');
};

/**
 * Waits for an element to be disabled
 * @param {string} selector - The selector to wait for
 * @param {number} timeout - The timeout in milliseconds
 */
export const waitForElementToBeDisabled = (selector, timeout = 10000) => {
  cy.get(selector, { timeout }).should('be.disabled');
};

/**
 * Waits for an element to be checked
 * @param {string} selector - The selector to wait for
 * @param {number} timeout - The timeout in milliseconds
 */
export const waitForElementToBeChecked = (selector, timeout = 10000) => {
  cy.get(selector, { timeout }).should('be.checked');
};

/**
 * Waits for an element to not be checked
 * @param {string} selector - The selector to wait for
 * @param {number} timeout - The timeout in milliseconds
 */
export const waitForElementToNotBeChecked = (selector, timeout = 10000) => {
  cy.get(selector, { timeout }).should('not.be.checked');
};

/**
 * Waits for an element to be focused
 * @param {string} selector - The selector to wait for
 * @param {number} timeout - The timeout in milliseconds
 */
export const waitForElementToBeFocused = (selector, timeout = 10000) => {
  cy.get(selector, { timeout }).should('be.focused');
};

/**
 * Waits for an element to not be focused
 * @param {string} selector - The selector to wait for
 * @param {number} timeout - The timeout in milliseconds
 */
export const waitForElementToNotBeFocused = (selector, timeout = 10000) => {
  cy.get(selector, { timeout }).should('not.be.focused');
};

/**
 * Waits for an element to be selected
 * @param {string} selector - The selector to wait for
 * @param {number} timeout - The timeout in milliseconds
 */
export const waitForElementToBeSelected = (selector, timeout = 10000) => {
  cy.get(selector, { timeout }).should('be.selected');
};

/**
 * Waits for an element to not be selected
 * @param {string} selector - The selector to wait for
 * @param {number} timeout - The timeout in milliseconds
 */
export const waitForElementToNotBeSelected = (selector, timeout = 10000) => {
  cy.get(selector, { timeout }).should('not.be.selected');
}; 