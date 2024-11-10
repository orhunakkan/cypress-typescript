describe('Formy Complete Web Form', () => {

    const baseURL = 'https://formy-project.herokuapp.com/';

    it('Submit Webform and Validate', () => {
        cy.visit(`${baseURL}form`);
        cy.get('#first-name').type('John');
        cy.get('#last-name').type('Doe');
        cy.get('#job-title').type('QA Engineer');
        cy.get('#radio-button-2').click();
        cy.get('#checkbox-1').click();
        cy.get('select').select('1');
        cy.get('#datepicker').type('01/01/2022');
        cy.get('.btn.btn-lg.btn-primary').click();
        cy.get('.alert.alert-success').should('contain', 'The form was successfully submitted!');
    });
});