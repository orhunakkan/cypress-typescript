import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { ApiUtils } from '../../utilities/apiUtils';
import { ApiTestData } from '../../fixtures/apiTestData';

// Shared variable to store responses
let apiResponse: Cypress.Response<any>;

When('I send a request to list users on page {int}', (page: number) => {
  ApiUtils.getUsers(page).then(response => {
    apiResponse = response;
  });
});

When('I send a request to get details for user with ID {int}', (id: number) => {
  // Set failOnStatusCode to false for IDs that we expect to return 404
  const failOnStatusCode = id !== 23; // Only set to true for IDs we expect to exist

  ApiUtils.getUser(id, failOnStatusCode).then(response => {
    apiResponse = response;
  });
});

When(
  'I send a request to create a user with the following data:',
  (dataTable: any) => {
    const userData = dataTable.hashes()[0];
    ApiUtils.createUser(userData).then(response => {
      apiResponse = response;
    });
  }
);

When(
  'I send a PUT request to update user with ID {int} with the following data:',
  (id: number, dataTable: any) => {
    const userData = dataTable.hashes()[0];
    ApiUtils.updateUser(id, userData, 'PUT').then(response => {
      apiResponse = response;
    });
  }
);

When(
  'I send a PATCH request to update user with ID {int} with the following data:',
  (id: number, dataTable: any) => {
    const userData = dataTable.hashes()[0];
    ApiUtils.updateUser(id, userData, 'PATCH').then(response => {
      apiResponse = response;
    });
  }
);

When('I send a request to delete user with ID {int}', (id: number) => {
  ApiUtils.deleteUser(id).then(response => {
    apiResponse = response;
  });
});

When(
  'I send a registration request with the following data:',
  (dataTable: any) => {
    const userData = dataTable.hashes()[0];
    ApiUtils.register(userData).then(response => {
      apiResponse = response;
    });
  }
);

When(
  'I send an invalid registration request with the following data:',
  (dataTable: any) => {
    const userData = dataTable.hashes()[0];
    ApiUtils.register(userData, false).then(response => {
      apiResponse = response;
    });
  }
);

When('I send a login request with the following data:', (dataTable: any) => {
  const userData = dataTable.hashes()[0];
  ApiUtils.login(userData).then(response => {
    apiResponse = response;
  });
});

When(
  'I send an invalid login request with the following data:',
  (dataTable: any) => {
    const userData = dataTable.hashes()[0];
    ApiUtils.login(userData, false).then(response => {
      apiResponse = response;
    });
  }
);

Then('the response status should be {int}', (status: number) => {
  expect(apiResponse.status).to.eq(status);
});

Then('the response should include data and page properties', () => {
  expect(apiResponse.body).to.have.property('page');
  expect(apiResponse.body).to.have.property('data');
});

Then('the response should include user data', () => {
  expect(apiResponse.body).to.have.property('data');
});

Then('the response should include id and createdAt properties', () => {
  expect(apiResponse.body).to.have.property('id');
  expect(apiResponse.body).to.have.property('createdAt');
});

Then('the response should include updatedAt property', () => {
  expect(apiResponse.body).to.have.property('updatedAt');
});

Then('the response should include token and id properties', () => {
  expect(apiResponse.body).to.have.property('token');
  expect(apiResponse.body).to.have.property('id');
});

Then('the response should include token property', () => {
  expect(apiResponse.body).to.have.property('token');
});

Then('the response should include error property', () => {
  expect(apiResponse.body).to.have.property('error');
});
