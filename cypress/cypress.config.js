const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Implementação de eventos Node (se necessário)
    },
    baseUrl: 'https://agenda-contatos-react.vercel.app/',  // URL base da aplicação
    specPattern: 'cypress/e2e/**/*.spec.js',  // Localização dos testes
    supportFile: false,
  },
});
