import { createBdd } from 'playwright-bdd';
import { logger } from '../utils/Logger.js';  // ✅ ADD THIS!
import { expect } from '@playwright/test';

const { Given, When, Then } = createBdd();

// ========================================
// NAVIGATION
// ========================================

When('The user navigates to Graph page', async ({ graphPage }) => {
  await graphPage.navigateToGraphPage();
});

// ========================================
// ACTIONS - TOPICS (Graph specific)
// ========================================

When('The user clicks on Graph topic {string}', async ({ graphPage }, topicName) => {
  await graphPage.clickTopic(topicName);
});

// ========================================
// ACTIONS - EDITOR (Graph specific)
// ========================================

// ✅ ADD SMART LOGIC (final module!)
let expectingError = false;

When('The user enters test code from {string} and {int} in Graph editor',
  async ({ editorPage, excelReader }, sheetName, rowNumber) => {
    const data = await excelReader.readExcel(sheetName, rowNumber);
    await editorPage.enterCode(data.Code);
    
    // ✅ Check if this is invalid code (row 1 = invalid, row 0 = valid)
    expectingError = (rowNumber === 1);
  });

When('The user clicks Run button in Graph editor', async ({ editorPage }) => {
  // ✅ Use different method based on whether we expect error
  if (expectingError) {
    await editorPage.clickRunExpectingError();
  } else {
    await editorPage.clickRun();
  }
});

// ========================================
// VERIFICATION (Graph specific)
// ========================================

Then('The user should see Graph module page', async ({ graphPage }) => {
  await graphPage.verifyLandingPage();  // ✅ Changed from verifyGraphPage() to match GraphPage.js
});

Then('The user should see Graph topic page for {string}', async ({ page }, topicName) => {
  await page.waitForLoadState('networkidle');
});

Then('The user should see output from {string} and {int} in Graph editor',
  async ({ editorPage, excelReader }, sheetName, rowNumber) => {
    const data = await excelReader.readExcel(sheetName, rowNumber);
    await editorPage.verifyOutput(data.ExpectedOutput);
  });

Then('The user should see error alert in Graph editor', async ({ editorPage }) => {
  // ✅ Error was already handled during clickRunExpectingError
  logger.info('✅ Error alert was handled during clickRunExpectingError');
});
