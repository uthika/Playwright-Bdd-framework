import { expect } from '@playwright/test';
import { logger } from '../utils/Logger.js';

export class DataStructuresPage {
  constructor(page) {
    this.page = page;
    
    // Landing page elements
    this.moduleHeading = page.locator('h1, h4').filter({ hasText: /data structures/i }).first();
    this.moduleDescription = page.locator('text=/Data structure is a storage/i');
    
    // Topic links
    this.timeComplexityLink = page.getByRole('link', { name: 'Time Complexity' });
    this.practiceQuestionsLink = page.getByRole('link', { name: 'Practice Questions' });
    
    // Try here link
    this.tryHereLink = page.getByRole('link', { name: 'Try here>>>' });

    // Practice-specific elements
    this.questionHeading = page.locator('h2:has-text("QUESTION")');
  }

  async navigateToDataStructuresPage() {
    await this.page.goto('/data-structures-introduction');
    logger.info('Navigated to Data Structures landing page');
  }

  async verifyLandingPage() {
    await expect(this.moduleHeading).toBeVisible();
    logger.info('Verified Data Structures landing page loaded');
  }

  async verifyModuleHeading() {
    await expect(this.moduleHeading).toBeVisible();
    logger.info('Verified Data Structures module heading');
  }

  async verifyModuleDescription() {
    await expect(this.moduleDescription).toBeVisible();
    logger.info('Verified Data Structures module description');
  }

  async verifyTopicsList(topics) {
    for (const topic of topics) {
      const topicLink = this.page.getByRole('link', { name: topic });
      await expect(topicLink).toBeVisible();
      logger.info(`Verified topic visible: ${topic}`);
    }
  }

  async clickTopic(topicName) {
    if (topicName === 'Time Complexity') {
      await this.timeComplexityLink.click();
    }
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

  async verifyPracticeQuestionsContent() {
  // BUG: Page is empty - this should fail
  await expect(this.questionHeading).toBeVisible({ timeout: 5000 });
  logger.info('Verified practice questions content exists');
}
}
