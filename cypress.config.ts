import {defineConfig} from "cypress";

export default defineConfig({
    e2e: {
        specPattern: 'tests/**/*.cy.ts',
        supportFile: 'utilities/e2e.ts',
        setupNodeEvents(on, config) {
        },
    },
});
