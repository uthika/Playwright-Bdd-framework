import { expect } from "@playwright/test";

export class LoginPage {
  constructor(page) {
    this.page = page;

    // URLs
    //this.baseUrl = "https://dsportalapp.herokuapp.com";

    // Locators
    this.getStartedBtn = page.getByRole("link", { name: "Get Started" });
    this.signInLink = page.getByRole("link", { name: "Sign In" });
    this.usernameInput = page.locator("#id_username");
    this.passwordInput = page.locator("#id_password");
    this.loginButton = page.getByRole("button", { name: "Login" });
    this.authErrorMessage = page.locator(".alert-primary");
  }

  /* -------------------- Navigation -------------------- */
  async openSignInPage() {
    await this.page.goto("/login");
  }

  /* -------------------- Actions -------------------- */
  async enterUsername(username) {
    await this.usernameInput.fill(username);
  }

  async enterPassword(password) {
    await this.passwordInput.fill(password);
  }

  async clickLogin() {
    await this.loginButton.click();
    await this.page.waitForTimeout(1000);
  }

  async login(username, password) {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLogin();
  }

  /* -------------------- Element Getters -------------------- */
  async getUsernameValidationMessage() {
    return await this.usernameInput.evaluate((el) => el.validationMessage);
  }

  async getPasswordValidationMessage() {
    return await this.passwordInput.evaluate((el) => el.validationMessage);
  }

  /*-------------AuthMessageGetter---------------------------*/
  async getAuthErrorMessage() {
    // textContent() gets the text inside the div
    return await this.authErrorMessage.textContent();
  }
}
