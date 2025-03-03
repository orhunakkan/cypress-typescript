// utilities/registrationFormUtils.ts
import { RegistrationFormPage } from '../pages/registrationFormPage';
import { UserData } from '../fixtures/uiTestData';

export const RegistrationFormUtils = {
  fillForm(userData: UserData): void {
    cy.get(RegistrationFormPage.firstNameInput).clear().type(userData.firstName);
    cy.get(RegistrationFormPage.lastNameInput).clear().type(userData.lastName);
    cy.get(RegistrationFormPage.usernameInput).clear().type(userData.username);
    cy.get(RegistrationFormPage.emailInput).clear().type(userData.email);
    cy.get(RegistrationFormPage.passwordInput).clear().type(userData.password);
    cy.get(RegistrationFormPage.phoneInput).clear().type(userData.phone);
    cy.get(RegistrationFormPage.birthdayInput).clear().type(userData.birthday);
    
    // Select radio button
    cy.get(RegistrationFormPage.genderRadio(userData.gender)).check();
    
    // Select dropdowns
    cy.get(RegistrationFormPage.departmentSelect).select(userData.department);
    cy.get(RegistrationFormPage.jobTitleSelect).select(userData.jobTitle);
    
    // Check programming languages
    userData.programmingLanguages.forEach(id => {
      cy.get(RegistrationFormPage.languageCheckbox(id)).check();
    });
  },

  submitForm(): void {
    cy.get(RegistrationFormPage.signUpButton).click();
  },

  verifySuccess(): void {
    cy.get(RegistrationFormPage.successMessage).should('be.visible');
    cy.get(RegistrationFormPage.successMessage)
      .should('contain.text', "You've successfully completed registration!");
  },

  // For convenience, combines all steps
  register(userData: UserData): void {
    this.fillForm(userData);
    this.submitForm();
    this.verifySuccess();
  }
};