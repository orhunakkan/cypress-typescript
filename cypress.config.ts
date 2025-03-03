import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    screenshotOnRunFailure: true,
    specPattern: 'tests/**/*.cy.ts',
    supportFile: false,
    downloadsFolder: 'cypress/downloads',
    fixturesFolder: 'fixtures',
    setupNodeEvents() {}
  }
});
