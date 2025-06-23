const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  createEsbuildPlugin,
} = require("@badeball/cypress-cucumber-preprocessor/esbuild");

async function setupNodeEvents(on, config) {
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin(config)],
    })
  );

  // Configure mochawesome reporter
  on('after:run', async (results) => {
    if (results) {
      await require('fs').writeFileSync(
        'cypress/results/results.json',
        JSON.stringify(results)
      );
    }
  });

  return config;
}

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://dev-tms.blusalt.net/merchant-payment/dashboard',
    viewportHeight: 800,
    viewportWidth: 1200,
    watchForFileChanges: false,
    experimentalWebKitSupport: true,
    chromeWebSecurity: false,
    specPattern: '**/*.feature',
    setupNodeEvents,
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results',
      overwrite: false,
      html: false,
      json: true
    }
  }
});
