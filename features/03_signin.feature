@signin @phase3
Feature: User Sign In

  Background:
    Given The user is on the sign in page

  @validsignin
  Scenario: User signs in with valid credentials
    When The user enters signin credentials from "SignInData" and 0
    And The user clicks Login button
    Then The user lands on homepage after signin
    And The user should see username displayed in header

  @invalidsignin
  Scenario Outline: User attempts sign in with invalid credentials
    When The user enters signin username "<Username>"
    And The user enters signin password "<Password>"
    And The user clicks Login button
    Then The user sees signin error message "<ErrorMessage>"

    Examples:
      | Username     | Password  | ErrorMessage                  |
      |              | Test@1234 | Please fill out this field    |
      | testuser123  |           | Please fill out this field    |
      | playwrightjs | Test@1234 | Invalid Username and Password |
      | cena         | wrongpass | Invalid Username and Password |

  @navigationtoregister
  Scenario: User navigates to registration page from sign in page
    When The user clicks Register link from signin page
    Then The user is taken to registration page from signin

  @security
  Scenario Outline: Unauthenticated users cannot access protected pages
    When the user navigates directly to "<protected_url>"
    Then the unauthenticated user should be redirected to home page

    Examples:
      | protected_url                                  |
      | /array/                                        |
      | /data-structures-introduction/time-complexity/ |
      | /array/arrays-in-python/                       |
      | /linked-list/types-of-linked-list/             |
      | /stack/stack-applications/                     |
      | /queue/QueueOp/queue                           |
      | /tree/types-of-trees/                          |
      | /graph/graph-representations/                  |
