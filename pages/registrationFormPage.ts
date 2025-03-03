export const RegistrationFormPage = {
  firstNameInput: 'input[name="firstname"]',
  lastNameInput: 'input[name="lastname"]',
  usernameInput: 'input[name="username"]',
  emailInput: 'input[name="email"]',
  passwordInput: 'input[name="password"]',
  phoneInput: 'input[name="phone"]',
  birthdayInput: 'input[name="birthday"]',
  genderRadio: (gender: string) => `input[name="gender"][value="${gender}"]`,
  departmentSelect: 'select[name="department"]',
  jobTitleSelect: 'select[name="job_title"]',
  languageCheckbox: (id: number) => `#inlineCheckbox${id}`,
  signUpButton: '#wooden_spoon',
  successMessage: 'div.alert-success'
};
