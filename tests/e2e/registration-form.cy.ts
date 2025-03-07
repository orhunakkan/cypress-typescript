import registrationFormPage from '../../pages/registration-page';
import userData from '../../fixtures/user-data.json';

describe('Registration Form Tests', () => {
  beforeEach(() => {
    // Visit the registration form page before each test
    registrationFormPage.visit();
  });

  it('should successfully submit the registration form with valid data', () => {
    const { validUser } = userData;

    registrationFormPage
      .fillFirstName(validUser.firstName)
      .fillLastName(validUser.lastName)
      .fillUsername(validUser.username)
      .fillEmail(validUser.email)
      .fillPassword(validUser.password)
      .fillPhone(validUser.phone)
      .selectGender(validUser.gender)
      .fillBirthday(validUser.birthday)
      .selectDepartment(validUser.department)
      .selectJobTitle(validUser.jobTitle)
      .selectProgrammingLanguages(validUser.programmingLanguages)
      .submit()
      .verifySuccessfulRegistration();
  });

  it('should display validation errors for invalid form submission', () => {
    const { invalidUser } = userData;

    registrationFormPage
      .fillFirstName(invalidUser.firstName)
      .fillLastName(invalidUser.lastName)
      .fillUsername(invalidUser.username)
      .fillEmail(invalidUser.email)
      .fillPassword(invalidUser.password)
      .fillPhone(invalidUser.phone);

    // Verify validation errors are displayed
    registrationFormPage
      .verifyValidationError('username must be more than 6')
      .verifyValidationError('Email format is not correct')
      .verifyValidationError('password must have at least 8 characters')
      .verifyValidationError('Phone format is not correct')
      .verifyStillOnRegistrationPage();
  });
});
