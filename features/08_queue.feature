@queue @phase5
Feature: Queue Module

  Background:
    Given The user is logged in and on Home page

  @queue @phase5
  Scenario: User accesses Queue page from homepage
    When The user clicks on Queue Get Started button from homepage
    Then The user should see Queue module page

  @queue @phase5
  Scenario Outline: User accesses Queue topics
    When The user navigates to Queue page
    And The user clicks on Queue topic "<TopicName>"
    Then The user should see Queue topic page for "<TopicName>"

    Examples:
      | TopicName                        |
      | Implementation of Queue in Python |
      | Implementation using collections.deque |
      | Implementation using array        |
      | Queue Operations                  |

  @queue @phase5
  Scenario: User tests Try Here editor with valid code in Queue
    When The user navigates to Queue page
    And The user clicks on Queue topic "Queue Operations"
    And The user clicks Try Here button on topic page
    And The user enters test code from "EditorTest" and 0 in Queue editor
    And The user clicks Run button in Queue editor
    Then The user should see output from "EditorTest" and 0 in Queue editor

  @queue @phase5
  Scenario: User tests Try Here editor with invalid code in Queue
    When The user navigates to Queue page
    And The user clicks on Queue topic "Queue Operations"
    And The user clicks Try Here button on topic page
    And The user enters test code from "EditorTest" and 1 in Queue editor
    And The user clicks Run button in Queue editor
    Then The user should see error alert in Queue editor


      @queue @phase5 @bug @known-issue
  Scenario: BUG - Queue Practice Questions page is empty
    When The user navigates to Queue page
    And The user clicks on Queue topic "Implementation of Queue in Python"
    And The user clicks Practice Questions link in Queue module
    Then The user should see Queue practice questions page
    And The page should have practice questions content
