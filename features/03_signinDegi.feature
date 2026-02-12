@signin @phase3
Feature: User Login
  As a registered user
  I want to log in to DS Portal
  So that I can access the application securely

  Background:
    Given the user is on the Sign In page

  @exceldata
  Scenario: User signs in with valid credentials
    When the user enters signin credentials from "SignInData" and 0
    And the user clicks Login button
    Then the user lands on homepage after signin
    And the user should see username displayed in header

  @positive @whitespaceuser
  Scenario Outline: Login succeeds with leading/trailing spaces in username (trimmed)
    When the user enters username "<username>" and password "Numpyds@236"
    And clicks on the Login button
    Then the user should be redirected to the home page
    # Note: Username field trims leading/trailing whitespace

    Examples:
      | username                       |
      | <space><space>Degima236        |
      | Degima236<space><space>        |
      | <space>Degima236<space><space> |

  @negative @whitespacepass
  Scenario Outline: Login fails with leading/trailing spaces in password (trimmed)
    When the user enters username "Degima236" and password "<password>"
    And clicks on the Login button
    Then an authentication error message "<message>" should be displayed

    Examples:
      | password                  | message                       |
      | <space>Numpyds@236        | Invalid Username and Password |
      | Numpyds@236<space>        | Invalid Username and Password |
      | <space>Numpyds@236<space> | Invalid Username and Password |

  @invalidsignin @casesensitivity
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

  @emptydata
  Scenario Outline: Login field validation errors
    When the user submits the login form with username "<username>" and password "<password>"
    Then the validation message "<message>" should be displayed

    Examples:
      | username  | password    | message                     |
      |           |             | Please fill out this field. |
      |           | Numpyds@236 | Please fill out this field. |
      | Degima236 |             | Please fill out this field. |

  @injection @critical
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

  @security
  Scenario Outline: Unauthenticated users cannot access protected pages
    When the user navigates directly to "<protected_url>"
    Then the unauthenticated user should be redirected to home page

    Examples:
      | protected_url                                  |
      | /data-structures-introduction/time-complexity/ |
      | /array/arrays-in-python/                       |
      | /linked-list/types-of-linked-list/             |
      | /stack/stack-applications/                     |
      | /queue/QueueOp/queue                           |
      | /tree/types-of-trees/                          |
      | /graph/graph-representations/                  |
