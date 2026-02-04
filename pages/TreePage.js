import { expect } from '@playwright/test';
import { logger } from '../utils/Logger.js';

export class TreePage {
  constructor(page) {
    this.page = page;
    this.moduleHeading = page.locator('h1, h4').filter({ hasText: /tree/i }).first();
    this.moduleDescription = page.locator('text=/A tree is a nonlinear data structure/i');
    
    // ✅ ALL locators now use exact: true
    this.overviewOfTreesLink = page.getByRole('link', { name: 'Overview of Trees', exact: true });
    this.terminologiesLink = page.getByRole('link', { name: 'Terminologies', exact: true });
    this.typesOfTreesLink = page.getByRole('link', { name: 'Types of Trees', exact: true });
    this.treeTraversalsLink = page.getByRole('link', { name: 'Tree Traversals', exact: true });
    this.traversalsIllustrationLink = page.getByRole('link', { name: 'Traversals-Illustration', exact: true });
    this.binaryTreesLink = page.getByRole('link', { name: 'Binary Trees', exact: true });
    this.typesOfBinaryTreesLink = page.getByRole('link', { name: 'Types of Binary Trees', exact: true });
    this.implementationInPythonLink = page.getByRole('link', { name: 'Implementation in Python', exact: true });
    this.binaryTreeTraversalsLink = page.getByRole('link', { name: 'Binary Tree Traversals', exact: true });
    this.implementationOfBinaryTreesLink = page.getByRole('link', { name: 'Implementation of Binary Trees', exact: true });
    this.applicationsOfBinaryTreesLink = page.getByRole('link', { name: 'Applications of Binary trees', exact: true });
    this.binarySearchTreesLink = page.getByRole('link', { name: 'Binary Search Trees', exact: true });
    this.implementationOfBSTLink = page.getByRole('link', { name: 'Implementation Of BST', exact: true });
    this.practiceQuestionsLink = page.getByRole('link', { name: 'Practice Questions', exact: true });
    this.tryHereLink = page.getByRole('link', { name: 'Try here>>>', exact: true });
  }

  async navigateToTreePage() {
    await this.page.goto('/tree');
    logger.info('Navigated to Tree landing page');
  }

  async verifyLandingPage() {
    await expect(this.moduleHeading).toBeVisible();
    logger.info('Verified Tree landing page loaded');
  }

  async verifyModuleHeading() {
    await expect(this.moduleHeading).toBeVisible();
    logger.info('Verified Tree module heading');
  }

  async verifyModuleDescription() {
    await expect(this.moduleDescription).toBeVisible();
    logger.info('Verified Tree module description');
  }

  async verifyTopicsList(topics) {
    for (const topic of topics) {
      const topicLink = this.page.getByRole('link', { name: topic, exact: true });
      await expect(topicLink).toBeVisible();
      logger.info(`Verified topic visible: ${topic}`);
    }
  }

  async clickTopic(topicName) {
    const topicMap = {
      'Overview of Trees': this.overviewOfTreesLink,
      'Terminologies': this.terminologiesLink,
      'Types of Trees': this.typesOfTreesLink,
      'Tree Traversals': this.treeTraversalsLink,
      'Traversals-Illustration': this.traversalsIllustrationLink,
      'Binary Trees': this.binaryTreesLink,
      'Types of Binary Trees': this.typesOfBinaryTreesLink,
      'Implementation in Python': this.implementationInPythonLink,
      'Binary Tree Traversals': this.binaryTreeTraversalsLink,
      'Implementation of Binary Trees': this.implementationOfBinaryTreesLink,
      'Applications of Binary trees': this.applicationsOfBinaryTreesLink,
      'Binary Search Trees': this.binarySearchTreesLink,
      'Implementation Of BST': this.implementationOfBSTLink
    };
    
    await topicMap[topicName].click();
    logger.info(`Clicked topic: ${topicName}`);
  }

  async verifyTopicPage(topicName) {
    await expect(this.page.locator('h4, h1').filter({ hasText: new RegExp(topicName, 'i') })).toBeVisible();
    logger.info(`Verified on topic page: ${topicName}`);
  }

  async verifyTryHereLink() {
    await expect(this.tryHereLink).toBeVisible();
    logger.info('Verified Try here link is visible');
  }

  async clickTryHere() {
    await this.tryHereLink.click();
    logger.info('Clicked Try Here link');
  }

  async clickPracticeQuestions() {
    await this.practiceQuestionsLink.click();
    logger.info('Clicked Practice Questions link');
  }

  async verifyPracticeQuestionsPage() {
    await expect(this.page).toHaveURL(/.*practice/);
    logger.info('Verified Practice Questions page loaded');
  }
}
