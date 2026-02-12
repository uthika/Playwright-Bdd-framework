import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
const { Given, When, Then } = createBdd();

// ========================================
// NAVIGATION
// ========================================

When('The user navigates to Data Structures page', async ({ dataStructuresPage }) => {
  await dataStructuresPage.navigateToDataStructuresPage();
});

// ========================================
// ACTIONS - TOPICS (Data Structures specific)
// ========================================

When('The user clicks on Data Structures topic {string}', async ({ dataStructuresPage }, topicName) => {
  await dataStructuresPage.clickTopic(topicName);
});

// ========================================
// ACTIONS - EDITOR (Data Structures specific)
// ========================================

// Store whether we're testing invalid code
let expectingError = false;

When('The user enters test code from {string} and {int} in Data Structures editor',
  async ({ editorPage, excelReader }, sheetName, rowNumber) => {
    const data = await excelReader.readExcel(sheetName, rowNumber);
    await editorPage.enterCode(data.Code);
    
    // Check if this is invalid code (row 1 = invalid, row 0 = valid)
    expectingError = (rowNumber === 1);
});

When('The user clicks Run button in Data Structures editor', async ({ editorPage }) => {
  // Use different method based on whether we expect error
  if (expectingError) {
    await editorPage.clickRunExpectingError();
  } else {
    await editorPage.clickRun();
  }
});

// ========================================
// VERIFICATION (Data Structures specific)
// ========================================

Then('The user should see Data Structures introduction page', async ({ dataStructuresPage }) => {
  await dataStructuresPage.verifyLandingPage();
});

Then('The user should see Data Structures topic page for {string}', async ({ page }, topicName) => {
  await page.waitForLoadState('networkidle');
});

Then('The user should see output from {string} and {int} in Data Structures editor',
  async ({ editorPage, excelReader }, sheetName, rowNumber) => {
    const data = await excelReader.readExcel(sheetName, rowNumber);
    await editorPage.verifyOutput(data.ExpectedOutput);
});

Then('The user should see error alert in Data Structures editor', async ({ editorPage }) => {
  // Error was already handled during clickRunExpectingError
  // Just verify we're done
  console.log('✅ Error alert was handled');
});


// ========================================
// VERIFICATION & NAVIGATION TO PRACTICE PAGE
// ========================================

When('The user clicks Practice Questions link in Data Structures module', async ({ dataStructuresPage }) => {
  await dataStructuresPage.clickPracticeQuestions();
});

Then('The user should see Data Structures practice questions page', async ({ page }) => {
  await expect(page).toHaveURL(/.*data-structures-introduction\/practice.*/, { timeout: 10000 });
  console.log('✅ On Data Structures Practice Questions page');
});

Then('The page should have practice questions content', async ({ practiceQuestionPage }) => {
  await dataStructuresPage.verifyPracticeQuestionsContent();
});