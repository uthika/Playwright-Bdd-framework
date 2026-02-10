@login
Feature: User Login
  As a registered user
  I want to log in to DS Portal
  So that I can access the application securely

  Background:
    Given the user is on the Sign In page
# =================== VALID LOGIN ===================

  Scenario: Login with valid credentials
    When the user logs in with valid credentials
    Then the user should be redirected to the home page
# =================== USERNAME WHITESPACE (TRIMMED) ===================

  @positive @whitespace
  Scenario Outline: Login succeeds with leading/trailing spaces in username (trimmed)
    When the user enters username "<username>" and password "Numpyds@236"
    And clicks on the Login button
    Then the user should be redirected to the home page
    # Note: Username field trims leading/trailing whitespace

    Examples:
      | username      |
      | ___Degima236  |
      | Degima236_    |
      | __Degima236__ |
          # =================== PASSWORD WHITESPACE (TRIMMED) ===================

  @negative @whitespace
  Scenario Outline: Login fails with leading/trailing spaces in password (trimmed)
    When the user enters username "Degima236" and password "<password>"
    And clicks on the Login button
    Then an authentication error message "<message>" should be displayed

    Examples:
      | password        | message                       |
      | _Numpyds@236    | Invalid Username and Password |
      | Numpyds@236_    | Invalid Username and Password |
      | __Numpyds@236__ | Invalid Username and Password |
    #=======================Invalid credentials Plus CaseSensitivity==============

  Scenario Outline: Login fails with invalid credentials
    When the user enters username "<username>" and password "<password>"
    And clicks on the Login button
    Then an authentication error message "<message>" should be displayed

    Examples:
      | username  | password    | message                       |
      | Degima    | Numpyds@236 | Invalid Username and Password |
      | Degima236 | jhghjguy    | Invalid Username and Password |
      | Degima234 | Degi234     | Invalid Username and Password |
      | Degima236 | numpyds@236 | Invalid Username and Password |
      | degima234 | Numpyds@236 | Invalid Username and Password |
#==============Empty===============================

  Scenario Outline: Login field validation errors
    When the user submits the login form with username "<username>" and password "<password>"
    Then the validation message "<message>" should be displayed

    Examples:
      | username  | password    | message                     |
      |           |             | Please fill out this field. |
      |           | Numpyds@236 | Please fill out this field. |
      | Degima236 |             | Please fill out this field. |
 # =================== SQL INJECTION ===================

  @security @injection @critical
  Scenario Outline: SQL Injection protection in username
    When the user enters username "<payload>" and password "test123"
    And clicks on the Login button
    Then the login should fail securely
    And no database error details should be exposed

    Examples:
      | payload          |
      | admin' --        |
      | ' OR '1'='1      |
      | ' OR 1=1 --      |
      | '; DROP TABLE -- |
