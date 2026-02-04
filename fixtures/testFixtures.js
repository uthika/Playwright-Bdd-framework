import { test as base } from 'playwright-bdd';
import { HomePage } from '../pages/HomePage.js';
import { RegistrationPage } from '../pages/RegistrationPage.js';
import { SignInPage } from '../pages/SignInPage.js';
import { EditorPage } from '../pages/EditorPage.js';
import { PracticeQuestionPage } from '../pages/PracticeQuestionPage.js';
import { DataStructuresPage } from '../pages/DataStructuresPage.js';
import { ArrayPage } from '../pages/ArrayPage.js';
import { LinkedListPage } from '../pages/LinkedListPage.js';
import { StackPage } from '../pages/StackPage.js';
import { QueuePage } from '../pages/QueuePage.js';
import { TreePage } from '../pages/TreePage.js';
import { GraphPage } from '../pages/GraphPage.js';
import { ExcelReader } from '../utils/ExcelReader.js';
import { logger } from '../utils/Logger.js';
import dotenv from 'dotenv';

dotenv.config();

// Extend base test with custom fixtures
export const test = base.extend({
  // Page Objects
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  
  registrationPage: async ({ page }, use) => {
    await use(new RegistrationPage(page));
  },
  
  signInPage: async ({ page }, use) => {
    await use(new SignInPage(page));
  },
  
  editorPage: async ({ page }, use) => {
    await use(new EditorPage(page));
  },
  
  practiceQuestionPage: async ({ page }, use) => {
    await use(new PracticeQuestionPage(page));
  },
  
  dataStructuresPage: async ({ page }, use) => {
    await use(new DataStructuresPage(page));
  },
  
  arrayPage: async ({ page }, use) => {
    await use(new ArrayPage(page));
  },
  
  linkedListPage: async ({ page }, use) => {
    await use(new LinkedListPage(page));
  },
  
  stackPage: async ({ page }, use) => {
    await use(new StackPage(page));
  },
  
  queuePage: async ({ page }, use) => {
    await use(new QueuePage(page));
  },
  
  treePage: async ({ page }, use) => {
    await use(new TreePage(page));
  },
  
  graphPage: async ({ page }, use) => {
    await use(new GraphPage(page));
  },
  
  // Utilities
  excelReader: async ({}, use) => {
    const excelPath = process.env.EXCEL_PATH || './testdata/TestData.xlsx';
    const reader = new ExcelReader(excelPath);
    await use(reader);
  },
  
  logger: async ({}, use) => {
    await use(logger);
  },
});

// Export expect from Playwright
export { expect } from '@playwright/test';

// This is required for playwright-bdd to recognize fixtures
export default test;//
