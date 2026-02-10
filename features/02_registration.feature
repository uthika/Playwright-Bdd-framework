Feature: User Registration

  Background:
    Given The user is on the registration page

  @registration @phase2 @validregistration
  Scenario: User registers with valid credentials
    When The user enters registration details from "RegistrationData" and 0
    And The user clicks Register button
    Then The user should see registration success message
    And The user is navigated to homepage after registration

  # Browser validation (empty fields)
  @registration @phase2 @invalidinput @browservalidation
  Scenario Outline: User attempts registration with empty required fields
    When The user enters registration username "<username>"
    And The user enters registration password "<password>"
    And The user enters registration password confirmation "<passwordConfirm>"
    And The user clicks Register button
    Then The user sees registration error message "<expectedError>"

    Examples:
      | username      | password      | passwordConfirm | expectedError              |
      |               | ValidPass123  | ValidPass123    | Please fill out this field |
      | testuser123   |               |                 | Please fill out this field |
      | testuser123   | ValidPass123  |                 | Please fill out this field |

  # ❌ Server validation - BUGS EXPOSED! Tests will FAIL for bug rows
  @registration @phase2 @invalidinput @servererror
  Scenario Outline: User attempts registration with invalid data
    When The user enters registration username "<username>"
    And The user enters registration password "<password>"
    And The user enters registration password confirmation "<passwordConfirm>"
    And The user clicks Register button
    Then The user sees registration error message "<expectedError>"

    Examples:
      | username      | password         | passwordConfirm  | expectedError                          |
      | ab            | ValidPass123     | ValidPass123     | Username must be at least 3 characters |
      | testuser123   | Pass1            | Pass1            | password must contain at least 8       |
      | testuser123   | Password         | Password         | password must contain numbers          |
      | testuser123   | 12345678         | 12345678         | password can't be entirely numeric     |
      | playwrightjs  | ValidPass123     | ValidPass123     | already exists                         |
      | testuser123   | ValidPass123     | DifferentPass456 | password_mismatch                      |

  #Test BOTH navigation links
  @registration @phase2 @navigationtologin
  Scenario: User navigates to login via top Sign in link
    When The user clicks top Sign in link from registration page
    Then The user is taken to login page from registration

  @registration @phase2 @navigationtologin
  Scenario: User navigates to login via bottom Login link
    When The user clicks bottom Login link from registration page
    Then The user is taken to login page from registration


