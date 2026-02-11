import { expect } from '@playwright/test';

export class HomePage {
  constructor(page) {
    this.page = page;

    /* ===============================
       LOCATORS
    ================================ */

    // Header
    this.numpyNinjaLink = page.getByRole('link', { name: 'NumpyNinja' });
    this.registerLink = page.getByRole('link', { name: 'Register' });
    this.signInLink = page.getByRole('link', { name: 'Sign In' });
    this.signOutLink = page.getByRole('link', { name: 'Sign out' });

    // Main buttons
    this.getStartedButton = page.getByRole('link', { name: 'Get Started' });

    // Dropdown
    this.dataStructuresDropdown = page.getByRole('link', {
      name: 'Data Structures',
    });

    // Messages
    this.alertMessage = page.locator('.alert, .alert-primary, .alert-danger');
  }

  /* ===============================
     NAVIGATION
  ================================ */

  async open() {
    await this.page.goto('https://dsportalapp.herokuapp.com/', {
      waitUntil: 'domcontentloaded',
    });
  }

  async goToHome() {
    await this.page.goto('/home', { waitUntil: 'domcontentloaded' });
  }

  /* ===============================
     BASIC ACTIONS
  ================================ */

  async clickGetStarted() {
    await this.getStartedButton.click();
  }

  async clickRegister() {
    await this.registerLink.click();
  }

  async clickSignIn() {
    await this.signInLink.click();
  }

  async clickSignOut() {
    await this.signOutLink.click();
  }

  async clickNumpyNinjaLogo() {
    await this.numpyNinjaLink.click();
  }

  /* ===============================
     DROPDOWN ACTIONS
  ================================ */

  async openDataStructuresDropdown() {
    await this.dataStructuresDropdown.click();
  }

  async selectFromDropdown(option) {
    await this.openDataStructuresDropdown();
    await this.page.getByRole('link', { name: option }).click();
  }

  /* ===============================
     MODULE GET STARTED (CARDS)
  ================================ */

  async clickModuleGetStarted(moduleName) {
    await this.page
      .locator('div.card')
      .filter({ hasText: moduleName })
      .getByRole('link', { name: 'Get Started' })
      .click();
  }

  /* ===============================
     VERIFICATIONS
  ================================ */

  async verifyHomePage() {
    await expect(this.page).toHaveURL(/home/);
  }

  async verifyHeader(title) {
    await expect(
      this.page.getByRole('link', { name: title })
    ).toBeVisible();
  }

  async verifyAuthLinksVisible() {
    await expect(this.registerLink).toBeVisible();
    await expect(this.signInLink).toBeVisible();
  }

  async verifyDropdownOptions(options = []) {
    for (const option of options) {
      await expect(
        this.page.getByRole('link', { name: option })
      ).toBeVisible();
    }
  }

  async verifyWarningMessage(message) {
    await expect(this.page.getByText(message)).toBeVisible();
  }

  async verifyLoggedIn() {
    await expect(this.signOutLink).toBeVisible();
  }
}
