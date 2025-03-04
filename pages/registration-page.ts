export class RegistrationPage {
  // Page URL
  private pageUrl = 'https://practice.cydeo.com/registration_form';

  // Selectors
  private firstNameInput = 'input[name="firstname"]';
  private lastNameInput = 'input[name="lastname"]';
  private usernameInput = 'input[name="username"]';
  private emailInput = 'input[name="email"]';
  private passwordInput = 'input[name="password"]';
  private phoneInput = 'input[name="phone"]';
  private genderRadioMale = 'input[name="gender"][value="male"]';
  private genderRadioFemale = 'input[name="gender"][value="female"]';
  private genderRadioOther = 'input[name="gender"][value="other"]';
  private birthdayInput = 'input[name="birthday"]';
  private departmentSelect = 'select[name="department"]';
  private jobTitleSelect = 'select[name="job_title"]';
  private programmingLanguageJava = '#inlineCheckbox2';
  private programmingLanguageJS = '#inlineCheckbox3';
  private submitButton = '#wooden_spoon';
  private successMessage = '.alert-success';

  // Actions
  visit() {
    cy.visit(this.pageUrl);
    return this;
  }

  fillFirstName(firstName: string) {
    cy.get(this.firstNameInput).type(firstName);
    return this;
  }

  fillLastName(lastName: string) {
    cy.get(this.lastNameInput).type(lastName);
    return this;
  }

  fillUsername(username: string) {
    cy.get(this.usernameInput).type(username);
    return this;
  }

  fillEmail(email: string) {
    cy.get(this.emailInput).type(email);
    return this;
  }

  fillPassword(password: string) {
    cy.get(this.passwordInput).type(password);
    return this;
  }

  fillPhone(phone: string) {
    cy.get(this.phoneInput).type(phone);
    return this;
  }

  selectGender(gender: 'male' | 'female' | 'other') {
    switch (gender) {
      case 'male':
        cy.get(this.genderRadioMale).click();
        break;
      case 'female':
        cy.get(this.genderRadioFemale).click();
        break;
      case 'other':
        cy.get(this.genderRadioOther).click();
        break;
    }
    return this;
  }

  fillBirthday(date: string) {
    cy.get(this.birthdayInput).type(date);
    return this;
  }

  selectDepartment(department: string) {
    cy.get(this.departmentSelect).select(department);
    return this;
  }

  selectJobTitle(jobTitle: string) {
    cy.get(this.jobTitleSelect).select(jobTitle);
    return this;
  }

  selectProgrammingLanguages(languages: ('java' | 'javascript')[]) {
    languages.forEach(lang => {
      if (lang === 'java') {
        cy.get(this.programmingLanguageJava).check();
      } else if (lang === 'javascript') {
        cy.get(this.programmingLanguageJS).check();
      }
    });
    return this;
  }

  submit() {
    cy.get(this.submitButton).click();
    return this;
  }

  // Assertions
  verifySuccessfulRegistration() {
    cy.url().should('include', 'registration_confirmation');
    cy.get(this.successMessage).should('contain', "You've successfully completed registration!");
    return this;
  }

  verifyValidationError(errorMessage: string) {
    cy.get('small').contains(errorMessage).should('be.visible');
    return this;
  }

  verifyStillOnRegistrationPage() {
    cy.url().should('include', 'registration_form');
    return this;
  }
}

export default new RegistrationPage();
