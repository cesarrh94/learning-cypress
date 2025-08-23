const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // setting up te project url
    baseUrl: 'https://playground.bondaracademy.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  // overwritting resolution 
  viewportWidth: 1280,
  viewportHeight: 720,
  // overwriting general timeout from 4s to 11s
  // defaultCommandTimeout: 11000
});
