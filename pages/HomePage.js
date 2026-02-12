import { expect } from '@playwright/test';
import { logger } from '../utils/Logger.js';

export class HomePage {
  constructor(page) {
    this.page = page;

    // Header elements
    this.logo = page.locator('.navbar-brand');
    this.getStartedButton = page.getByRole('button', { name: 'Get Started' });
    this.signInLink = page.getByRole('link', { name: 'Sign in' });
    this.registerLink = page.getByRole('link', { name: 'Register' });
    this.signOutLink = page.getByRole('link', { name: 'Sign out' });
    this.numpyNinjaLink = page.getByRole('link', { name: 'NumpyNinja' });

    // Dropdown menu
    this.dropdownMenu = page.locator('[data-toggle="dropdown"], .nav-link.dropdown-toggle');

    // Module Get Started buttons (cards on /home page)
    // Using nth() to get specific card buttons in order
    this.dataStructuresGetStarted = page.getByRole('link', { name: 'Get Started' }).first();
    this.arrayGetStarted = page.getByRole('link', { name: 'Get Started' }).nth(1);
    this.linkedListGetStarted = page.getByRole('link', { name: 'Get Started' }).nth(2);
    this.stackGetStarted = page.getByRole('link', { name: 'Get Started' }).nth(3);
    this.queueGetStarted = page.getByRole('link', { name: 'Get Started' }).nth(4);
    this.treeGetStarted = page.getByRole('link', { name: 'Get Started' }).nth(5);
    this.graphGetStarted = page.getByRole('link', { name: 'Get Started' }).nth(6);

    // Messages
    this.alertMessage = page.locator('.alert, [role="alert"]');
    this.errorMessage = page.locator('.alert-danger, .error-message');

    // Username display (when logged in) - FIXED
    this.usernameDisplay = page.locator('.navbar-nav .nav-link')
      .filter({ hasNotText: 'Data Structures' })
      .filter({ hasNotText: 'Sign out' })
      .first();
  }

  // Navigation
  async navigateToHomepage() {
    await this.page.goto('/', { waitUntil: 'domcontentloaded', timeout: 30000 });
    // Wait for page to be ready - either Get Started button OR dropdown menu
    try {
      await this.getStartedButton.waitFor({ state: 'visible', timeout: 15000 });
    } catch {
      // If Get Started not found, check if already on /home with dropdown
      await this.dropdownMenu.waitFor({ state: 'visible', timeout: 15000 });
    }
    logger.info('Navigated to homepage');
  }

  async navigateToHome() {
    await this.page.goto('/home', { waitUntil: 'domcontentloaded', timeout: 30000 });
    logger.info('Navigated to /home');
  }

  // Verification - Without Login
  async verifyHomepage() {
    await expect(this.getStartedButton).toBeVisible({ timeout: 15000 });
    logger.info('Verified homepage loaded');
  }

  async verifyGetStartedButton() {
    await expect(this.getStartedButton).toBeVisible({ timeout: 15000 });
    logger.info('Verified Get Started button is visible');
  }

  async verifySignInLink() {
    await expect(this.signInLink).toBeVisible({ timeout: 15000 });
    logger.info('Verified Sign in link is visible');
  }

  async verifyRegisterLink() {
    await expect(this.registerLink).toBeVisible({ timeout: 15000 });
    logger.info('Verified Register link is visible');
  }

  async verifyNumpyNinjaLink() {
    await expect(this.numpyNinjaLink).toBeVisible({ timeout: 15000 });
    logger.info('Verified NumpyNinja link is visible');
  }

  // Verification - With Login
  async verifyLoggedInState() {
    await expect(this.signOutLink).toBeVisible({ timeout: 15000 });
    logger.info('Verified user is logged in');
  }

  async verifyUsernameDisplayed() {
    await expect(this.usernameDisplay).toBeVisible({ timeout: 15000 });
    const username = await this.usernameDisplay.textContent();
    logger.info(`Verified username is displayed: ${username.trim()}`);
  }

