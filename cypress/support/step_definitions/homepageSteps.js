import { Then } from '@badeball/cypress-cucumber-preprocessor';
import HomePage from '../../pages/HomePage';

Then('I should verify the welcome screen', () => {
    HomePage.verifyWelcomeScreen();
});

Then('I should verify the header section', () => {
    HomePage.verifyHeader();
});

Then('I should verify the action buttons', () => {
    HomePage.verifyActionButtons();
});

Then('I should verify the storage section', () => {
    HomePage.verifyStorageSection();
});

Then('the local storage option should be selected by default', () => {
    HomePage.locator.storage.radioButton().should('be.checked');
});