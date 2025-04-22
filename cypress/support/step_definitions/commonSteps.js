import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import HomePage from '../../pages/HomePage';
import WorkstationPage from '../../pages/WorkstationPage';

Given('I visit the DAWN application', () => {
    HomePage.visit();
});

When('I click on {string} button', (buttonName) => {
    if (buttonName === 'New Project') {
        HomePage.clickButton(buttonName);
    } else {
        WorkstationPage.clickButton(buttonName);
    }
});

Then('I should see the DAWN logo', () => {
    HomePage.verifyElementVisible(HomePage.locator.logo);
});

Then('I should see the DAWN logo in the header', () => {
    WorkstationPage.verifyElementVisible(WorkstationPage.locator.logo);
});

Then('I should see {string} button', (buttonText) => {
    HomePage.verifyButtonVisible(buttonText);
});

Then('I should see workstation {string} button', (buttonText) => {
    WorkstationPage.verifyButtonVisible(buttonText);
});