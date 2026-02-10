import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { logger } from '../utils/Logger.js';

const { Given, When, Then } = createBdd();

// ========================================
// NAVIGATION
// ========================================

Given('The user is on the registration page', async ({ registrationPage }) => {
  await registrationPage.navigateToRegistrationPage();
});

// ========================================
// ACTIONS - FORM INPUT
// ========================================

When('The user enters registration username {string}', async ({ registrationPage }, username) => {
  await registrationPage.enterUsername(username);
});

When('The user enters registration password {string}', async ({ registrationPage }, password) => {
  await registrationPage.enterPassword(password);
});

When('The user enters registration password confirmation {string}', async ({ registrationPage }, passwordConfirm) => {
  await registrationPage.enterPasswordConfirmation(passwordConfirm);
});

// With Excel data - Generate unique username
When('The user enters registration details from {string} and {int}',
  async ({ registrationPage, excelReader }, sheetName, rowNumber) => {
    const data = await excelReader.readExcel(sheetName, rowNumber);
    
    // Generate unique username with timestamp
    const timestamp = Date.now().toString().slice(-8);
    const uniqueUsername = `${data.Username}_${timestamp}`;
    
    logger.info(`📊 Registering with username: ${uniqueUsername}`);
    
    await registrationPage.enterRegistrationDetails(uniqueUsername, data.Password, data.PasswordConfirm);
  });

// ========================================
// ACTIONS - BUTTONS
// ========================================

When('The user clicks Register button', async ({ registrationPage }) => {
  await registrationPage.clickRegister();
});

// ========================================
// ACTIONS - NAVIGATION (⭐ NEW - TWO SEPARATE STEPS)
// ========================================

When('The user clicks top Sign in link from registration page', async ({ registrationPage }) => {
  await registrationPage.clickTopSignInLink();
});

When('The user clicks bottom Login link from registration page', async ({ registrationPage }) => {
  await registrationPage.clickBottomLoginLink();
});

// ========================================
// VERIFICATION - MESSAGES
// ========================================

Then('The user should see registration success message', async ({ registrationPage }) => {
  await registrationPage.verifySuccessMessage();
});

// ✅ HANDLES BOTH: Browser validation AND Server errors with expected message
Then('The user sees registration error message {string}', async ({ registrationPage, page }, expectedError) => {
  // Check if it's a browser validation message
  if (expectedError === 'Please fill out this field') {
    // ✅ Check username field first
    const usernameValidation = await page.locator('#id_username, input[name="username"]')
      .evaluate(el => el.validationMessage)
      .catch(() => '');
    
    if (usernameValidation && usernameValidation.length > 0) {
      expect(usernameValidation).toContain('fill');
      logger.info(`✅ Username validation triggered: ${usernameValidation}`);
      return;
    }
    
    // Check password field
    const passwordValidation = await page.locator('#id_password1, input[name="password1"]')
      .evaluate(el => el.validationMessage)
      .catch(() => '');
    
    if (passwordValidation && passwordValidation.length > 0) {
      expect(passwordValidation).toContain('fill');
      logger.info(`✅ Password validation triggered: ${passwordValidation}`);
      return;
    }
    
    // Check password confirmation field
    const passwordConfirmValidation = await page.locator('#id_password2, input[name="password2"]')
      .evaluate(el => el.validationMessage)
      .catch(() => '');
    
    if (passwordConfirmValidation && passwordConfirmValidation.length > 0) {
      expect(passwordConfirmValidation).toContain('fill');
      logger.info(`✅ Password confirmation validation triggered: ${passwordConfirmValidation}`);
      return;
    }
    
    throw new Error('No validation message found on any field');
  } else {
    // ✅ Server-side error message - with specific error text expectation
    await page.waitForTimeout(1000);
    
    const alertLocator = page.locator('.alert-primary, .alert-danger, .alert');
    
    try {
      await expect(alertLocator).toBeVisible({ timeout: 3000 });
      const errorText = await alertLocator.textContent();
      
      // ✅ Check if error contains the expected message
      expect(errorText).toContain(expectedError);
      logger.info(`✅ Error message found: ${errorText.trim()}`);
      
    } catch (error) {
      // Error message not found - this will fail the test
      logger.error(`❌ Expected error message not found: "${expectedError}"`);
      logger.error(`Error: ${error.message}`);
      throw error;
    }
  }
});

// ========================================
// VERIFICATION - REDIRECTS
// ========================================

Then('The user is navigated to homepage after registration', async ({ page }) => {
  await page.waitForURL(/.*home.*/);
  logger.info(`✅ Navigated to homepage`);
});

Then('The user is taken to login page from registration', async ({ page }) => {
  await page.waitForURL(/.*login.*/);
  logger.info(`✅ Navigated to login page`);
});
