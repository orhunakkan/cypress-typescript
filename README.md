# Project Overview

This project is a comprehensive testing framework built using TypeScript, Selenium WebDriver, and Vitest. It includes
API testing, database testing, and UI testing, providing a robust solution for end-to-end testing of web applications.
There will be more tests added in the future. Please check out my other repositories for more testing frameworks.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (version 20 and up) and npm installed on your machine.
- git (version control system) installed on your machine.

## Installation

To set up the project, follow these steps:

1. Clone the repository:
    ```sh
    git clone <repository-url>
    ```

2. Navigate to the project directory:
    ```sh
    cd selenium-typescript-framework
    ```

3. Install the dependencies:
    ```sh
    npm install
    ```

## Folder Structure

The project structure is organized as follows:

- `pages/`: Page Object Model classes for UI tests.
- `tests/`: Test files for API, database, and UI tests.
- `utilities/`: Utility functions and helpers.
- `payloads/`: JSON files containing test data.

## Running Tests

There is an issue with vitest and selenium webdriver tests at the moment. When we run `npx vitest` or `vitest --ui`, it runs all tests in `tests` folder but sampleUI.spec.ts file fails, others pass.
However, you can use IntelliJ IDEA to run the tests. There is a built-in Run feature for vitest. If you are using VS Code, make sure you installed the Vitest extension,
and then you can run the tests from the test files.

## Writing Tests

Tests are written using Selenium WebVitest and are located in the `tests/` directory. Each test file follows a specific structure:

- `sampleAPI.spec.ts`: Contains API tests using Axios.
- `sampleDB.spec.ts`: Contains database tests using SQLite.
- `sampleUI.spec.ts`: Contains UI tests using Selenium WebDriver.

## Running Tests in CI/CD

This is currently work in progress. The project will be integrated with GitHub Actions.

## Error Handling and Debugging

The project includes comprehensive error handling and debugging mechanisms. Use the following techniques to debug tests:

- Console logs
- Breakpoints in the IDE
- Debugging tools provided by the browser

## Reporting

Test results are reported using the HTML reporter configured in Vitest. The reports provide detailed information about
the test execution, including passed and failed tests. To see the reports, run:

```
npx vite preview --outDir html
```

## Troubleshooting

If you encounter any issues, refer to the following troubleshooting steps:

- Ensure that all dependencies are installed correctly.
- Verify that the browser drivers are up to date.
- Check the configuration files for any misconfigurations.
- Review the console logs for error messages.
