import { createBdd } from "playwright-bdd";
import { logger } from "../utils/Logger.js"; // ✅ ADD THIS!
import { expect } from "@playwright/test";

const { Given, When, Then } = createBdd();
/* -------------------- Navigation -------------------- */
Given("the user is on the Sign In page", async ({ signInPage }) => {
  await signInPage.openSignInPage();
});

// With Excel data
When(
  "the user enters signin credentials from {string} and {int}",
  async function ({ signInPage, excelReader }, sheetName, rowNumber) {
    const data = await excelReader.readExcel(sheetName, rowNumber);
    //console.log("Excel data:", data);
    this.expectedUsername = data.Username;
    await signInPage.enterCredentials(data.Username, data.Password);
  },
);

// ========================================
// ACTIONS - BUTTONS
// ========================================

When("the user clicks Login button", async ({ signInPage, page }) => {
  await signInPage.clickLogin();
});

Then("the user lands on homepage after signin", async ({ page }) => {
  await expect(page).toHaveURL("/home"); // adjust to your actual homepage URL
});

Then(
  "the user should see username displayed in header",
  async function ({ signInPage }) {
    const displayedName = await signInPage.getUsernameFromHeader(); // implement in page object
    expect(displayedName.toLowerCase()).toBe(
      this.expectedUsername.toLowerCase(),
    );
  },
);

//==========
When(
  "the user enters username {string} and password {string}",
  async ({ signInPage }, username, password) => {
    const resolvedUsername = username.replace(/<space>/g, " ");
    const resolvedPassword = password.replace(/<space>/g, " ");
    await signInPage.enterUsername(resolvedUsername);
    await signInPage.enterPassword(resolvedPassword);
  },
);

When("clicks on the Login button", async ({ signInPage }) => {
  await signInPage.clickLogin();
});

When(
  "the user submits the login form with username {string} and password {string}",
  async ({ signInPage }, username, password) => {
    const cleanUsername = username?.trim() || "";
    const cleanPassword = password?.trim() || "";
    await signInPage.enterCredentials(cleanUsername, cleanPassword);
  },
);

// =================== SQL INJECTION TESTS ===================
When(
  "the user enters SQL injection payload {string} in username field",
  async ({ signInPage }, payload) => {
    await signInPage.enterUsername(payload);
  },
);

When(
  "the user enters SQL injection payload {string} in password field",
  async ({ signInPage }, payload) => {
    await signInPage.enterPassword(payload);
  },
);

/* -------------------- Assertions -------------------- */
Then(
  "the user should be redirected to the home page",
  async ({ signInPage, page }) => {
    // Wait for navigation to complete
    await page.waitForURL(/.*home/, { timeout: 5000 });

    // Verify we're on the home page
    expect(page.url()).toContain("home");
  },
);

Then(
  "an authentication error message {string} should be displayed",
  async ({ signInPage }, expectedMessage) => {
    const actualMessage = await signInPage.getAuthMessage();
    expect(actualMessage.trim()).toBe(expectedMessage);
  },
);

/* -------------------- Assertions -------------------- */
Then(
  "the validation message {string} should be displayed",
  async ({ signInPage }, expectedMessage) => {
    const userMsg = await signInPage.getUsernameValidationMessage();
    const passMsg = await signInPage.getPasswordValidationMessage();

    // 2. Pick the one that isn't empty (prioritizing username)
    const actualMessage = userMsg || passMsg;
    // 3. Assert
    expect(actualMessage).toBe(expectedMessage);
  },
);

Then("the login should fail securely", async ({ page, signInPage }) => {
  // user must NOT reach authenticated area
  await expect(page).not.toHaveURL(/home/);

  // application must show controlled error
  await expect(signInPage.authMessage).toBeVisible();
});

Then("no database error details should be exposed", async ({ signInPage }) => {
  const message = await signInPage.getAuthMessage();
  expect(message).not.toMatch(/sql|syntax|exception|database|query|stack/i);
});

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
