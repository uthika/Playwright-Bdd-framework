@homepage @regression
Feature: Homepage Navigation and Functionality

  @noauth @phase1
  Scenario: User launches the DS Algo Portal application
    Given The user opens the DS Algo Portal homepage
    Then The user should see the application homepage
    And The user should see Get Started button on homepage

  # ✅ OPTION 2: Verify main Get Started navigates to /home
  @noauth @phase1
  Scenario: User clicks main Get Started button
    Given The user opens the DS Algo Portal homepage
    When The user clicks Get Started button on homepage
    Then The user should be redirected to home page

  # ✅ OPTION 3: Test all module Get Started buttons show alert
  @noauth @phase1
  Scenario Outline: User tries to access module without login
    Given The user is on the home page without login
    When The user clicks on "<Module>" Get Started button
    Then The user should see alert message "You are not logged in"

    Examples:
      | Module                       |
      | Data Structures-Introduction |
      | Array                        |
      | Linked List                  |
      | Stack                        |
      | Queue                        |
      | Tree                         |
      | Graph                        |

  @noauth @phase1
  Scenario Outline: User tries to access dropdown menu items without login
    Given The user is on the home page without login
    When The user clicks on dropdown menu
    And The user selects "<MenuItem>" from dropdown
    Then The user should see alert message "You are not logged in"

    Examples:
      | MenuItem                     |
      | Arrays                       |
      | Linked List                  |
      | Stack                        |
      | Queue                        |
      | Tree                         |
      | Graph                        |

  @noauth @phase1
  Scenario: User verifies Sign in link is present on homepage
    Given The user is on the home page without login
    Then The user should see Sign in link on homepage

  @noauth @phase1
  Scenario: User verifies Register link is present on homepage
    Given The user is on the home page without login
    Then The user should see Register link on homepage

  @noauth @phase1
  Scenario: User verifies NumpyNinja link on homepage
    Given The user is on the home page without login
    Then The user should see NumpyNinja link in header

  @withauth @phase4
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

@withauth @phase4
Scenario Outline: User accesses module pages via Get Started buttons after login
  Given The user is logged in and on Home page
  When The user clicks on "<Module>" Get Started button
  Then The user should be on "<ModulePage>" page

  Examples:
    | Module                       | ModulePage                   |
    | Data Structures-Introduction | data-structures-introduction |
    | Array                        | array                        |
    | Stack                        | stack                        |

@withauth @phase4
Scenario: User verifies logged in state on homepage
  Given The user is logged in and on Home page
  Then The user should see username displayed in header
  And The user should see Sign out link on homepage

@withauth @phase4 @crossmodule
Scenario Outline: User navigates between modules via dropdown
  Given The user is logged in and on "<StartModule>" page
  When The user clicks on dropdown menu
  And The user selects "<TargetModule>" from dropdown
  Then The user should be on "<TargetModule>" module page

  Examples:
    | StartModule | TargetModule |
    | Array       | Stack        |
    | Stack       | Tree         |
    | Tree        | Graph        |

@withauth @phase4 @crossmodule
Scenario: User navigates to landing page via NumpyNinja logo
  Given The user is logged in and on "Array" page
  When The user clicks NumpyNinja logo
  Then The user should be on the landing page



@withauth @phase4 @logout
Scenario: User logs out and logs back in
  Given The user is logged in and on Home page
  When The user clicks Sign out link from header
  Then The user should see alert message "Logged out successfully"
  And The user should see Sign in link on homepage
  And The user should see Register link on homepage
  When The user logs in with credentials from environment
  Then The user should be logged in successfully
  And The user should see username displayed in header
