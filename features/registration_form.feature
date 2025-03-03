Feature: User Registration Form
  As a website visitor
  I want to register on the website
  So that I can create an account

  Background:
    Given I navigate to the registration page

  Scenario: Successful Registration
    When I fill the registration form with valid data:
      | firstName | lastName | username    | email              | password     | phone        | birthday    | gender | department | jobTitle   |
      | John      | Doe      | johndoe123  | johndoe@example.com| Password!123 | 571-000-0000 | 01/01/1990  | male   | DE         | Developer  |
    And I select the following programming languages:
      | C++ | Java | JavaScript |
    And I submit the registration form
    Then I should see a successful registration message