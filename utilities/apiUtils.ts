import { ApiEndpoints } from '../pages/apiEndpoints';

export const ApiUtils = {
  getUsers(page?: number): Cypress.Chainable<Cypress.Response<any>> {
    const queryParams = page ? `?page=${page}` : '';
    return cy.request(
      `${ApiEndpoints.baseUrl}${ApiEndpoints.users}${queryParams}`
    );
  },

  getUser(
    id: number,
    failOnStatusCode: boolean = true
  ): Cypress.Chainable<Cypress.Response<any>> {
    return cy.request({
      url: `${ApiEndpoints.baseUrl}${ApiEndpoints.singleUser(id)}`,
      failOnStatusCode
    });
  },

  createUser(userData: object): Cypress.Chainable<Cypress.Response<any>> {
    return cy.request(
      'POST',
      `${ApiEndpoints.baseUrl}${ApiEndpoints.users}`,
      userData
    );
  },

  updateUser(
    id: number,
    userData: object,
    method: 'PUT' | 'PATCH' = 'PUT'
  ): Cypress.Chainable<Cypress.Response<any>> {
    return cy.request(
      method,
      `${ApiEndpoints.baseUrl}${ApiEndpoints.singleUser(id)}`,
      userData
    );
  },

  deleteUser(id: number): Cypress.Chainable<Cypress.Response<any>> {
    return cy.request(
      'DELETE',
      `${ApiEndpoints.baseUrl}${ApiEndpoints.singleUser(id)}`
    );
  },

  getResources(): Cypress.Chainable<Cypress.Response<any>> {
    return cy.request(`${ApiEndpoints.baseUrl}${ApiEndpoints.resources}`);
  },

  getResource(
    id: number,
    failOnStatusCode: boolean = true
  ): Cypress.Chainable<Cypress.Response<any>> {
    return cy.request({
      url: `${ApiEndpoints.baseUrl}${ApiEndpoints.singleResource(id)}`,
      failOnStatusCode
    });
  },

  register(
    userData: object,
    failOnStatusCode: boolean = true
  ): Cypress.Chainable<Cypress.Response<any>> {
    return cy.request({
      method: 'POST',
      url: `${ApiEndpoints.baseUrl}${ApiEndpoints.register}`,
      body: userData,
      failOnStatusCode
    });
  },

  login(
    userData: object,
    failOnStatusCode: boolean = true
  ): Cypress.Chainable<Cypress.Response<any>> {
    return cy.request({
      method: 'POST',
      url: `${ApiEndpoints.baseUrl}${ApiEndpoints.login}`,
      body: userData,
      failOnStatusCode
    });
  },

  getUsersWithDelay(delay: number): Cypress.Chainable<Cypress.Response<any>> {
    return cy.request(
      `${ApiEndpoints.baseUrl}${ApiEndpoints.users}?delay=${delay}`
    );
  }
};
