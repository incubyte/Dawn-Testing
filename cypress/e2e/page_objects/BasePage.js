import {
  waitForElement,
  waitForElementToExist,
  waitForElementToNotExist,
  waitForElementToNotBeVisible,
  waitForElementToHaveClass,
  waitForElementToNotHaveClass,
  waitForElementToHaveText,
  waitForElementToHaveAttribute,
  waitForElementToHaveCss,
  waitForElementToHaveLength,
  waitForElementToBeEnabled,
  waitForElementToBeDisabled,
  waitForElementToBeChecked,
  waitForElementToNotBeChecked,
  waitForElementToBeFocused,
  waitForElementToNotBeFocused,
  waitForElementToBeSelected,
  waitForElementToNotBeSelected
} from '../utils/commonUtils';

class BasePage {
  constructor() {
    this.baseUrl = Cypress.config('baseUrl') || '';
  }

  visit(path = '') {
    cy.visit(this.baseUrl + path);
  }

  click(selector) {
    cy.get(selector).click();
  }

  clickFirst(selector) {
    cy.get(selector).first().click();
  }

  clickByText(text, selector = 'button') {
    cy.get(selector).contains(text).click();
  }

  selectFile(selector, filePath) {
    cy.get(selector).selectFile(filePath, { force: true });
  }

  shouldExist(selector) {
    waitForElementToExist(selector);
  }

  shouldBeVisible(selector) {
    waitForElement(selector);
  }

  shouldHaveClass(selector, className) {
    waitForElementToHaveClass(selector, className);
  }

  shouldNotHaveClass(selector, className) {
    waitForElementToNotHaveClass(selector, className);
  }

  shouldHaveLength(selector, length) {
    waitForElementToHaveLength(selector, length);
  }

  shouldContainText(selector, text) {
    waitForElementToHaveText(selector, text);
  }

  shouldHaveAttribute(selector, attribute, value) {
    waitForElementToHaveAttribute(selector, attribute, value);
  }

  shouldHaveCss(selector, property, value) {
    waitForElementToHaveCss(selector, property, value);
  }

  shouldNotExist(selector) {
    waitForElementToNotExist(selector);
  }

  shouldNotBeVisible(selector) {
    waitForElementToNotBeVisible(selector);
  }

  shouldBeEnabled(selector) {
    waitForElementToBeEnabled(selector);
  }

  shouldBeDisabled(selector) {
    waitForElementToBeDisabled(selector);
  }

  shouldBeChecked(selector) {
    waitForElementToBeChecked(selector);
  }

  shouldNotBeChecked(selector) {
    waitForElementToNotBeChecked(selector);
  }

  shouldBeFocused(selector) {
    waitForElementToBeFocused(selector);
  }

  shouldNotBeFocused(selector) {
    waitForElementToNotBeFocused(selector);
  }

  shouldBeSelected(selector) {
    waitForElementToBeSelected(selector);
  }

  shouldNotBeSelected(selector) {
    waitForElementToNotBeSelected(selector);
  }

  getElement(selector) {
    return cy.get(selector);
  }

  getFirstElement(selector) {
    return cy.get(selector).first();
  }

  getElementByIndex(selector, index) {
    return cy.get(selector).eq(index);
  }
}

export default BasePage; 