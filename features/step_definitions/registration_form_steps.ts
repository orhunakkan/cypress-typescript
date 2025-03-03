import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { RegistrationFormUtils } from '../../utilities/registrationFormUtils';
import { RegistrationFormPage } from '../../pages/registrationFormPage';
import { UserData } from '../../fixtures/uiTestData';

// Helper to store user data
let userData: UserData;

Given('I navigate to the registration page', () => {
  cy.visit('https://practice.cydeo.com/registration_form');
});

When('I fill the registration form with valid data:', (dataTable: any) => {
  const data = dataTable.hashes()[0];
  userData = {
    firstName: data.firstName,
    lastName: data.lastName,
    username: data.username,
    email: data.email,
    password: data.password,
    phone: data.phone,
    birthday: data.birthday,
    gender: data.gender,
    department: data.department,
    jobTitle: data.jobTitle,
    programmingLanguages: []
  };

  // Fill the form excluding programming languages
  cy.get(RegistrationFormPage.firstNameInput).type(userData.firstName);
  cy.get(RegistrationFormPage.lastNameInput).type(userData.lastName);
  cy.get(RegistrationFormPage.usernameInput).type(userData.username);
  cy.get(RegistrationFormPage.emailInput).type(userData.email);
  cy.get(RegistrationFormPage.passwordInput).type(userData.password);
  cy.get(RegistrationFormPage.phoneInput).type(userData.phone);
  cy.get(RegistrationFormPage.birthdayInput).type(userData.birthday);
  cy.get(RegistrationFormPage.genderRadio(userData.gender)).check();
  cy.get(RegistrationFormPage.departmentSelect).select(userData.department);
  cy.get(RegistrationFormPage.jobTitleSelect).select(userData.jobTitle);
});

When('I fill the registration form with invalid data:', (dataTable: any) => {
  const data = dataTable.hashes()[0];
  userData = {
    firstName: data.firstName,
    lastName: data.lastName,
    username: data.username,
    email: data.email,
    password: data.password,
    phone: data.phone,
    birthday: data.birthday,
    gender: data.gender,
    department: data.department,
    jobTitle: data.jobTitle,
    programmingLanguages: []
  };

  // Fill the form excluding programming languages
  cy.get(RegistrationFormPage.firstNameInput).type(userData.firstName);
  cy.get(RegistrationFormPage.lastNameInput).type(userData.lastName);
  cy.get(RegistrationFormPage.usernameInput).type(userData.username);
  cy.get(RegistrationFormPage.emailInput).type(userData.email);
  cy.get(RegistrationFormPage.passwordInput).type(userData.password);
  cy.get(RegistrationFormPage.phoneInput).type(userData.phone);
  cy.get(RegistrationFormPage.birthdayInput).type(userData.birthday);
  cy.get(RegistrationFormPage.genderRadio(userData.gender)).check();
  cy.get(RegistrationFormPage.departmentSelect).select(userData.department);
  cy.get(RegistrationFormPage.jobTitleSelect).select(userData.jobTitle);
});

When(
  'I select the following programming languages:',
  (dataTable: { raw: () => string[][] }) => {
    const languages = dataTable.raw()[0];

    // Map languages to their checkbox IDs
    const languageMap = {
      'C++': 1,
      Java: 2,
      JavaScript: 3
    };

    // Check the appropriate boxes
    languages.forEach(language => {
      const languageId = languageMap[language];
      if (languageId) {
        cy.get(RegistrationFormPage.languageCheckbox(languageId)).check();
        userData.programmingLanguages.push(languageId);
      }
    });
  }
);

When('I select the C++ programming language', () => {
  cy.get(RegistrationFormPage.languageCheckbox(1)).check();
  userData.programmingLanguages.push(1);
});

When('I submit the registration form', () => {
  RegistrationFormUtils.submitForm();
});

Then('I should see a successful registration message', () => {
  RegistrationFormUtils.verifySuccess();
});
