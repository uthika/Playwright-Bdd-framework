import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import dotenv from 'dotenv';
const { Given, When, Then } = createBdd();
// Load environment variables
dotenv.config();

// ========================================
// NAVIGATION - WITHOUT LOGIN
// ========================================

Given('The user opens the DS Algo Portal homepage', async ({ homePage }) => {
  await homePage.navigateToHomepage();
});

Given('The user is on the homepage without login', async ({ homePage }) => {
  await homePage.navigateToHomepage();
});

// Navigate directly to /home (where dropdown exists)
Given('The user is on the home page without login', async ({ page }) => {
  await page.goto('/home', { waitUntil: 'domcontentloaded', timeout: 30000 });
  // Wait for page to load
  await page.waitForSelector('.navbar-brand', { timeout: 15000 });
});

// ========================================
// NAVIGATION - WITH LOGIN (COMMON - used by all modules)
// ========================================

Given('The user is logged in and on Home page', async ({ page }) => {
  await page.goto('/home', { waitUntil: 'domcontentloaded', timeout: 30000 });
});

// ========================================
// VERIFICATION - HOMEPAGE ELEMENTS
// ========================================

Then('The user should see the application homepage', async ({ homePage }) => {
  await homePage.verifyHomepage();
});

Then('The user should see Get Started button on homepage', async ({ homePage }) => {
  await homePage.verifyGetStartedButton();
});

Then('The user should see Sign in link on homepage', async ({ homePage }) => {
  await homePage.verifySignInLink();
});

Then('The user should see Register link on homepage', async ({ homePage }) => {
  await homePage.verifyRegisterLink();
});

Then('The user should see Sign out link on homepage', async ({ homePage }) => {
  await homePage.verifySignOutLink();
});

Then('The user should see NumpyNinja link in header', async ({ homePage }) => {
  await homePage.verifyNumpyNinjaLink();
});

// ========================================
// ACTIONS - MAIN GET STARTED BUTTON
// ========================================

When('The user clicks Get Started button on homepage', async ({ homePage, page }) => {
  await homePage.clickGetStarted();
});

// ✅ NEW: Verify redirect to /home
Then('The user should be redirected to home page', async ({ page }) => {
  await expect(page).toHaveURL(/.*\/home.*/, { timeout: 10000 });
  console.log('✅ Redirected to /home');
});

// ========================================
// ACTIONS - MODULE GET STARTED BUTTONS (NEW)
// ========================================

When('The user clicks on {string} Get Started button', async ({ homePage }, moduleName) => {
  console.log(`🔍 Looking for "${moduleName}" Get Started button...`);
  
  // Map module names to HomePage methods
  switch(moduleName) {
    case 'Data Structures-Introduction':
      await homePage.clickDataStructuresGetStarted();
      break;
    case 'Array':
      await homePage.clickArrayGetStarted();
      break;
    case 'Linked List':
      await homePage.clickLinkedListGetStarted();
      break;
    case 'Stack':
      await homePage.clickStackGetStarted();
      break;
    case 'Queue':
      await homePage.clickQueueGetStarted();
      break;
    case 'Tree':
      await homePage.clickTreeGetStarted();
      break;
    case 'Graph':
      await homePage.clickGraphGetStarted();
      break;
    default:
      throw new Error(`Unknown module: ${moduleName}`);
  }
  
  console.log(`✅ Clicked "${moduleName}" Get Started button`);
});

// ========================================
// ACTIONS - DROPDOWN MENU
// ========================================

When('The user clicks on dropdown menu', async ({ homePage }) => {
  await homePage.clickDropdownMenu();
});

When('The user selects {string} from dropdown', async ({ homePage }, menuItem) => {
  await homePage.selectFromDropdown(menuItem);
});

// ========================================
// ACTIONS - MODULE GET STARTED BUTTONS (COMMON - from homepage)
// ========================================

When('The user clicks on Data Structures Get Started button from homepage', async ({ homePage }) => {
  await homePage.clickDataStructuresGetStarted();
});

When('The user clicks on Array Get Started button from homepage', async ({ homePage }) => {
  await homePage.clickArrayGetStarted();
});

When('The user clicks on Linked List Get Started button from homepage', async ({ homePage }) => {
  await homePage.clickLinkedListGetStarted();
});

When('The user clicks on Stack Get Started button from homepage', async ({ homePage }) => {
  await homePage.clickStackGetStarted();
});

When('The user clicks on Queue Get Started button from homepage', async ({ homePage }) => {
  await homePage.clickQueueGetStarted();
});

