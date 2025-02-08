import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    screenshotOnRunFailure: false,
    specPattern: "tests/**/*.cy.ts",
    supportFile: false,
    setupNodeEvents() {},
  },
});
