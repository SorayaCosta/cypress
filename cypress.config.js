const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false, //ignora possíveis erros de conteúdo inseguro e ou crossorigin
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
