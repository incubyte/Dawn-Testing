const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const fs = require('fs');

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    })
  );
  on('task', {
    deleteFile(filename) {
      if (fs.existsSync(filename)) {
        fs.unlinkSync(filename);
      }
      return null;
    }
  });
  return config;
}

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/features/*.feature",
    supportFile: "cypress/support/e2e.js",
    setupNodeEvents,
    baseUrl: "https://cloudjam.netlify.app/",
    downloadsFolder: 'cypress/downloads',
    video: false,
    screenshotOnRunFailure: true
  },
}); 