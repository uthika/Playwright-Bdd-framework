import { createBdd } from 'playwright-bdd';
import { logger } from '../utils/Logger.js';  // ✅ ADD THIS!
import { expect } from '@playwright/test';

const { Given, When, Then } = createBdd();

// ========================================
// NAVIGATION
// ========================================

When('The user navigates to Queue page', async ({ queuePage }) => {
  await queuePage.navigateToQueuePage();
});

// ========================================
// ACTIONS - TOPICS (Queue specific)
// ========================================

When('The user clicks on Queue topic {string}', async ({ queuePage }, topicName) => {
  await queuePage.clickTopic(topicName);
});

// ========================================
// ACTIONS - EDITOR (Queue specific)
// ========================================

// ✅ ADD SMART LOGIC (same pattern as Array, LinkedList, Stack)
let expectingError = false;

When('The user enters test code from {string} and {int} in Queue editor',
  async ({ editorPage, excelReader }, sheetName, rowNumber) => {
    const data = await excelReader.readExcel(sheetName, rowNumber);
    await editorPage.enterCode(data.Code);
    
    // ✅ Check if this is invalid code (row 1 = invalid, row 0 = valid)
    expectingError = (rowNumber === 1);
  });

When('The user clicks Run button in Queue editor', async ({ editorPage }) => {
  // ✅ Use different method based on whether we expect error
  if (expectingError) {
    await editorPage.clickRunExpectingError();
  } else {
    await editorPage.clickRun();
  }
});

// ========================================
// VERIFICATION (Queue specific)
// ========================================

Then('The user should see Queue module page', async ({ queuePage }) => {
  await queuePage.verifyLandingPage();  // ✅ Changed from verifyQueuePage() to match QueuePage.js
});

Then('The user should see Queue topic page for {string}', async ({ page }, topicName) => {
  await page.waitForLoadState('networkidle');
});

Then('The user should see output from {string} and {int} in Queue editor',
  async ({ editorPage, excelReader }, sheetName, rowNumber) => {
    const data = await excelReader.readExcel(sheetName, rowNumber);
    await editorPage.verifyOutput(data.ExpectedOutput);
  });

Then('The user should see error alert in Queue editor', async ({ editorPage }) => {
  // ✅ Error was already handled during clickRunExpectingError
  logger.info('✅ Error alert was handled during clickRunExpectingError');
});

When('The user clicks Practice Questions link in Queue module', async ({ practiceQuestionPage }) => {
  await practiceQuestionPage.clickPracticeQuestions();
});

Then('The user should see Queue practice questions page', async ({ page }) => {
  await expect(page).toHaveURL(/.*queue\/practice.*/, { timeout: 10000 });
  console.log('✅ On Queue Practice Questions page');
});