import { expect } from '@playwright/test';
import { logger } from '../utils/Logger.js';

export class GraphPage {
  constructor(page) {
    this.page = page;
    this.moduleHeading = page.locator('h1, h4').filter({ hasText: /graph/i }).first();
    this.moduleDescription = page.locator('text=/A graph is a non-linear data structure/i');
    
    // ✅ Add exact: true to all links
    this.graphLink = page.getByRole('link', { name: 'Graph', exact: true });
    this.graphRepresentationsLink = page.getByRole('link', { name: 'Graph Representations', exact: true });  // ✅ ADDED
    this.practiceQuestionsLink = page.getByRole('link', { name: 'Practice Questions', exact: true });  // ✅ ADDED
    this.tryHereLink = page.getByRole('link', { name: 'Try here>>>', exact: true });  // ✅ ADDED
  }

  async navigateToGraphPage() {
    await this.page.goto('/graph');
    logger.info('Navigated to Graph landing page');
  }

  async verifyLandingPage() {
    await expect(this.moduleHeading).toBeVisible();
    logger.info('Verified Graph landing page loaded');
  }

  async verifyModuleHeading() {
    await expect(this.moduleHeading).toBeVisible();
    logger.info('Verified Graph module heading');
  }

  async verifyModuleDescription() {
    await expect(this.moduleDescription).toBeVisible();
    logger.info('Verified Graph module description');
  }

  async verifyTopicsList(topics) {
    for (const topic of topics) {
      const topicLink = this.page.getByRole('link', { name: topic, exact: true });  // ✅ ADDED
      await expect(topicLink).toBeVisible();
      logger.info(`Verified topic visible: ${topic}`);
    }
  }

  async clickTopic(topicName) {
    const topicMap = {
      'Graph': this.graphLink,
      'Graph Representations': this.graphRepresentationsLink
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
