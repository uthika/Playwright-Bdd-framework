import { expect } from '@playwright/test';
import { logger } from '../utils/Logger.js';

export class StackPage {
  constructor(page) {
    this.page = page;
    
    this.moduleHeading = page.locator('h1, h4').filter({ hasText: /stack/i }).first();
    this.moduleDescription = page.locator('text=/A stack is a linear data structure/i');
    
    this.operationsInStackLink = page.getByRole('link', { name: 'Operations in Stack' });
    this.implementationLink = page.getByRole('link', { name: 'Implementation' });
    this.applicationsLink = page.getByRole('link', { name: 'Applications' });
    this.practiceQuestionsLink = page.getByRole('link', { name: 'Practice Questions' });
    
    this.tryHereLink = page.getByRole('link', { name: 'Try here>>>' });
  }

  async navigateToStackPage() {
    await this.page.goto('/stack');
    logger.info('Navigated to Stack landing page');
  }

  async verifyLandingPage() {
    await expect(this.moduleHeading).toBeVisible();
    logger.info('Verified Stack landing page loaded');
  }

  async verifyModuleHeading() {
    await expect(this.moduleHeading).toBeVisible();
    logger.info('Verified Stack module heading');
  }

  async verifyModuleDescription() {
    await expect(this.moduleDescription).toBeVisible();
    logger.info('Verified Stack module description');
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
      'Operations in Stack': this.operationsInStackLink,
      'Implementation': this.implementationLink,
      'Applications': this.applicationsLink
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
