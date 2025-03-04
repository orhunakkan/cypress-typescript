import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    specPattern: ['tests/**/*.cy.ts'],
    supportFile: false,
    downloadsFolder: 'downloads',
    fixturesFolder: 'fixtures'
  }
});
