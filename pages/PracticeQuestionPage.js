import { expect } from '@playwright/test';
import { logger } from '../utils/Logger.js';
import { EditorPage } from './EditorPage.js';

export class PracticeQuestionPage {
  constructor(page) {
    this.page = page;
    
    // Use EditorPage for common editor functionality
    this.editorPage = new EditorPage(page);
    
    // Practice-specific elements
    this.questionHeading = page.locator('h2:has-text("QUESTION")');
    this.questionText = page.locator('#questionText');
    this.submitButton = page.locator('input[type="submit"][value="Submit"]');
    
    // Submission messages
    this.submissionSuccessMessage = page.locator('text=/Submission Successful/i');
    this.submissionErrorMessage = page.locator('text=/Error occurred during submission/i');
  }

  // Navigation
  async navigateToQuestion(questionNumber) {
    await this.page.goto(`/question/${questionNumber}`);
    logger.info(`Navigated to question ${questionNumber}`);
  }

  // Verification - Practice-specific
  async verifyQuestionPageLoaded() {
    await expect(this.questionHeading).toBeVisible();
    logger.info('Verified practice question page loaded');
  }

  async verifyQuestionText() {
    await expect(this.questionText).toBeVisible();
    logger.info('Verified question text is visible');
  }

  async verifySubmitButton() {
    await expect(this.submitButton).toBeVisible();
    logger.info('Verified Submit button is visible');
  }

  async getQuestionText() {
    return await this.questionText.textContent();
  }

  // Actions - Practice-specific
  async clickSubmit() {
    await this.submitButton.click();
    await this.page.waitForTimeout(1000);
    logger.info('Clicked Submit button');
  }

  // Verification - Submission Results
  async verifySubmissionSuccess() {
    await expect(this.submissionSuccessMessage).toBeVisible();
    logger.info('Verified submission success message displayed');
  }

  async verifySubmissionError() {
    await expect(this.submissionErrorMessage).toBeVisible();
    logger.info('Verified submission error message displayed');
  }

  // Delegate editor operations to EditorPage
  async verifyEditorLoaded() {
    await this.editorPage.verifyEditorLoaded();
  }

  async verifyRunButton() {
    await this.editorPage.verifyRunButton();
  }

  async enterCode(code) {
    await this.editorPage.enterCode(code);
  }

  async clearCode() {
    await this.editorPage.clearCode();
  }

  async clickRun() {
    await this.editorPage.clickRun();
  }

  async verifyOutput(expectedOutput) {
    await this.editorPage.verifyOutput(expectedOutput);
  }

  async verifyOutputContains(text) {
    await this.editorPage.verifyOutputContains(text);
  }

  async handleErrorAlert() {
    await this.editorPage.handleErrorAlert();
  }

  async verifyQuestionsExist() {
  await expect(this.questionHeading).toBeVisible({ timeout: 5000 });
  logger.info('Verified practice questions content exists');
}
}
