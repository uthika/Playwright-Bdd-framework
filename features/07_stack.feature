@stack @phase5
Feature: Stack Module

  Background:
    Given The user is logged in and on Home page

  @stack @phase5
  Scenario: User accesses Stack page from homepage
    When The user clicks on Stack Get Started button from homepage
    Then The user should see Stack module page

  @stack @phase5
  Scenario Outline: User accesses Stack topics
    When The user navigates to Stack page
    And The user clicks on Stack topic "<TopicName>"
    Then The user should see Stack topic page for "<TopicName>"

    Examples:
      | TopicName              |
      | Operations in Stack    |
      | Implementation         |
      | Applications           |

  @stack @phase5
  Scenario: User tests Try Here editor with valid code in Stack
    When The user navigates to Stack page
    And The user clicks on Stack topic "Operations in Stack"
    And The user clicks Try Here button on topic page
    And The user enters test code from "EditorTest" and 0 in Stack editor
    And The user clicks Run button in Stack editor
    Then The user should see output from "EditorTest" and 0 in Stack editor

  @stack @phase5
  Scenario: User tests Try Here editor with invalid code in Stack
    When The user navigates to Stack page
    And The user clicks on Stack topic "Operations in Stack"
    And The user clicks Try Here button on topic page
    And The user enters test code from "EditorTest" and 1 in Stack editor
    And The user clicks Run button in Stack editor
    Then The user should see error alert in Stack editor


      @stack @phase5 @bug @known-issue
  Scenario: BUG - Stack Practice Questions page is empty
    When The user navigates to Stack page
    And The user clicks on Stack topic "Operations in Stack"
    And The user clicks Practice Questions link in Stack module
    Then The user should see Stack practice questions page
    And The page should have practice questions content