When('The user clicks on Tree Get Started button from homepage', async ({ homePage }) => {
  await homePage.clickTreeGetStarted();
});

When('The user clicks on Graph Get Started button from homepage', async ({ homePage }) => {
  await homePage.clickGraphGetStarted();
});

// ========================================
// ACTIONS - LOGOUT (COMMON)
// ========================================

When('The user clicks Sign out link from header', async ({ homePage }) => {
  await homePage.clickSignOut();
});

// ========================================
// VERIFICATION - MESSAGES (COMMON)
// ========================================

Then('The user should see alert message {string}', async ({ homePage }, expectedMessage) => {
  await homePage.verifyAlertMessage(expectedMessage);
});

// ========================================
// VERIFICATION - LOGGED IN STATE (COMMON)
// ========================================

Then('The user should see username displayed in header', async ({ homePage }) => {
  await homePage.verifyUsernameDisplayed();
});

// ========================================
// VERIFICATION - PAGE NAVIGATION (COMMON)
// ========================================

Then('The user should be on data structures introduction page', async ({ page }) => {
  await page.waitForURL(/.*data-structures-introduction.*/);
});

Then('The user should be on {string} module page', async ({ page }, moduleName) => {
  const moduleUrl = moduleName.toLowerCase().replace(/\s+/g, '-').replace('data-structures-introduction', 'data-structures-introduction');
  await page.waitForURL(new RegExp(`.*${moduleUrl}.*`));
});
Then('The user should be on {string} page', async ({ page }, pageName) => {
  await page.waitForURL(new RegExp(`.*${pageName}.*`), { timeout: 10000 });
  console.log(`✅ Navigated to ${pageName} page`);
});

// ========================================
// ACTIONS - TRY HERE BUTTON (COMMON - on topic pages)
// ========================================

When('The user clicks Try Here button on topic page', async ({ page }) => {
  await page.click('a:has-text("Try here"), button:has-text("Try here")');
});

// ========================================
// ✅ NEW: ACTIONS - RE-LOGIN AFTER LOGOUT
// ========================================


When('The user logs in with credentials from environment', async ({ homePage, signInPage, page }) => {
  const username = process.env.TEST_USERNAME;
  const password = process.env.TEST_PASSWORD;
  
  if (!username || !password) {
    throw new Error('❌ TEST_USERNAME or TEST_PASSWORD not found in .env file');
  }
  
  console.log(`🔐 Logging in with username: ${username}`);
  
  // Click Sign in link (using HomePage fixture)
  await homePage.signInLink.click();
  await page.waitForURL(/.*login.*/, { timeout: 10000 });
  
  // Use SignInPage fixture to login
  await signInPage.usernameInput.fill(username);
  await signInPage.passwordInput.fill(password);
  await signInPage.loginButton.click();
  
  // Wait for redirect to home
  await page.waitForURL(/.*home.*/, { timeout: 10000 });


  // CRITICAL: Save authentication state for Phase 5
  const storageStatePath = process.env.STORAGE_STATE || '.auth/user.json';
  await page.context().storageState({ path: storageStatePath });
  
  console.log(`✅ Successfully logged in as ${username}`);
  console.log(`💾 Saved authentication state to ${storageStatePath}`);
  
  console.log(`✅ Successfully logged in as ${username}`);
});


Then('The user should be logged in successfully', async ({ homePage, page }) => {
  // Verify we're on home page
  await expect(page).toHaveURL(/.*home.*/, { timeout: 10000 });
  
  // Verify Sign out link is visible (using HomePage fixture)
  await expect(homePage.signOutLink).toBeVisible({ timeout: 5000 });
  
  console.log('✅ User is logged in successfully');
});

// ========================================
// CROSS-MODULE NAVIGATION
// ========================================

Given('The user is logged in and on {string} page', async ({ page }, moduleName) => {
  const moduleUrl = moduleName.toLowerCase().replace(/\s+/g, '-');
  await page.goto(`/${moduleUrl}`, { waitUntil: 'domcontentloaded', timeout: 30000 });
  console.log(`✅ Navigated to ${moduleName} page`);
});

When('The user clicks NumpyNinja logo', async ({ homePage }) => {
  await homePage.clickNumpyNinjaLogo();
  console.log('✅ Clicked NumpyNinja logo');
});

Then('The user should be on the landing page', async ({ page }) => {
  await expect(page).toHaveURL(/.*herokuapp\.com\/?$/, { timeout: 10000 });
  console.log('✅ User is on the landing page');
});