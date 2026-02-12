import { expect } from "@playwright/test";
import { logger } from "../utils/Logger.js";

export class ArrayPage {
  constructor(page) {
    this.page = page;

    // Landing page elements
    this.moduleHeading = page.getByRole("heading", { name: "Array" });
    this.moduleDescription = page.locator(
      "text=/Arrays are among the oldest/i",
    );

    // Topic links
    this.arraysInPythonLink = page.getByRole("link", {
      name: "Arrays in Python",
    });
    this.arraysUsingListLink = page.getByRole("link", {
      name: "Arrays Using List",
    });
    this.basicOperationsLink = page.getByRole("link", {
      name: "Basic Operations in Lists",
    });
    this.applicationsOfArrayLink = page.getByRole("link", {
      name: "Applications of Array",
    });
    this.practiceQuestionsLink = page.getByRole("link", {
      name: "Practice Questions",
    });

    // Try here link
    this.tryHereLink = page.getByRole("link", { name: "Try here>>>" });

    // Practice question links
    this.searchArrayLink = page.getByRole("link", { name: "Search the array" });
    this.maxConsecutiveOnesLink = page.getByRole("link", {
      name: "Max Consecutive Ones",
    });
    this.evenDigitsLink = page.getByRole("link", {
      name: "Find Numbers with Even Number of Digits",
    });
    this.squaresSortedLink = page.getByRole("link", {
      name: "Squares of a Sorted Array",
    });

    this.practiceHeading = page.locator("text=/practice questions/i");
  }

  // Navigation
  async navigateToArrayPage() {
    await this.page.goto("/array");
    logger.info("Navigated to Array landing page");
  }

  async navigateToPracticeQuestionsPage() {
    await this.page.goto("/array/practice");
    logger.info("Navigated to Array Practice Questions page");
  }

  // Landing page verification
  async verifyLandingPage() {
    await expect(this.moduleHeading).toBeVisible();
    logger.info("Verified Array landing page loaded");
  }

  async verifyModuleHeading() {
    await expect(this.moduleHeading).toBeVisible();
    logger.info("Verified Array module heading");
  }

  async verifyModuleDescription() {
    await expect(this.moduleDescription).toBeVisible();
    logger.info("Verified Array module description");
  }

  async verifyTopicsList(topics) {
    for (const topic of topics) {
      const topicLink = this.page.getByRole("link", { name: topic });
      await expect(topicLink).toBeVisible();
      logger.info(`Verified topic visible: ${topic}`);
    }
  }

  // Topic navigation
  async clickTopic(topicName) {
    const topicMap = {
      "Arrays in Python": this.arraysInPythonLink,
      "Arrays Using List": this.arraysUsingListLink,
      "Basic Operations in Lists": this.basicOperationsLink,
      "Applications of Array": this.applicationsOfArrayLink,
    };

    await topicMap[topicName].click();
    logger.info(`Clicked topic: ${topicName}`);
  }

  async verifyTopicPage(topicName) {
    await expect(
      this.page
        .locator("h4, h1")
        .filter({ hasText: new RegExp(topicName, "i") }),
    ).toBeVisible();
    logger.info(`Verified on topic page: ${topicName}`);
  }

  async verifyTryHereLink() {
    await expect(this.tryHereLink).toBeVisible();
    logger.info("Verified Try here link is visible");
  }

  // Try here navigation
  async clickTryHere() {
    await this.tryHereLink.scrollIntoViewIfNeeded();
    await this.tryHereLink.click();
    logger.info("Clicked Try Here link");
  }

  // Practice Questions
  async clickPracticeQuestions() {
    await this.practiceQuestionsLink.click();
    logger.info("Clicked Practice Questions link");
  }

  async verifyPracticeQuestionsPage() {
    await expect(this.page).toHaveURL(/.*practice/);
    logger.info("Verified Practice Questions page loaded");
  }

  async verifyPracticeHeading() {
    await expect(this.practiceHeading).toBeVisible();
    logger.info("Verified practice questions heading");
  }

  async verifyPracticeQuestionsList(questions) {
    for (const question of questions) {
      const questionLink = this.page.getByRole("link", { name: question });
      await expect(questionLink).toBeVisible();
      logger.info(`Verified practice question visible: ${question}`);
    }
  }

  async clickPracticeQuestion(questionName) {
    const questionMap = {
      "Search the array": this.searchArrayLink,
      "Max Consecutive Ones": this.maxConsecutiveOnesLink,
      "Find Numbers with Even Number of Digits": this.evenDigitsLink,
      "Squares of a Sorted Array": this.squaresSortedLink,
    };

    await questionMap[questionName].click();
    logger.info(`Clicked practice question: ${questionName}`);
  }
}
