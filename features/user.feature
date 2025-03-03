Feature: Reqres API User Management
  As a user of the Reqres API
  I want to manage user data
  So that I can perform CRUD operations on users

  Scenario: List Users
    When I send a request to list users on page 2
    Then the response status should be 200
    And the response should include data and page properties

  Scenario: Get User Details
    When I send a request to get details for user with ID 2
    Then the response status should be 200
    And the response should include user data

  Scenario: User Not Found
    When I send a request to get details for user with ID 23
    Then the response status should be 404

  Scenario: Create New User
    When I send a request to create a user with the following data:
      | name     | job    |
      | morpheus | leader |
    Then the response status should be 201
    And the response should include id and createdAt properties

  Scenario: Update User Using PUT
    When I send a PUT request to update user with ID 2 with the following data:
      | name     | job           |
      | morpheus | zion resident |
    Then the response status should be 200
    And the response should include updatedAt property

  Scenario: Update User Using PATCH
    When I send a PATCH request to update user with ID 2 with the following data:
      | name     | job           |
      | morpheus | zion resident |
    Then the response status should be 200
    And the response should include updatedAt property

  Scenario: Delete User
    When I send a request to delete user with ID 2
    Then the response status should be 204

  Scenario: Successful Registration
    When I send a registration request with the following data:
      | email             | password |
      | eve.holt@reqres.in | pistol   |
    Then the response status should be 200
    And the response should include token and id properties

  Scenario: Failed Registration
    When I send an invalid registration request with the following data:
      | email        |
      | sydney@fife  |
    Then the response status should be 400
    And the response should include error property

  Scenario: Successful Login
    When I send a login request with the following data:
      | email             | password   |
      | eve.holt@reqres.in | cityslicka |
    Then the response status should be 200
    And the response should include token property

  Scenario: Failed Login
    When I send an invalid login request with the following data:
      | email         |
      | peter@klaven  |
    Then the response status should be 400
    And the response should include error property