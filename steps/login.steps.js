import { createBdd } from "playwright-bdd";
import { logger } from "../utils/Logger.js"; // ✅ ADD THIS!
import { expect } from "@playwright/test";

const { Given, When, Then } = createBdd();
/* -------------------- Navigation -------------------- */
Given("the user is on the Sign In page", async ({ loginPage }) => {
  await loginPage.openSignInPage();
});

/* -------------------- Actions -------------------- */
When("the user logs in with valid credentials", async ({ loginPage }) => {
  await loginPage.login("Degima236", "Numpyds@236");
});

When(
  "the user enters username {string} and password {string}",
  async ({ loginPage }, username, password) => {
    const resolvedUsername = username.replace(/_/g, " ");
    const resolvedPassword = password.replace(/_/g, " ");
    await loginPage.enterUsername(resolvedUsername);
    await loginPage.enterPassword(resolvedPassword);
  },
);

When("clicks on the Login button", async ({ loginPage }) => {
  await loginPage.clickLogin();
});

When(
  "the user submits the login form with username {string} and password {string}",
  async ({ loginPage }, username, password) => {
    const cleanUsername = username?.trim() || "";
    const cleanPassword = password?.trim() || "";
    await loginPage.login(cleanUsername, cleanPassword);
  },
);

// =================== SQL INJECTION TESTS ===================
When(
  "the user enters SQL injection payload {string} in username field",
  async ({ loginPage }, payload) => {
    await loginPage.enterUsername(payload);
  },
);

When(
  "the user enters SQL injection payload {string} in password field",
  async ({ loginPage }, payload) => {
    await loginPage.enterPassword(payload);
  },
);

/* -------------------- Assertions -------------------- */
Then(
  "the user should be redirected to the home page",
  async ({ loginPage, page }) => {
    // Wait for navigation to complete
    await page.waitForURL(/.*home/, { timeout: 5000 });

    // Verify we're on the home page
    expect(page.url()).toContain("home");
  },
);

Then(
  "an authentication error message {string} should be displayed",
  async ({ loginPage }, expectedMessage) => {
    const actualMessage = await loginPage.getAuthErrorMessage();
    expect(actualMessage.trim()).toBe(expectedMessage);
  },
);

/* -------------------- Assertions -------------------- */
Then(
  "the validation message {string} should be displayed",
  async ({ loginPage }, expectedMessage) => {
    const userMsg = await loginPage.getUsernameValidationMessage();
    const passMsg = await loginPage.getPasswordValidationMessage();

    // 2. Pick the one that isn't empty (prioritizing username)
    const actualMessage = userMsg || passMsg;
    // 3. Assert
    expect(actualMessage).toBe(expectedMessage);
  },
);

Then("the login should fail securely", async ({ loginPage }) => {
  const message = await loginPage.getAuthErrorMessage();
  expect(message).toBeTruthy(); // ensures an error is displayed
});

Then("no database error details should be exposed", async ({ loginPage }) => {
  const message = await loginPage.getAuthErrorMessage();
  expect(message).not.toMatch(/sql|syntax|exception|database|query|stack/i);
});
