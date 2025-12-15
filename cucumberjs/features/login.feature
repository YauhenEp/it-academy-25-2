Feature: The Onliner login

  Scenario Outline: As a user <username>, I get message <message>

    Given I am on the main page
    When I go to the login page
    And I login with <username> and <password>
    Then I should see a flash message saying <message>

    Examples:
      | username | password             | message                        |
      | tomsmith | SuperSecretPassword! | Неверный логин или пароль |
