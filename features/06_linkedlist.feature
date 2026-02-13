@linkedlist @phase5
Feature: Linked List Module

  Background:
    Given The user is logged in and on Home page

  @linkedlist @phase5
  Scenario: User accesses Linked List page from homepage
    When The user clicks on Linked List Get Started button from homepage
    Then The user should see Linked List module page

  @linkedlist @phase5
  Scenario Outline: User accesses Linked List topics
    When The user navigates to Linked List page
    And The user clicks on Linked List topic "<TopicName>"
    Then The user should see Linked List topic page for "<TopicName>"

    Examples:
      | TopicName            |
      | Introduction         |
      | Creating Linked List |
      | Types of Linked List |
      | Implement Linked List in Python |
      | Traversal            |
      | Insertion            |
      | Deletion             |

  @linkedlist @phase5
  Scenario: User tests Try Here editor with valid code in Linked List
    When The user navigates to Linked List page
    And The user clicks on Linked List topic "Introduction"
    And The user clicks Try Here button on topic page
    And The user enters test code from "EditorTest" and 0 in Linked List editor
    And The user clicks Run button in Linked List editor
    Then The user should see output from "EditorTest" and 0 in Linked List editor

  @linkedlist @phase5
  Scenario: User tests Try Here editor with invalid code in Linked List
    When The user navigates to Linked List page
    And The user clicks on Linked List topic "Introduction"
    And The user clicks Try Here button on topic page
    And The user enters test code from "EditorTest" and 1 in Linked List editor
    And The user clicks Run button in Linked List editor
    Then The user should see error alert in Linked List editor


    @linkedlist @phase5 @bug @known-issue
  Scenario: BUG - Linked List Practice Questions page is empty
    When The user navigates to Linked List page
    And The user clicks on Linked List topic "Introduction"
    And The user clicks Practice Questions link in Linked List module
    Then The user should see Linked List practice questions page
    And The page should have practice questions content  
