// tests/ui/registrationForm.cy.ts
describe('Registration Form Test', () => {
  it('should successfully complete registration', () => {
    // Navigate to the registration page
    cy.visit('https://practice.cydeo.com/registration_form');

    // Fill out text inputs
    cy.get('input[name="firstname"]').type('John');
    cy.get('input[name="lastname"]').type('Doe');
    cy.get('input[name="username"]').type('johndoe123');
    cy.get('input[name="email"]').type('john.doe@example.com');
    cy.get('input[name="password"]').type('Password!123');
    cy.get('input[name="phone"]').type('571-000-0000');
    cy.get('input[name="birthday"]').type('01/01/1990');

    // Select a gender radio button (choose 'male' in this case)
    cy.get('input[name="gender"][value="male"]').check();

    // Select an option from the Department / Office dropdown
    cy.get('select[name="department"]').select('DE'); // Department of Engineering

    // Select an option from the Job title dropdown (by text)
    cy.get('select[name="job_title"]').select('Developer');

    // Check the programming languages checkboxes
    cy.get('#inlineCheckbox1').check(); // C++
    cy.get('#inlineCheckbox2').check(); // Java
    cy.get('#inlineCheckbox3').check(); // JavaScript

    // Click the "Sign up" button (Cypress automatically waits for elements to be enabled)
    cy.get('#wooden_spoon').click();

    // Assert the success message appears
    cy.get('div.alert-success')
      .should('be.visible')
      .and('contain.text', "You've successfully completed registration!");
  });
});
