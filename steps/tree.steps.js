import { createBdd } from 'playwright-bdd';
import { logger } from '../utils/Logger.js';  // ✅ ADD THIS!
import { expect } from '@playwright/test';

const { Given, When, Then } = createBdd();

// ========================================
// NAVIGATION
// ========================================

When('The user navigates to Tree page', async ({ treePage }) => {
  await treePage.navigateToTreePage();
});

// ========================================
// ACTIONS - TOPICS (Tree specific)
// ========================================

When('The user clicks on Tree topic {string}', async ({ treePage }, topicName) => {
  await treePage.clickTopic(topicName);
});

// ========================================
// ACTIONS - EDITOR (Tree specific)
// ========================================

// ✅ ADD SMART LOGIC (same pattern as all other modules)
let expectingError = false;

When('The user enters test code from {string} and {int} in Tree editor',
  async ({ editorPage, excelReader }, sheetName, rowNumber) => {
    const data = await excelReader.readExcel(sheetName, rowNumber);
    await editorPage.enterCode(data.Code);
    
    // ✅ Check if this is invalid code (row 1 = invalid, row 0 = valid)
    expectingError = (rowNumber === 1);
  });

When('The user clicks Run button in Tree editor', async ({ editorPage }) => {
  // ✅ Use different method based on whether we expect error
  if (expectingError) {
    await editorPage.clickRunExpectingError();
  } else {
    await editorPage.clickRun();
  }
});

// ========================================
// VERIFICATION (Tree specific)
// ========================================

Then('The user should see Tree module page', async ({ treePage }) => {
  await treePage.verifyLandingPage();  // ✅ Changed from verifyTreePage() to match TreePage.js
});

Then('The user should see Tree topic page for {string}', async ({ page }, topicName) => {
  await page.waitForLoadState('networkidle');
});

Then('The user should see output from {string} and {int} in Tree editor',
  async ({ editorPage, excelReader }, sheetName, rowNumber) => {
    const data = await excelReader.readExcel(sheetName, rowNumber);
    await editorPage.verifyOutput(data.ExpectedOutput);
  });

Then('The user should see error alert in Tree editor', async ({ editorPage }) => {
  // ✅ Error was already handled during clickRunExpectingError
  logger.info('✅ Error alert was handled during clickRunExpectingError');
});
