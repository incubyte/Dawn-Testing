import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I open the example page", () => {
  cy.visit("https://example.cypress.io");
});

Then("I should see the example text", () => {
  cy.contains("Kitchen Sink").should("be.visible");
});