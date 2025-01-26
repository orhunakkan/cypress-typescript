import payloads from "../payloads/samplePayload.json";

describe("Reqres API Tests", () => {
  const baseURL = "https://reqres.in/api";

  // Test to fetch a list of users from the API
  it("should fetch a list of users", () => {
    cy.request("GET", `${baseURL}/users?page=2`).then((response) => {
      expect(response.status).to.eq(200); // Verify the response status is 200
      expect(response.body).to.have.property("data"); // Verify the response body has a 'data' property
      expect(Array.isArray(response.body.data)).to.be.true; // Verify 'data' is an array
    });
  });

  // Test to fetch a single user from the API
  it("should fetch a single user", () => {
    cy.request("GET", `${baseURL}/users/2`).then((response) => {
      expect(response.status).to.eq(200); // Verify the response status is 200
      expect(response.body).to.have.property("data"); // Verify the response body has a 'data' property
      expect(response.body.data).to.have.property("id", 2); // Verify the 'data' property has an 'id' of 2
    });
  });

  // Test to verify the API returns a 404 status for a non-existent user
  it("should return 404 for a non-existent user", () => {
    cy.request({
      method: "GET",
      url: `${baseURL}/users/23`,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(404); // Verify the response status is 404
    });
  });

  // Test to create a new user via the API
  it("should create a new user", () => {
    cy.request("POST", `${baseURL}/users`, payloads.newUser).then(
      (response) => {
        expect(response.status).to.eq(201); // Verify the response status is 201
        expect(response.body).to.have.property("name", payloads.newUser.name); // Verify the response body has the correct 'name'
        expect(response.body).to.have.property("job", payloads.newUser.job); // Verify the response body has the correct 'job'
      }
    );
  });

  // Test to update an existing user via the API
  it("should update a user", () => {
    cy.request("PUT", `${baseURL}/users/2`, payloads.updatedUserPut).then(
      (response) => {
        expect(response.status).to.eq(200); // Verify the response status is 200
        expect(response.body).to.have.property(
          "name",
          payloads.updatedUserPut.name
        ); // Verify the response body has the correct 'name'
        expect(response.body).to.have.property(
          "job",
          payloads.updatedUserPut.job
        ); // Verify the response body has the correct 'job'
      }
    );
  });

  // Test to partially update an existing user via the API using PATCH
  it("should update a user with PATCH", () => {
    cy.request("PATCH", `${baseURL}/users/2`, payloads.updatedUserPatch).then(
      (response) => {
        expect(response.status).to.eq(200); // Verify the response status is 200
        expect(response.body).to.have.property(
          "name",
          payloads.updatedUserPatch.name
        ); // Verify the response body has the correct 'name'
        expect(response.body).to.have.property(
          "job",
          payloads.updatedUserPatch.job
        ); // Verify the response body has the correct 'job'
      }
    );
  });

  // Test to delete an existing user via the API
  it("should delete a user", () => {
    cy.request("DELETE", `${baseURL}/users/2`).then((response) => {
      expect(response.status).to.eq(204); // Verify the response status is 204
    });
  });

  // Test to register a new user successfully via the API
  it("should register a user successfully", () => {
    cy.request("POST", `${baseURL}/register`, payloads.newUserRegister).then(
      (response) => {
        expect(response.status).to.eq(200); // Verify the response status is 200
        expect(response.body).to.have.property("id"); // Verify the response body has an 'id' property
        expect(response.body).to.have.property("token"); // Verify the response body has a 'token' property
      }
    );
  });

  // Test to verify the API returns a 400 status for a failed registration
  it("should fail to register a user", () => {
    cy.request({
      method: "POST",
      url: `${baseURL}/register`,
      body: payloads.failedUserRegister,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(400); // Verify the response status is 400
      expect(response.body).to.have.property("error"); // Verify the response body has an 'error' property
    });
  });

  // Test to log in a user successfully via the API
  it("should login a user successfully", () => {
    cy.request("POST", `${baseURL}/login`, payloads.userLogin).then(
      (response) => {
        expect(response.status).to.eq(200); // Verify the response status is 200
        expect(response.body).to.have.property("token"); // Verify the response body has a 'token' property
      }
    );
  });

  // Test to verify the API returns a 400 status for a failed login
  it("should fail to login a user", () => {
    cy.request({
      method: "POST",
      url: `${baseURL}/login`,
      body: payloads.failedUserLogin,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(400); // Verify the response status is 400
      expect(response.body).to.have.property("error"); // Verify the response body has an 'error' property
    });
  });

  // Test to fetch a list of resources from the API
  it("should fetch a list of resources", () => {
    cy.request("GET", `${baseURL}/unknown`).then((response) => {
      expect(response.status).to.eq(200); // Verify the response status is 200
      expect(response.body).to.have.property("data"); // Verify the response body has a 'data' property
      expect(Array.isArray(response.body.data)).to.be.true; // Verify 'data' is an array
    });
  });

  // Test to fetch a single resource from the API
  it("should fetch a single resource", () => {
    cy.request("GET", `${baseURL}/unknown/2`).then((response) => {
      expect(response.status).to.eq(200); // Verify the response status is 200
      expect(response.body).to.have.property("data"); // Verify the response body has a 'data' property
      expect(response.body.data).to.have.property("id", 2); // Verify the 'data' property has an 'id' of 2
    });
  });

  // Test to verify the API returns a 404 status for a non-existent resource
  it("should return 404 for a non-existent resource", () => {
    cy.request({
      method: "GET",
      url: `${baseURL}/unknown/23`,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(404); // Verify the response status is 404
    });
  });

  // Test to fetch a delayed response from the API
  it("should fetch a delayed response", () => {
    cy.request("GET", `${baseURL}/users?delay=3`).then((response) => {
      expect(response.status).to.eq(200); // Verify the response status is 200
      expect(response.body).to.have.property("data"); // Verify the response body has a 'data' property
      expect(Array.isArray(response.body.data)).to.be.true; // Verify 'data' is an array
    });
  });
});
