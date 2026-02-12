import { createBdd } from "playwright-bdd";
import { expect } from "@playwright/test"; // ← ADD THIS LINE
const { Given, When, Then } = createBdd();

// ========================================
// NAVIGATION
// ========================================

Given("The user is on the sign in page", async ({ signInPage }) => {
  await signInPage.navigateToSignInPage();
});

// ========================================
// ACTIONS - FORM INPUT (Context-specific for signin)
// ========================================

When(
  "The user enters signin username {string}",
  async ({ signInPage }, username) => {
    await signInPage.enterUsername(username);
  },
);

When(
  "The user enters signin password {string}",
  async ({ signInPage }, password) => {
    await signInPage.enterPassword(password);
  },
);

// With Excel data
When(
  "The user enters signin credentials from {string} and {int}",
  async ({ signInPage, excelReader }, sheetName, rowNumber) => {
    const data = await excelReader.readExcel(sheetName, rowNumber);
    await signInPage.enterCredentials(data.Username, data.Password);
  },
);

// ========================================
// ACTIONS - BUTTONS
// ========================================

When("The user clicks Login button", async ({ signInPage, page }) => {
  await signInPage.clickLogin();

  // Save authentication state after successful login
  const storageStatePath = process.env.STORAGE_STATE || ".auth/user.json";

  // Wait for navigation to complete
  await page.waitForTimeout(2000);

  // Check if login was successful (URL changed to /home)
  if (page.url().includes("/home")) {
    await signInPage.saveAuthState(storageStatePath);
  }
});

// ========================================
// ACTIONS - NAVIGATION (Context-specific)
// ========================================

When(
  "The user clicks Register link from signin page",
  async ({ signInPage }) => {
    await signInPage.clickRegisterLink();
  },
);

// ========================================
// VERIFICATION - MESSAGES (Context-specific for signin)
// ========================================

// Then('The user sees signin error message {string}', async ({ signInPage }, expectedError) => {
//   await signInPage.verifyErrorMessage(expectedError);
// });

Then(
  "The user sees signin error message {string}",
  async ({ signInPage, page }, expectedError) => {
    // Check if it's browser validation message
    if (expectedError === "Please fill out this field") {
      // Check username field first
      const usernameValidation = await page
        .locator('#id_username, input[name="username"]')
        .evaluate((el) => el.validationMessage);

      // Explicit check: validationMessage is not empty and not null
      if (usernameValidation && usernameValidation.length > 0) {
        expect(usernameValidation).toContain("fill");
        console.log("✅ Username validation triggered:", usernameValidation);
      } else {
        // Check password field
        const passwordValidation = await page
          .locator('#id_password, input[name="password"]')
          .evaluate((el) => el.validationMessage);

        // Explicit check: validationMessage is not empty and not null
        if (passwordValidation && passwordValidation.length > 0) {
          expect(passwordValidation).toContain("fill");
          console.log("✅ Password validation triggered:", passwordValidation);
        } else {
          throw new Error("No validation message found on either field");
        }
      }
    } else {
      // Server-side error message
      await signInPage.verifyErrorMessage(expectedError);
    }
  },
);

// ========================================
// VERIFICATION - REDIRECTS (Context-specific for signin)
// ========================================

Then("The user lands on homepage after signin", async ({ page }) => {
  await page.waitForURL(/.*home.*/);
});

Then("The user is taken to registration page from signin", async ({ page }) => {
  await page.waitForURL(/.*register.*/);
});

// ========================================
// VERIFICATION - PROTECTED MODULE
// ========================================

// ========================================
// VERIFICATION - PROTECTED MODULE
// ========================================

When("the user navigates directly to {string}", async ({ page }, moduleURL) => {
  await page.goto(moduleURL, {
    waitUntil: "domcontentloaded",
    timeout: 30000,
  });
  console.log(`✅ Navigated directly to ${moduleURL}`);
});

Then(
  "the unauthenticated user should be redirected to home page",
  async ({ page, signInPage }) => {
    await expect(page).toHaveURL("/home");
    await expect(signInPage.authMessage).toBeVisible();
    await expect(signInPage.authMessage).toHaveText("You are not logged in");
    console.log("✅ User was redirected to home page");
  },
);
