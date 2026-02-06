@tree @phase5
Feature: Tree Module

  Background:
    Given The user is logged in and on Home page

  @tree @phase5
  Scenario: User accesses Tree page from homepage
    When The user clicks on Tree Get Started button from homepage
    Then The user should see Tree module page

  @tree @phase5
  Scenario Outline: User accesses Tree topics
    When The user navigates to Tree page
    And The user clicks on Tree topic "<TopicName>"
    Then The user should see Tree topic page for "<TopicName>"

    Examples:
      | TopicName               |
      | Overview of Trees       |
      | Terminologies           |
      | Types of Trees          |
      | Tree Traversals         |
      | Traversals-Illustration |
      | Binary Trees            |
      | Types of Binary Trees   |
      | Implementation in Python |
      | Binary Tree Traversals  |
      | Implementation of Binary Trees |
      | Applications of Binary trees   |
      | Binary Search Trees     |
      | Implementation Of BST   |

  @tree @phase5
  Scenario: User tests Try Here editor with valid code in Tree
    When The user navigates to Tree page
    And The user clicks on Tree topic "Overview of Trees"
    And The user clicks Try Here button on topic page
    And The user enters test code from "EditorTest" and 0 in Tree editor
    And The user clicks Run button in Tree editor
    Then The user should see output from "EditorTest" and 0 in Tree editor

  @tree @phase5
  Scenario: User tests Try Here editor with invalid code in Tree
    When The user navigates to Tree page
    And The user clicks on Tree topic "Overview of Trees"
    And The user clicks Try Here button on topic page
    And The user enters test code from "EditorTest" and 1 in Tree editor
    And The user clicks Run button in Tree editor
    Then The user should see error alert in Tree editor


      @tree @phase5 @bug @known-issue
  Scenario: BUG - Tree Practice Questions page is empty
    When The user navigates to Tree page
    And The user clicks on Tree topic "Overview of Trees"
    And The user clicks Practice Questions link in Tree module
    Then The user should see Tree practice questions page
    And The page should have practice questions content
