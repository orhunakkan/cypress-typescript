import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    specPattern: ['**/*.feature', 'tests/**/*.cy.ts'],
    supportFile: false,
    downloadsFolder: 'cypress/downloads',
    fixturesFolder: 'fixtures'
  }
});
