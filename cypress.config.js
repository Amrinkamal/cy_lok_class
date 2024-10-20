const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  
  screenshotOnRunFailure:true,
  video:true,
  defaultCommandTimeout:8000,
  pageLoadTimeout:20000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      

    },
  },
});