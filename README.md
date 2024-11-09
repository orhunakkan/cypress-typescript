# Cypress TypeScript Project (WIP)

This project is a sample setup for end-to-end (E2E) testing using Cypress with TypeScript. It demonstrates how to configure Cypress with TypeScript and organize tests in a structured manner.

## Project Structure

- `cypress.config.ts`: Configuration file for Cypress.
- `utilities/commands.ts`: Custom commands for Cypress (currently empty).
- `utilities/e2e.ts`: Support file for Cypress, importing custom commands.
- `samplePage.ts`: Placeholder for page object model (currently empty).
- `samplePayload.json`: Placeholder for sample payload data (currently empty).
- `sampleAPI.cy.ts`: Placeholder for API tests (currently empty).
- `sampleUI.cy.ts`: Placeholder for UI tests (currently empty).
- `package.json`: Project dependencies and metadata.
- `tsconfig.json`: TypeScript configuration file.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/cypress-typescript.git
    cd cypress-typescript
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

### Running Tests

To run the Cypress tests, use the following command:
```sh
npx cypress open