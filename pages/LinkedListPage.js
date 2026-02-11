import { expect } from '@playwright/test';
import { logger } from '../utils/Logger.js';

export class LinkedListPage {
  constructor(page) {
    this.page = page;
    
    this.moduleHeading = page.locator('h1, h4').filter({ hasText: /linked list/i }).first();
    this.moduleDescription = page.locator('text=/A linked list is a linear data structure/i');
    
    this.introductionLink = page.getByRole('link', { name: 'Introduction' });
    this.creatingLinkedListLink = page.getByRole('link', { name: 'Creating Linked List' });
    this.typesOfLinkedListLink = page.getByRole('link', { name: 'Types of Linked List' });
    this.implementLinkedListLink = page.getByRole('link', { name: 'Implement Linked List in Python' });
    this.traversalLink = page.getByRole('link', { name: 'Traversal' });
    this.insertionLink = page.getByRole('link', { name: 'Insertion' });
    this.deletionLink = page.getByRole('link', { name: 'Deletion' });
    this.practiceQuestionsLink = page.getByRole('link', { name: 'Practice Questions' });
    
    this.tryHereLink = page.getByRole('link', { name: 'Try here>>>' });
  }

  async navigateToLinkedListPage() {
    await this.page.goto('/linked-list');
    logger.info('Navigated to Linked List landing page');
  }

  async verifyLandingPage() {
    await expect(this.moduleHeading).toBeVisible();
    logger.info('Verified Linked List landing page loaded');
  }
  async verifyLinkedListPage() {
  await expect(this.moduleHeading).toBeVisible();
  logger.info('Verified LinkedList module page loaded');
}


  async verifyModuleHeading() {
    await expect(this.moduleHeading).toBeVisible();
    logger.info('Verified Linked List module heading');
  }

  async verifyModuleDescription() {
    await expect(this.moduleDescription).toBeVisible();
    logger.info('Verified Linked List module description');
  }

  async verifyTopicsList(topics) {
    for (const topic of topics) {
      const topicLink = this.page.getByRole('link', { name: topic });
      await expect(topicLink).toBeVisible();
      logger.info(`Verified topic visible: ${topic}`);
    }
  }

  async clickTopic(topicName) {
    const topicMap = {
      'Introduction': this.introductionLink,
      'Creating Linked List': this.creatingLinkedListLink,
      'Types of Linked List': this.typesOfLinkedListLink,
      'Implement Linked List in Python': this.implementLinkedListLink,
      'Traversal': this.traversalLink,
      'Insertion': this.insertionLink,
      'Deletion': this.deletionLink
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
