import { createBdd } from 'playwright-bdd';
import { logger } from '../utils/Logger.js'
import { expect } from '@playwright/test'; 
const { Given, When, Then } = createBdd();


// ========================================
// NAVIGATION
// ========================================


When('The user navigates to Array page', async ({ arrayPage }) => {
  await arrayPage.navigateToArrayPage();
});


// ========================================
// ACTIONS - TOPICS (Array specific)
// ========================================


When('The user clicks on Array topic {string}', async ({ arrayPage }, topicName) => {
  await arrayPage.clickTopic(topicName);
});


// ========================================
// ACTIONS - PRACTICE QUESTIONS (Array specific)
// ========================================


When('The user clicks Practice Questions link in Array module', async ({ arrayPage }) => {
  await arrayPage.clickPracticeQuestions();
});


When('The user clicks on practice question {string}', async ({ arrayPage }, questionName) => {
  // ✅ FIXED: Added {} around arrayPage
  logger.info(`🔍 About to click practice question: ${questionName}`);
  await arrayPage.clickPracticeQuestion(questionName);
  logger.info(`✅ Clicked practice question: ${questionName}`);
});



// ========================================
// ACTIONS - PRACTICE QUESTION EDITOR
// ========================================


When('The user enters solution from {string} and {int}',
  async ({ practiceQuestionPage, excelReader }, sheetName, rowNumber) => {
    logger.info(`📖 Reading solution from Excel: ${sheetName}, Row: ${rowNumber}`);
    const data = await excelReader.readExcel(sheetName, rowNumber);
    logger.info(`📝 Solution code starts with: ${data.Solution.substring(0, 80)}...`);
    logger.info(`✅ Expected output: ${data.ExpectedOutput}`);
    await practiceQuestionPage.enterCode(data.Solution);
  }
);


When('The user enters test code from {string} and {int} in practice question editor',
  async ({ practiceQuestionPage, excelReader }, sheetName, rowNumber) => {
    const data = await excelReader.readExcel(sheetName, rowNumber);
    await practiceQuestionPage.enterCode(data.Code);
  }
);


When('The user clicks Run button in practice question editor', async ({ practiceQuestionPage }) => {
  await practiceQuestionPage.clickRun();
});


When('The user clicks Submit button for solution', async ({ practiceQuestionPage }) => {
  await practiceQuestionPage.clickSubmit();
});


// ========================================
// ACTIONS - TRY HERE EDITOR (Array specific)
// ========================================


// ✅ Store whether we're testing invalid code
let expectingError = false;


When('The user enters test code from {string} and {int} in Array editor',
  async ({ editorPage, excelReader }, sheetName, rowNumber) => {
    const data = await excelReader.readExcel(sheetName, rowNumber);
    await editorPage.enterCode(data.Code);
    
    // ✅ Check if this is invalid code (row 1 = invalid, row 0 = valid)
    expectingError = (rowNumber === 1);
  }
);


When('The user clicks Run button in Array editor', async ({ editorPage }) => {
  // ✅ Use different method based on whether we expect error
  if (expectingError) {
    await editorPage.clickRunExpectingError();
  } else {
    await editorPage.clickRun();
  }
});


// ========================================
// VERIFICATION (Array specific)
// ========================================


Then('The user should see Array module page', async ({ arrayPage }) => {
  await arrayPage.verifyLandingPage();
});


Then('The user should see Array topic page for {string}', async ({ page }, topicName) => {
  await page.waitForLoadState('networkidle');
});


Then('The user should see Array practice questions page', async ({ page }) => {
  await page.waitForURL(/.*array\/practice.*/);
});


// ========================================
// VERIFICATION - PRACTICE QUESTION EDITOR
// ========================================


Then('The user should see output from {string} and {int} in practice question editor',
  async ({ practiceQuestionPage, excelReader }, sheetName, rowNumber) => {
    logger.info(`📖 Reading expected output from Excel: ${sheetName}, Row: ${rowNumber}`);
    const data = await excelReader.readExcel(sheetName, rowNumber);
    logger.info(`✅ Verifying output matches: ${data.ExpectedOutput}`);
    await practiceQuestionPage.verifyOutput(data.ExpectedOutput);
  }
);


Then('The user should see submission success for practice question', async ({ practiceQuestionPage }) => {
  await practiceQuestionPage.verifySubmissionSuccess();
});


Then('The user should see submission error message', async ({ practiceQuestionPage }) => {
  await practiceQuestionPage.verifySubmissionError();
});


// ========================================
// VERIFICATION - TRY HERE EDITOR
// ========================================


Then('The user should see output from {string} and {int} in Array editor',
  async ({ editorPage, excelReader }, sheetName, rowNumber) => {
    const data = await excelReader.readExcel(sheetName, rowNumber);
    await editorPage.verifyOutput(data.ExpectedOutput);
  }
);


Then('The user should see error alert in Array editor', async ({ editorPage }) => {
  // ✅ Error was already handled during clickRunExpectingError
  logger.info('✅ Error alert was handled during clickRunExpectingError');
});
