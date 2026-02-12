@array @phase5
Feature: Array Module


  Background:
    Given The user is logged in and on Home page


  @array @phase5
  Scenario: User accesses Array page from homepage
    When The user clicks on Array Get Started button from homepage
    Then The user should see Array module page


  @array @phase5
  Scenario Outline: User accesses Array topics
    When The user navigates to Array page
    And The user clicks on Array topic "<TopicName>"
    Then The user should see Array topic page for "<TopicName>"


    Examples:
      | TopicName                 |
      | Arrays in Python          |
      | Arrays Using List         |
      | Basic Operations in Lists |
      | Applications of Array     |


  @array @phase5
  Scenario: User tests Try Here editor with valid code in Array
    When The user navigates to Array page
    And The user clicks on Array topic "Arrays in Python"
    And The user clicks Try Here button on topic page
    And The user enters test code from "EditorTest" and 0 in Array editor
    And The user clicks Run button in Array editor
    Then The user should see output from "EditorTest" and 0 in Array editor


  @array @phase5
  Scenario: User tests Try Here editor with invalid code in Array
    When The user navigates to Array page
    And The user clicks on Array topic "Arrays in Python"
    And The user clicks Try Here button on topic page
    And The user enters test code from "EditorTest" and 1 in Array editor
    And The user clicks Run button in Array editor
    Then The user should see error alert in Array editor


  @array @phase5
  Scenario: User accesses Array Practice Questions
    When The user navigates to Array page
    And The user clicks on Array topic "Arrays in Python"
    And The user clicks Practice Questions link in Array module
    Then The user should see Array practice questions page


  @array @phase5
  Scenario Outline: User solves Array practice questions with Run and Submit
    When The user navigates to Array page
    And The user clicks on Array topic "Arrays in Python"
    And The user clicks Practice Questions link in Array module
    And The user clicks on practice question "<QuestionName>"
    And The user enters solution from "ArrayPracticeSolutions" and <RowNumber>
    And The user clicks Run button in practice question editor
    Then The user should see output from "ArrayPracticeSolutions" and <RowNumber> in practice question editor
    When The user clicks Submit button for solution
    Then The user should see submission success for practice question


    Examples:
      | QuestionName                            | RowNumber |
      | Search the array                        | 0         |
      | Max Consecutive Ones                    | 1         |
      | Find Numbers with Even Number of Digits | 2         |
      | Squares of a Sorted Array               | 3         |


  @array @phase5
  Scenario: User submits incorrect code for Array practice question
    When The user navigates to Array page
    And The user clicks on Array topic "Arrays in Python"
    And The user clicks Practice Questions link in Array module
    And The user clicks on practice question "Search the array"
    And The user enters test code from "EditorTest" and 0 in practice question editor
    When The user clicks Submit button for solution
    Then The user should see submission error message
