describe('Reqres API Tests', () => {
  describe('Users Endpoints', () => {
    it('should list users with pagination', () => {
      cy.request('GET', 'https://reqres.in/api/users?page=2').then(response => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('page');
        expect(response.body).to.have.property('data');
      });
    });

    it('should get a single user that exists', () => {
      cy.request('GET', 'https://reqres.in/api/users/2').then(response => {
        expect(response.status).to.eq(200);
        expect(response.body.data).to.have.property('id', 2);
      });
    });

    it('should return 404 for a non-existent user', () => {
      cy.request({
        method: 'GET',
        url: 'https://reqres.in/api/users/23',
        failOnStatusCode: false
      }).then(response => {
        expect(response.status).to.eq(404);
      });
    });

    it('should create a new user', () => {
      const userData = {
        name: 'morpheus',
        job: 'leader'
      };

      cy.request('POST', 'https://reqres.in/api/users', userData).then(response => {
        expect(response.status).to.eq(201);
        expect(response.body).to.have.property('id');
        expect(response.body).to.have.property('createdAt');
      });
    });

    it('should update a user with PUT', () => {
      const userData = {
        name: 'morpheus',
        job: 'zion resident'
      };

      cy.request('PUT', 'https://reqres.in/api/users/2', userData).then(response => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('updatedAt');
      });
    });

    it('should update a user with PATCH', () => {
      const userData = {
        name: 'morpheus',
        job: 'zion resident'
      };

      cy.request('PATCH', 'https://reqres.in/api/users/2', userData).then(response => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('updatedAt');
      });
    });

    it('should delete a user', () => {
      cy.request('DELETE', 'https://reqres.in/api/users/2').then(response => {
        expect(response.status).to.eq(204);
      });
    });

    it('should list users with delay', () => {
      // Setting a longer timeout for this test since it has an intentional delay
      cy.request({
        method: 'GET',
        url: 'https://reqres.in/api/users?delay=3',
        timeout: 10000 // 10 seconds
      }).then(response => {
        expect(response.status).to.eq(200);
      });
    });
  });

  describe('Resources Endpoints', () => {
    it('should list all resources', () => {
      cy.request('GET', 'https://reqres.in/api/unknown').then(response => {
        expect(response.status).to.eq(200);
      });
    });

    it('should get a single resource that exists', () => {
      cy.request('GET', 'https://reqres.in/api/unknown/2').then(response => {
        expect(response.status).to.eq(200);
      });
    });

    it('should return 404 for a non-existent resource', () => {
      cy.request({
        method: 'GET',
        url: 'https://reqres.in/api/unknown/23',
        failOnStatusCode: false
      }).then(response => {
        expect(response.status).to.eq(404);
      });
    });
  });

  describe('Authentication Endpoints', () => {
    it('should register successfully', () => {
      const userData = {
        email: 'eve.holt@reqres.in',
        password: 'pistol'
      };

      cy.request('POST', 'https://reqres.in/api/register', userData).then(response => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('token');
        expect(response.body).to.have.property('id');
      });
    });

    it('should fail registration with incomplete data', () => {
      const userData = {
        email: 'sydney@fife'
      };

      cy.request({
        method: 'POST',
        url: 'https://reqres.in/api/register',
        body: userData,
        failOnStatusCode: false
      }).then(response => {
        expect(response.status).to.eq(400);
        expect(response.body).to.have.property('error');
      });
    });

    it('should login successfully', () => {
      const userData = {
        email: 'eve.holt@reqres.in',
        password: 'cityslicka'
      };

      cy.request('POST', 'https://reqres.in/api/login', userData).then(response => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('token');
      });
    });

    it('should fail login with incomplete data', () => {
      const userData = {
        email: 'peter@klaven'
      };

      cy.request({
        method: 'POST',
        url: 'https://reqres.in/api/login',
        body: userData,
        failOnStatusCode: false
      }).then(response => {
        expect(response.status).to.eq(400);
        expect(response.body).to.have.property('error');
      });
    });
  });
});
