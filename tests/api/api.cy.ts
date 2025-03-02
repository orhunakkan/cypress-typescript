describe('Reqres API Tests', () => {
  const baseUrl = 'https://reqres.in/api';

  it('List Users', () => {
    cy.request(`${baseUrl}/users?page=2`).then(response => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('page');
      expect(response.body).to.have.property('data');
    });
  });

  it('Single User - Found', () => {
    cy.request(`${baseUrl}/users/2`).then(response => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('data');
    });
  });

  it('Single User - Not Found', () => {
    cy.request({
      url: `${baseUrl}/users/23`,
      failOnStatusCode: false
    }).then(response => {
      expect(response.status).to.eq(404);
    });
  });

  it('Create User', () => {
    cy.request({
      method: 'POST',
      url: `${baseUrl}/users`,
      body: {
        name: 'morpheus',
        job: 'leader'
      }
    }).then(response => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('id');
      expect(response.body).to.have.property('createdAt');
    });
  });

  it('Update User - PUT', () => {
    cy.request({
      method: 'PUT',
      url: `${baseUrl}/users/2`,
      body: {
        name: 'morpheus',
        job: 'zion resident'
      }
    }).then(response => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('updatedAt');
    });
  });

  it('Update User - PATCH', () => {
    cy.request({
      method: 'PATCH',
      url: `${baseUrl}/users/2`,
      body: {
        name: 'morpheus',
        job: 'zion resident'
      }
    }).then(response => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('updatedAt');
    });
  });

  it('Delete User', () => {
    cy.request({
      method: 'DELETE',
      url: `${baseUrl}/users/2`
    }).then(response => {
      expect(response.status).to.eq(204);
    });
  });

  it('List Resources', () => {
    cy.request(`${baseUrl}/unknown`).then(response => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('data');
    });
  });

  it('Single Resource - Found', () => {
    cy.request(`${baseUrl}/unknown/2`).then(response => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('data');
    });
  });

  it('Single Resource - Not Found', () => {
    cy.request({
      url: `${baseUrl}/unknown/23`,
      failOnStatusCode: false
    }).then(response => {
      expect(response.status).to.eq(404);
    });
  });

  it('Register - Successful', () => {
    cy.request({
      method: 'POST',
      url: `${baseUrl}/register`,
      body: {
        email: 'eve.holt@reqres.in',
        password: 'pistol'
      }
    }).then(response => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('token');
      expect(response.body).to.have.property('id');
    });
  });

  it('Register - Unsuccessful', () => {
    cy.request({
      method: 'POST',
      url: `${baseUrl}/register`,
      body: {
        email: 'sydney@fife'
      },
      failOnStatusCode: false
    }).then(response => {
      expect(response.status).to.eq(400);
      expect(response.body).to.have.property('error');
    });
  });

  it('Login - Successful', () => {
    cy.request({
      method: 'POST',
      url: `${baseUrl}/login`,
      body: {
        email: 'eve.holt@reqres.in',
        password: 'cityslicka'
      }
    }).then(response => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('token');
    });
  });

  it('Login - Unsuccessful', () => {
    cy.request({
      method: 'POST',
      url: `${baseUrl}/login`,
      body: {
        email: 'peter@klaven'
      },
      failOnStatusCode: false
    }).then(response => {
      expect(response.status).to.eq(400);
      expect(response.body).to.have.property('error');
    });
  });

  it('List Users with Delay', () => {
    cy.request({
      url: `${baseUrl}/users?delay=3`,
      timeout: 10000 // Increase timeout for the delayed response
    }).then(response => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('data');
    });
  });
});
