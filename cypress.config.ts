import { defineConfig } from 'cypress';
import * as webpack from 'webpack';
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';
import preprocessor from '@cypress/webpack-preprocessor';

async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
): Promise<Cypress.PluginConfigOptions> {
  // This is required for the preprocessor to be able to generate JSON reports after each run
  await addCucumberPreprocessorPlugin(on, config);

  on(
    'file:preprocessor',
    preprocessor({
      webpackOptions: {
        resolve: {
          extensions: ['.ts', '.js']
        },
        module: {
          rules: [
            {
              test: /\.ts$/,
              exclude: [/node_modules/],
              use: [
                {
                  loader: 'ts-loader'
                }
              ]
            },
            {
              test: /\.feature$/,
              use: [
                {
                  loader: '@badeball/cypress-cucumber-preprocessor/webpack',
                  options: config
                }
              ]
            }
          ]
        }
      }
    })
  );

  // Make sure to return the config object as it might have been modified
  return config;
}

export default defineConfig({
  e2e: {
    specPattern: ['**/*.feature', 'tests/**/*.cy.ts'],
    supportFile: false,
    downloadsFolder: 'cypress/downloads',
    fixturesFolder: 'fixtures',
    setupNodeEvents,
    // Add this configuration for cucumber
    env: {
      omitFiltered: true,
      filterSpecs: true,
      // Configure the step definition patterns
      stepDefinitions: ['features/step_definitions/*.ts']
    }
  }
});
