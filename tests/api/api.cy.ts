import { ApiUtils } from '../../utilities/apiUtils';
import { ApiTestData } from '../../fixtures/apiTestData';

describe('Reqres API Tests', () => {
  it('List Users', () => {
    ApiUtils.getUsers(2).then(response => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('page');
      expect(response.body).to.have.property('data');
    });
  });

  it('Single User - Found', () => {
    ApiUtils.getUser(2).then(response => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('data');
    });
  });

  it('Single User - Not Found', () => {
    ApiUtils.getUser(23, false).then(response => {
      expect(response.status).to.eq(404);
    });
  });

  it('Create User', () => {
    ApiUtils.createUser(ApiTestData.newUser).then(response => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('id');
      expect(response.body).to.have.property('createdAt');
    });
  });

  it('Update User - PUT', () => {
    ApiUtils.updateUser(2, ApiTestData.updateUser, 'PUT').then(response => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('updatedAt');
    });
  });

  it('Update User - PATCH', () => {
    ApiUtils.updateUser(2, ApiTestData.updateUser, 'PATCH').then(response => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('updatedAt');
    });
  });

  it('Delete User', () => {
    ApiUtils.deleteUser(2).then(response => {
      expect(response.status).to.eq(204);
    });
  });

  it('List Resources', () => {
    ApiUtils.getResources().then(response => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('data');
    });
  });

  it('Single Resource - Found', () => {
    ApiUtils.getResource(2).then(response => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('data');
    });
  });

  it('Single Resource - Not Found', () => {
    ApiUtils.getResource(23, false).then(response => {
      expect(response.status).to.eq(404);
    });
  });

  it('Register - Successful', () => {
    ApiUtils.register(ApiTestData.validRegistration).then(response => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('token');
      expect(response.body).to.have.property('id');
    });
  });

  it('Register - Unsuccessful', () => {
    ApiUtils.register(ApiTestData.invalidRegistration, false).then(response => {
      expect(response.status).to.eq(400);
      expect(response.body).to.have.property('error');
    });
  });

  it('Login - Successful', () => {
    ApiUtils.login(ApiTestData.validLogin).then(response => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('token');
    });
  });

  it('Login - Unsuccessful', () => {
    ApiUtils.login(ApiTestData.invalidLogin, false).then(response => {
      expect(response.status).to.eq(400);
      expect(response.body).to.have.property('error');
    });
  });

  it('List Users with Delay', () => {
    ApiUtils.getUsersWithDelay(3).then(response => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('data');
    });
  });
});
