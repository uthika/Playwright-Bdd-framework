Feature: Accessing DS Algo Portal Home Page

Background:
  Given the user is on the DS Algo Home page

Scenario: Verify that user is able to open the DS Algo portal
  Then the user should see the "Get Started" button
  And the user should see the text "Preparing for the Interviews You are at the right place"

Scenario: Verify the Home page for a user without signing in
  When the user clicks on "Get Started" button
  Then the user should be on the Home page
  And the top right page title should be "NumpyNinja" with dropdown options
  And the top left page should show "Register" and "Sign In"

Scenario: Verify clicking on NumpyNinja option
When the user clicks on "Get Started" button
And the user clicks on NumpyNinja link
Then the user should be redirected to the Base page

Scenario: Verify clicking on Register option
  When the user clicks on "Get Started"
  And the user clicks on Register link 
  Then the user should be redirected to the Register page

Scenario: Verify clicking on Sign In option
When the user clicks on "Get Started" button
And the user clicks on Sign In link
Then the user should be redirected to the Sign In page


Scenario: Verify that the user can view Data Structures dropdown options without signing in
  When the user clicks on the Data Structures dropdown
  Then the user should see the following options in the dropdown:

    | Data Structures |
    | Array |
    | Linked List |
    | Stack |
    | Queue |
    | Tree |
    | Graph |

Scenario Outline: Warning message shown when selecting a Data Structures option without signing in
  When the user selects "<option>" from the Data Structures dropdown
  Then the user should see a warning message "You are not logged in"

Examples:
  | option |
  | Data Structures |
  | Array |
  | Linked List |
  | Stack |
  | Queue |
  | Tree |
  | Graph |


Scenario Outline: Warning message shown when clicking Get Started without signing in
  When the user clicks the "Get Started" button for "<module>" on the home page
  Then the user should see a warning message "You are not logged in"

Examples:
  | module |
  | Data Structures-Introduction |
  | Array |
  | Linked List |
  | Stack |
  | Queue |
  | Tree |
  | Graph |


Scenario: User verifies logged in state on homepage
  Given The user is logged in and on Home page
  Then The user should see username displayed in header
  And The user should see Sign out link on homepage


Scenario Outline: User accesses dropdown menu items after login
  Given The user is logged in and on Home page
  When The user clicks on dropdown menu
  And The user selects "<MenuItem>" from dropdown
  Then The user should be on "<ModulePage>" module page

  Examples:
    | MenuItem    | ModulePage   |
    | Arrays      | Array        |
    | Linked List | Linked List  |
    | Stack       | Stack        |
    | Queue       | Queue        |
    | Tree        | Tree         |
    | Graph       | Graph        |


Scenario: User logs out and logs back in
  Given The user is logged in and on Home page
  When The user clicks Sign out link from header
  Then The user should see alert message "Logged out successfully"
  And The user should see Sign in link on homepage
  And The user should see Register link on homepage
  When The user logs in with credentials from environment
  Then The user should be logged in successfully
  And The user should see username displayed in header
  
