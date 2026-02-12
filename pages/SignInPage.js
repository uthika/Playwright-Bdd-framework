import { expect } from "@playwright/test";
import { logger } from "../utils/Logger.js";

export class SignInPage {
  constructor(page) {
    this.page = page;

    // Form elements
    this.usernameInput = page.getByRole("textbox", { name: "Username:" });
    this.passwordInput = page.getByRole("textbox", { name: "Password:" });
    this.loginButton = page.getByRole("button", { name: "Login" });
    this.registerbtn = page.getByRole("button", { name: "Register" });
    this.authMessage = page.locator(".alert-primary");

    // Links
    this.registerLink = page.getByRole("link", {
      name: "Register",
      exact: true,
    });
    // Messages
    this.errorMessage = page.locator("div.alert-primary");
    // Page heading
    this.pageHeading = page
      .locator("h1, h2")
      .filter({ hasText: /sign in|login/i });
  }

  // Navigation
  async navigateToSignInPage() {
    await this.page.goto("/login");
    logger.info("Navigated to sign in page");
  }

  // Verification
  async verifySignInPage() {
    await expect(this.pageHeading).toBeVisible();
    logger.info("Verified sign in page loaded");
  }

  async verifyLoginButton() {
    await expect(this.loginButton).toBeVisible();
    logger.info("Verified Login button is visible");
  }

  // Actions - Form Input
  async enterUsername(username) {
    await this.usernameInput.fill(username);
    logger.info(`Entered username: ${username}`);
  }

  async enterPassword(password) {
    await this.passwordInput.fill(password);
    logger.info("Entered password");
  }

  async enterCredentials(username, password) {
    await this.enterUsername(username);
    await this.enterPassword(password);
    logger.info("Entered login credentials");
  }

  async clickLogin() {
    await this.loginButton.click();
    await this.page.waitForTimeout(1000);
    logger.info("Clicked Login button");
  }

  // Actions - Navigation
  async clickRegisterLink() {
    await this.registerLink.click();
    logger.info("Clicked Register link");
  }
  async clickRegisterButton() {
    await this.registerbtn.click();
    logger.info("Clicked Register Button");
  }

  // Messages
  async verifyErrorMessage(expectedError) {
    await expect(this.errorMessage).toBeVisible();
    await expect(this.errorMessage).toContainText(expectedError);
    logger.info(`Verified error message: ${expectedError}`);
  }

  async getErrorMessage() {
    return await this.errorMessage.textContent();
  }

  // Complete Login Flow
  async loginUser(username, password) {
    await this.enterCredentials(username, password);
    await this.clickLogin();
    logger.info("Completed login form submission");
  }

  // Save Authentication State (for reuse)
  async saveAuthState(storageStatePath) {
    await this.page.context().storageState({ path: storageStatePath });
    logger.info(`Saved authentication state to: ${storageStatePath}`);
  }

  // Add this method
  async verifyRequiredFieldValidation(fieldName) {
    let field;
    if (fieldName === "username") {
      field = this.usernameInput;
    } else if (fieldName === "password") {
      field = this.passwordInput;
    }

    // Check HTML5 validation - explicit check for non-empty string
    const validationMessage = await field.evaluate(
      (el) => el.validationMessage,
    );

    if (!validationMessage || validationMessage === "") {
      throw new Error(
        `Expected validation message for ${fieldName}, but got empty string`,
      );
    }

    logger.info(`Verified ${fieldName} field validation: ${validationMessage}`);
  }
}
