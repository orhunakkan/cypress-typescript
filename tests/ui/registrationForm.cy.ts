import { RegistrationFormUtils } from '../../utilities/registrationFormUtils';
import { RegistrationData } from '../../fixtures/uiTestData';

describe('Registration Form Test', () => {
  beforeEach(() => {
    // Navigate to the registration page
    cy.visit('https://practice.cydeo.com/registration_form');
  });

  it('should successfully complete registration', () => {
    // Use the registration utility to register a user
    RegistrationFormUtils.register(RegistrationData.validUser);
  });

  it('should validate form fields', () => {
    // Fill form with invalid data
    RegistrationFormUtils.fillForm(RegistrationData.invalidUser);
    RegistrationFormUtils.submitForm();
  });
});
