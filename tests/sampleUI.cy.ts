import {SamplePage} from "../pages/samplePage";

describe('Formy Complete Web Form', () => {

    const baseURL = 'https://formy-project.herokuapp.com/';
    let samplePage: SamplePage;

    before(() => {
        samplePage = new SamplePage();
    });

    it('Submit Webform and Validate', () => {
        cy.visit(`${baseURL}form`);
        cy.get(samplePage.firstNameInput).type('John');
        cy.get(samplePage.lastNameInput).type('Doe');
        cy.get(samplePage.jobTitleInput).type('QA Engineer');
        cy.get(samplePage.radioButton).click();
        cy.get(samplePage.checkbox).click();
        cy.get('select').select('1');
        cy.get(samplePage.datepicker).type('01/01/2022');
        cy.get(samplePage.submitButton).click();
        cy.get(samplePage.successMessage).should('contain', 'The form was successfully submitted!');
    });
});