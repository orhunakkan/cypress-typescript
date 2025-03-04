describe('Registration Form Tests', () => {
  beforeEach(() => {
    // Visit the registration form page before each test
    cy.visit('https://practice.cydeo.com/registration_form');
  });

  it('should successfully submit the registration form with valid data', () => {
    // Fill in the form with valid data
    cy.get('input[name="firstname"]').type('John');
    cy.get('input[name="lastname"]').type('Doe');
    cy.get('input[name="username"]').type('johndoe123');
    cy.get('input[name="email"]').type('john.doe@example.com');
    cy.get('input[name="password"]').type('Password123');
    cy.get('input[name="phone"]').type('571-123-4567');

    // Select gender
    cy.get('input[name="gender"][value="male"]').click();

    // Enter date of birth
    cy.get('input[name="birthday"]').type('01/15/1990');

    // Select department using select dropdown
    cy.get('select[name="department"]').select('DE');

    // Select job title
    cy.get('select[name="job_title"]').select('SDET');

    // Select programming languages
    cy.get('#inlineCheckbox2').check(); // Java
    cy.get('#inlineCheckbox3').check(); // JavaScript

    // Submit the form
    cy.get('#wooden_spoon').click();

    // Verify the landed page contains success message
    // Note: Using URL change verification
    cy.url().should('include', 'registration_confirmation');

    // Verify success message
    cy.get('.alert-success').should('contain', "You've successfully completed registration!");
  });

  it('should display validation errors for invalid form submission', () => {
    // Fill form with invalid data
    cy.get('input[name="firstname"]').type('Jane');
    cy.get('input[name="lastname"]').type('Smith');
    cy.get('input[name="username"]').type('jane'); // Too short username
    cy.get('input[name="email"]').type('invalid-email'); // Invalid email
    cy.get('input[name="password"]').type('pass'); // Too short password
    cy.get('input[name="phone"]').type('123-456'); // Invalid phone format

    // Verify validation errors are displayed
    cy.get('small').contains('username must be more than 6').should('be.visible');
    cy.get('small').contains('Email format is not correct').should('be.visible');
    cy.get('small').contains('password must have at least 8 characters').should('be.visible');
    cy.get('small').contains('Phone format is not correct').should('be.visible');

    // Verify we are still on the registration page (form not submitted)
    cy.url().should('include', 'registration_form');
  });
});
