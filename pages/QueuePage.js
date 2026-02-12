import { expect } from '@playwright/test';
import { logger } from '../utils/Logger.js';

export class QueuePage {
  constructor(page) {
    this.page = page;
    
    this.moduleHeading = page.locator('h1, h4').filter({ hasText: /queue/i }).first();
    this.moduleDescription = page.locator('text=/Queue is a linear data structure/i');
    
    this.implementationQueueLink = page.getByRole('link', { name: 'Implementation of Queue in Python' });
    this.implementationDequeLink = page.getByRole('link', { name: 'Implementation using collections.deque' });
    this.implementationArrayLink = page.getByRole('link', { name: 'Implementation using array' });
    this.queueOperationsLink = page.getByRole('link', { name: 'Queue Operations' });
    this.practiceQuestionsLink = page.getByRole('link', { name: 'Practice Questions' });
    
    this.tryHereLink = page.getByRole('link', { name: 'Try here>>>' });
  }

  async navigateToQueuePage() {
    await this.page.goto('/queue');
    logger.info('Navigated to Queue landing page');
  }

  async verifyLandingPage() {
    await expect(this.moduleHeading).toBeVisible();
    logger.info('Verified Queue landing page loaded');
  }

  async verifyModuleHeading() {
    await expect(this.moduleHeading).toBeVisible();
    logger.info('Verified Queue module heading');
  }

  async verifyModuleDescription() {
    await expect(this.moduleDescription).toBeVisible();
    logger.info('Verified Queue module description');
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
      'Implementation of Queue in Python': this.implementationQueueLink,
      'Implementation using collections.deque': this.implementationDequeLink,
      'Implementation using array': this.implementationArrayLink,
      'Queue Operations': this.queueOperationsLink
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
