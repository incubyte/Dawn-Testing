const { Given, Then } = require("@badeball/cypress-cucumber-preprocessor");
const ExamplePage = require("../../pages/ExamplePage").default;

Given("I open the example page", () => {
  ExamplePage.visit();
});

Then("I should see the example text", () => {
  ExamplePage.getExampleText().should('exist');
});