@graph @phase5
Feature: Graph Module

  Background:
    Given The user is logged in and on Home page

  @graph @phase5
  Scenario: User accesses Graph page from homepage
    When The user clicks on Graph Get Started button from homepage
    Then The user should see Graph module page

  @graph @phase5
  Scenario Outline: User accesses Graph topics
    When The user navigates to Graph page
    And The user clicks on Graph topic "<TopicName>"
    Then The user should see Graph topic page for "<TopicName>"

    Examples:
      | TopicName            |
      | Graph                |
      | Graph Representations |

  @graph @phase5
  Scenario: User tests Try Here editor with valid code in Graph
    When The user navigates to Graph page
    And The user clicks on Graph topic "Graph"
    And The user clicks Try Here button on topic page
    And The user enters test code from "EditorTest" and 0 in Graph editor
    And The user clicks Run button in Graph editor
    Then The user should see output from "EditorTest" and 0 in Graph editor

  @graph @phase5
  Scenario: User tests Try Here editor with invalid code in Graph
    When The user navigates to Graph page
    And The user clicks on Graph topic "Graph"
    And The user clicks Try Here button on topic page
    And The user enters test code from "EditorTest" and 1 in Graph editor
    And The user clicks Run button in Graph editor
    Then The user should see error alert in Graph editor


      @graph @phase5 @bug @known-issue
  Scenario: BUG - Graph Practice Questions page is empty
    When The user navigates to Graph page
    And The user clicks on Graph topic "Graph"
    And The user clicks Practice Questions link in Graph module
    Then The user should see Graph practice questions page
    And The page should have practice questions content
