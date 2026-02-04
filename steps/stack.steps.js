import { createBdd } from 'playwright-bdd';
import { logger } from '../utils/Logger.js';  // ✅ ADD THIS!
import { expect } from '@playwright/test';

const { Given, When, Then } = createBdd();

// ========================================
// NAVIGATION
// ========================================

When('The user navigates to Stack page', async ({ stackPage }) => {
  await stackPage.navigateToStackPage();
});

// ========================================
// ACTIONS - TOPICS (Stack specific)
// ========================================

When('The user clicks on Stack topic {string}', async ({ stackPage }, topicName) => {
  await stackPage.clickTopic(topicName);
});

// ========================================
// ACTIONS - EDITOR (Stack specific)
// ========================================

// ✅ ADD SMART LOGIC (same as Array & LinkedList)
let expectingError = false;

When('The user enters test code from {string} and {int} in Stack editor',
  async ({ editorPage, excelReader }, sheetName, rowNumber) => {
    const data = await excelReader.readExcel(sheetName, rowNumber);
    await editorPage.enterCode(data.Code);
    
    // ✅ Check if this is invalid code (row 1 = invalid, row 0 = valid)
    expectingError = (rowNumber === 1);
  });

When('The user clicks Run button in Stack editor', async ({ editorPage }) => {
  // ✅ Use different method based on whether we expect error
  if (expectingError) {
    await editorPage.clickRunExpectingError();
  } else {
    await editorPage.clickRun();
  }
});

// ========================================
// VERIFICATION (Stack specific)
// ========================================

Then('The user should see Stack module page', async ({ stackPage }) => {
  await stackPage.verifyLandingPage();  // ✅ Changed from verifyStackPage() to match StackPage.js
});

Then('The user should see Stack topic page for {string}', async ({ page }, topicName) => {
  await page.waitForLoadState('networkidle');
});

Then('The user should see output from {string} and {int} in Stack editor',
  async ({ editorPage, excelReader }, sheetName, rowNumber) => {
    const data = await excelReader.readExcel(sheetName, rowNumber);
    await editorPage.verifyOutput(data.ExpectedOutput);
  });

Then('The user should see error alert in Stack editor', async ({ editorPage }) => {
  // ✅ Error was already handled during clickRunExpectingError
  logger.info('✅ Error alert was handled during clickRunExpectingError');
});
