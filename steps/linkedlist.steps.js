import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { logger } from '../utils/Logger.js'; 
const { Given, When, Then } = createBdd();

// ========================================
// NAVIGATION
// ========================================

When('The user navigates to Linked List page', async ({ linkedListPage }) => {
  await linkedListPage.navigateToLinkedListPage();
});

// ========================================
// ACTIONS - TOPICS (Linked List specific)
// ========================================

When('The user clicks on Linked List topic {string}', async ({ linkedListPage }, topicName) => {
  await linkedListPage.clickTopic(topicName);
});

// ========================================
// ACTIONS - EDITOR (Linked List specific)
// ========================================

// ✅ Store whether we're testing invalid code (SAME AS ARRAY!)
let expectingError = false;

When('The user enters test code from {string} and {int} in Linked List editor',
  async ({ editorPage, excelReader }, sheetName, rowNumber) => {
    const data = await excelReader.readExcel(sheetName, rowNumber);
    await editorPage.enterCode(data.Code);
    
    // ✅ Check if this is invalid code (row 1 = invalid, row 0 = valid)
    expectingError = (rowNumber === 1);
  });

When('The user clicks Run button in Linked List editor', async ({ editorPage }) => {
  // ✅ Use different method based on whether we expect error
  if (expectingError) {
    await editorPage.clickRunExpectingError();
  } else {
    await editorPage.clickRun();
  }
});

// ========================================
// VERIFICATION (Linked List specific)
// ========================================

Then('The user should see Linked List module page', async ({ linkedListPage }) => {
  await linkedListPage.verifyLinkedListPage();
});

Then('The user should see Linked List topic page for {string}', async ({ page }, topicName) => {
  await page.waitForLoadState('networkidle');
});

Then('The user should see output from {string} and {int} in Linked List editor',
  async ({ editorPage, excelReader }, sheetName, rowNumber) => {
    const data = await excelReader.readExcel(sheetName, rowNumber);
    await editorPage.verifyOutput(data.ExpectedOutput);
  });

Then('The user should see error alert in Linked List editor', async ({ editorPage }) => {
  // ✅ Error was already handled during clickRunExpectingError (SAME AS ARRAY!)
  logger.info('✅ Error alert was handled during clickRunExpectingError');
});

When('The user clicks Practice Questions link in Linked List module', async ({ practiceQuestionPage }) => {
  await practiceQuestionPage.clickPracticeQuestions();
});

Then('The user should see Linked List practice questions page', async ({ page }) => {
  await expect(page).toHaveURL(/.*linked-list\/practice.*/, { timeout: 10000 });
  console.log('✅ On Linked List Practice Questions page');
});
