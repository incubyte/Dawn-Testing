const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const webpack = require("@cypress/webpack-preprocessor");
const { allureCypress } = require("allure-cypress/reporter");
const fs = require("fs-extra");
const path = require("path");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/features/*.feature",
    supportFile: "cypress/support/e2e.js",
    stepDefinitions: "cypress/support/step_definitions/**/*.{js,ts}",
    async setupNodeEvents(on, config) {
      // Initialize Cucumber preprocessor
      await preprocessor.addCucumberPreprocessorPlugin(on, config);

      // Configure Webpack for .feature files
      on("file:preprocessor", webpack({
        webpackOptions: {
          resolve: { extensions: [".ts", ".js"] },
          module: {
            rules: [
              {
                test: /\.feature$/,
                use: [
                  {
                    loader: "@badeball/cypress-cucumber-preprocessor/webpack",
                    options: config,
                  },
                ],
              },
            ],
          },
        },
      }));

      // Initialize Allure reporter
      await allureCypress(on, config);

      // Setup Allure results directory
      const allureResults = "allure-results";
      on("before:run", async () => {
        await fs.ensureDir(allureResults);
        await fs.emptyDir(allureResults);

        const environmentProperties = `Environment=test\nSessionID=${new Date().getTime()}\n`;
        await fs.writeFile(
          path.join(allureResults, "environment.properties"),
          environmentProperties
        );
      });

      return config;
    },
    baseUrl: "https://cloudjam.netlify.app",
    chromeWebSecurity: false,
  },
});
