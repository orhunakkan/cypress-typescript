import {SamplePage} from "../pages/samplePage";

const baseURL = 'https://formy-project.herokuapp.com/';
let samplePage: SamplePage;

describe('Formy Complete Web Form', () => {

    it('Submit Webform and Validate', () => {
        samplePage = new SamplePage();
        cy.visit(`${baseURL}form`);
        cy.get(samplePage.firstNameInput).type('John');
        cy.get(samplePage.lastNameInput).type('Doe');
        cy.get(samplePage.jobTitleInput).type('QA Engineer');
        cy.get(samplePage.radioButton).click();
        cy.get(samplePage.checkbox).click();
        cy.get(samplePage.datepicker).type('01/01/2022');
        cy.get(samplePage.submitButton).click();
        cy.get(samplePage.successMessage).should('contain', 'The form was successfully submitted!');
    });
});