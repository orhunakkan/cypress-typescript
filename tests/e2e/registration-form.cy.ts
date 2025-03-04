import registrationFormPage from '../../pages/registration-page';

describe('Registration Form Tests', () => {
  beforeEach(() => {
    // Visit the registration form page before each test
    registrationFormPage.visit();
  });

  it('should successfully submit the registration form with valid data', () => {
    registrationFormPage
      .fillFirstName('John')
      .fillLastName('Doe')
      .fillUsername('johndoe123')
      .fillEmail('john.doe@example.com')
      .fillPassword('Password123')
      .fillPhone('571-123-4567')
      .selectGender('male')
      .fillBirthday('01/15/1990')
      .selectDepartment('DE')
      .selectJobTitle('SDET')
      .selectProgrammingLanguages(['java', 'javascript'])
      .submit()
      .verifySuccessfulRegistration();
  });

  it('should display validation errors for invalid form submission', () => {
    registrationFormPage
      .fillFirstName('Jane')
      .fillLastName('Smith')
      .fillUsername('jane') // Too short username
      .fillEmail('invalid-email') // Invalid email
      .fillPassword('pass') // Too short password
      .fillPhone('123-456'); // Invalid phone format

    // Verify validation errors are displayed
    registrationFormPage
      .verifyValidationError('username must be more than 6')
      .verifyValidationError('Email format is not correct')
      .verifyValidationError('password must have at least 8 characters')
      .verifyValidationError('Phone format is not correct')
      .verifyStillOnRegistrationPage();
  });
});