  async verifySignOutLink() {
    await expect(this.signOutLink).toBeVisible({ timeout: 15000 });
    logger.info('Verified Sign out link is visible');
  }

  // Actions - Get Started Button
  async clickGetStarted() {
    await this.getStartedButton.waitFor({ state: 'visible', timeout: 15000 });
    await this.getStartedButton.click();
    await this.page.waitForLoadState('domcontentloaded');
    logger.info('Clicked Get Started button');
  }

  // Actions - Dropdown Menu
  async clickDropdownMenu() {
    // Wait for dropdown to be visible first (handles slow page load)
    await this.dropdownMenu.waitFor({ state: 'visible', timeout: 15000 });
    await this.dropdownMenu.click();
    await this.page.waitForTimeout(500);
    logger.info('Clicked dropdown menu');
  }

  async selectFromDropdown(menuItem) {
    // Wait for dropdown item to appear
    const dropdownItem = this.page.getByRole('link', { name: menuItem });
    await dropdownItem.waitFor({ state: 'visible', timeout: 10000 });
    await dropdownItem.click();
    // Wait for any navigation or page load
    await this.page.waitForLoadState('domcontentloaded');
    logger.info(`Selected ${menuItem} from dropdown`);
  }

  // Actions - Module Get Started Buttons
  async clickDataStructuresGetStarted() {
    await this.dataStructuresGetStarted.waitFor({ state: 'visible', timeout: 15000 });
    await this.dataStructuresGetStarted.click();
    await this.page.waitForLoadState('domcontentloaded');
    logger.info('Clicked Data Structures Get Started button');
  }

  async clickArrayGetStarted() {
    await this.arrayGetStarted.waitFor({ state: 'visible', timeout: 15000 });
    await this.arrayGetStarted.click();
    await this.page.waitForLoadState('domcontentloaded');
    logger.info('Clicked Array Get Started button');
  }

  async clickLinkedListGetStarted() {
    await this.linkedListGetStarted.waitFor({ state: 'visible', timeout: 15000 });
    await this.linkedListGetStarted.click();
    await this.page.waitForLoadState('domcontentloaded');
    logger.info('Clicked Linked List Get Started button');
  }

  async clickStackGetStarted() {
    await this.stackGetStarted.waitFor({ state: 'visible', timeout: 15000 });
    await this.stackGetStarted.click();
    await this.page.waitForLoadState('domcontentloaded');
    logger.info('Clicked Stack Get Started button');
  }

  async clickQueueGetStarted() {
    await this.queueGetStarted.waitFor({ state: 'visible', timeout: 15000 });
    await this.queueGetStarted.click();
    await this.page.waitForLoadState('domcontentloaded');
    logger.info('Clicked Queue Get Started button');
  }

  async clickTreeGetStarted() {
    await this.treeGetStarted.waitFor({ state: 'visible', timeout: 15000 });
    await this.treeGetStarted.click();
    await this.page.waitForLoadState('domcontentloaded');
    logger.info('Clicked Tree Get Started button');
  }

  async clickGraphGetStarted() {
    await this.graphGetStarted.waitFor({ state: 'visible', timeout: 15000 });
    await this.graphGetStarted.click();
    await this.page.waitForLoadState('domcontentloaded');
    logger.info('Clicked Graph Get Started button');
  }

  // Actions - Sign Out
  async clickSignOut() {
    await this.signOutLink.click();
    logger.info('Clicked Sign out link');
  }

  // Actions - NumpyNinja Logo
  async clickNumpyNinjaLogo() {
    await this.numpyNinjaLink.click();
    await this.page.waitForLoadState('domcontentloaded');
    logger.info('Clicked NumpyNinja logo');
  }

  // Messages
  async verifyAlertMessage(expectedMessage) {
    await expect(this.alertMessage).toBeVisible({ timeout: 10000 });
    await expect(this.alertMessage).toContainText(expectedMessage);
    logger.info(`Verified alert message: ${expectedMessage}`);
  }

  async getAlertMessage() {
    return await this.alertMessage.textContent();
  }
}