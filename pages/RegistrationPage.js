import { expect } from '@playwright/test';
import { logger } from '../utils/Logger.js';

export class RegistrationPage {
  constructor(page) {
    this.page = page;

    // Page URL
    this.pageURL = '/register';

    // Form fields
    this.usernameInput = page.locator('#id_username, input[name="username"]');
    this.passwordInput = page.locator('#id_password1, input[name="password1"]');
    this.passwordConfirmInput = page.locator('#id_password2, input[name="password2"]');
    
    // Register button (input element, not button)
    this.registerButton = page.locator('input[type="submit"][value="Register"], button:has-text("Register")');

    // Messages
    this.successMessage = page.locator('.alert-success, [role="alert"]:has-text("logged in")');
    this.errorMessage = page.locator('.alert-primary, .alert-danger, .alert');

    // ⭐ IMPROVED - Using getByRole (cleaner and more reliable!)
    this.topSignInLink = page.getByRole('link', { name: 'Sign in' });
    this.bottomLoginLink = page.getByRole('link', { name: 'Login' });
  }

  // ========================================
  // NAVIGATION
  // ========================================

  async navigateToRegistrationPage() {
    await this.page.goto(this.pageURL);
    logger.info('Navigated to registration page');
  }

  // ========================================
  // FORM ACTIONS
  // ========================================

  async enterUsername(username) {
    await this.usernameInput.fill(username);
    logger.info(`Entered username: ${username}`);
  }

  async enterPassword(password) {
    await this.passwordInput.fill(password);
    logger.info('Entered password');
  }

  async enterPasswordConfirmation(passwordConfirm) {
    await this.passwordConfirmInput.fill(passwordConfirm);
    logger.info('Entered password confirmation');
  }

  async enterRegistrationDetails(username, password, passwordConfirm) {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.enterPasswordConfirmation(passwordConfirm);
    logger.info('Entered all registration details');
  }

  async clickRegister() {
    await this.registerButton.click();
    logger.info('Clicked Register button');
  }

  // ========================================
  // NAVIGATION ACTIONS
  // ========================================

  async clickTopSignInLink() {
    await this.topSignInLink.click();
    logger.info('Clicked top Sign in link (navbar)');
  }

  async clickBottomLoginLink() {
    await this.bottomLoginLink.click();
    logger.info('Clicked bottom Login link (page text)');
  }

  // ========================================
  // VERIFICATION - SUCCESS MESSAGE
  // ========================================

  async verifySuccessMessage() {
  await expect(this.successMessage).toBeVisible({ timeout: 5000 });
  const successText = await this.successMessage.textContent();
  
  // Verify message contains expected text
  expect(successText).toContain('New Account Created');
  expect(successText).toContain('logged in');
  
  logger.info(`✅ Success message: "${successText.trim()}"`);
}

  // ========================================
  // VERIFICATION - ERROR MESSAGE
  // ========================================

  async verifyErrorMessage(expectedError) {
    // Wait for error to appear
    await expect(this.errorMessage).toBeVisible({ timeout: 5000 });
    const errorText = await this.errorMessage.textContent();
    
    // Check if error contains the expected message
    if (!errorText.includes(expectedError)) {
      logger.error(`❌ Expected error: "${expectedError}"`);
      logger.error(`❌ Actual error: "${errorText.trim()}"`);
      throw new Error(`Expected error "${expectedError}" not found. Got: "${errorText.trim()}"`);
    }
    
    logger.info(`✅ Verified error message: ${expectedError}`);
  }
}
