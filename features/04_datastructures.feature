@datastructures @phase5
Feature: Data Structures Module

  Background:
    Given The user is logged in and on Home page

  @datastructures @phase5
  Scenario: User accesses Data Structures page from homepage
    When The user clicks on Data Structures Get Started button from homepage
    Then The user should see Data Structures introduction page

  @datastructures @phase5
  Scenario Outline: User accesses Data Structures topics
    When The user navigates to Data Structures page
    And The user clicks on Data Structures topic "<TopicName>"
    Then The user should see Data Structures topic page for "<TopicName>"

    Examples:
      | TopicName           |
      | Time Complexity     |
      
  @datastructures @phase5
  Scenario: User tests Try Here editor with valid code in Data Structures
    When The user navigates to Data Structures page
    And The user clicks on Data Structures topic "Time Complexity"
    And The user clicks Try Here button on topic page
    And The user enters test code from "EditorTest" and 0 in Data Structures editor
    And The user clicks Run button in Data Structures editor
    Then The user should see output from "EditorTest" and 0 in Data Structures editor

  @datastructures @phase5
  Scenario: User tests Try Here editor with invalid code in Data Structures
    When The user navigates to Data Structures page
    And The user clicks on Data Structures topic "Time Complexity"
    And The user clicks Try Here button on topic page
    And The user enters test code from "EditorTest" and 1 in Data Structures editor
    And The user clicks Run button in Data Structures editor
    Then The user should see error alert in Data Structures editor
    
  @datastructures @phase5 @bug @known-issue
  Scenario: BUG - Data Structures Practice Questions page is empty
    When The user navigates to Data Structures page
    And The user clicks on Data Structures topic "Time Complexity"
    And The user clicks Practice Questions link in Data Structures module
    Then The user should see Data Structures practice questions page
    And The page should have practice questions content
