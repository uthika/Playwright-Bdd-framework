# 🧪 DSAlgo Playwright-BDD Test Automation Framework

<p align="center">
  <img src="https://img.shields.io/badge/Playwright-1.49+-45ba4b?style=for-the-badge&logo=playwright&logoColor=white" alt="Playwright">
  <img src="https://img.shields.io/badge/playwright--bdd-8.4.2-blue?style=for-the-badge" alt="playwright-bdd">
  <img src="https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/Cucumber-BDD-23D96C?style=for-the-badge&logo=cucumber&logoColor=white" alt="Cucumber">
  <img src="https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge" alt="License">
</p>

<p align="center">
  <strong>Enterprise-grade BDD test automation framework for the <a href="https://dsportalapp.herokuapp.com">DSAlgo Portal</a> application</strong>
</p>

<p align="center">
  <a href="#-features">Features</a> •
  <a href="#-quick-start">Quick Start</a> •
  <a href="#-running-tests">Running Tests</a> •
  <a href="#-project-structure">Project Structure</a> •
  <a href="#-reports">Reports</a> •
  <a href="#-contributing">Contributing</a>
</p>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Architecture](#-architecture)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Configuration](#-configuration)
- [Project Structure](#-project-structure)
- [Running Tests](#-running-tests)
- [Test Modules](#-test-modules)
- [Writing Tests](#-writing-tests)
- [Test Data Management](#-test-data-management)
- [Logging](#-logging)
- [Reports](#-reports)
- [CI/CD Integration](#-cicd-integration)
- [Troubleshooting](#-troubleshooting)
- [FAQ](#-faq)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🎯 Overview

This framework provides a comprehensive, production-ready test automation solution for the DSAlgo Portal educational platform. Built with **Playwright** and **playwright-bdd**, it follows BDD (Behavior-Driven Development) principles using Gherkin syntax for readable, maintainable test scenarios.

### What is DSAlgo Portal?

DSAlgo Portal is an educational web application that teaches data structures and algorithms through interactive lessons and coding exercises. This framework automates testing across all major modules including Arrays, Linked Lists, Stacks, Queues, Trees, and Graphs.

### Why This Framework?

| Challenge | Solution |
|-----------|----------|
| Complex authentication flows | Persistent auth state management with storage state |
| Data-driven testing needs | Excel-based test data with dynamic loading |
| Sequential test dependencies | Project-based execution with setup → modules → cleanup workflow |
| Readable test documentation | Gherkin scenarios with comprehensive step definitions |
| Debugging & observability | Winston structured logging, Allure reports, screenshots, videos, and trace files |

---

## ✨ Features

### Core Capabilities

| Feature | Description |
|---------|-------------|
| **BDD Testing** | Gherkin scenarios with playwright-bdd for human-readable tests |
| **Page Object Model** | Maintainable, reusable page components |
| **Data-Driven Testing** | Excel-based test data management (ExcelJS) |
| **Parallel Execution** | Multi-worker test execution for faster runs |
| **Cross-Browser Support** | Chromium, Firefox, and WebKit |
| **Authentication Management** | Reusable auth state across test sessions |
| **Structured Logging** | Winston-based logging with configurable levels and transports |
| **Rich Reporting** | Allure reports with screenshots, videos, and traces |

### Technical Highlights

- ✅ **ES6 Modules** — Modern JavaScript with import/export syntax
- ✅ **Custom Fixtures** — Extended Playwright fixtures for enhanced functionality
- ✅ **Winston Logger** — Professional logging with daily rotation and error tracking
- ✅ **Auto-retry Logic** — Built-in retry mechanisms for flaky tests
- ✅ **CI/CD Ready** — GitHub Actions integration
- ✅ **Code Editor Testing** — Automated testing of interactive code editors

---

## 🏗 Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        Test Execution Layer                      │
├─────────────────────────────────────────────────────────────────┤
│  Feature Files (.feature)  →  Step Definitions  →  Page Objects │
├─────────────────────────────────────────────────────────────────┤
│                         Core Components                          │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────────┐   │
│  │   Fixtures   │  │  Test Data   │  │  Utility Functions   │   │
│  │  (Custom)    │  │  (ExcelJS)   │  │ (Winston, Helpers)   │   │
│  └──────────────┘  └──────────────┘  └──────────────────────┘   │
├─────────────────────────────────────────────────────────────────┤
│                      Infrastructure Layer                        │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────────┐   │
│  │  Playwright  │  │ playwright-  │  │   Allure Reporter    │   │
│  │    Engine    │  │     bdd      │  │                      │   │
│  └──────────────┘  └──────────────┘  └──────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
```

### Execution Flow

```
┌─────────────┐     ┌─────────────┐     ┌─────────────────────┐     ┌─────────────┐
│   Setup     │ ──► │  Homepage   │ ──► │  Module Tests       │ ──► │  Cleanup    │
│  Project    │     │   Tests     │     │  (Parallel)         │     │  Project    │
├─────────────┤     ├─────────────┤     ├─────────────────────┤     ├─────────────┤
│ • Register  │     │ • Navigation│     │ • Array             │     │ • Logout    │
│ • Sign In   │     │ • UI Tests  │     │ • Linked List       │     │ • Cleanup   │
│ • Auth Save │     │             │     │ • Stack, Queue      │     │             │
│             │     │             │     │ • Tree, Graph       │     │             │
└─────────────┘     └─────────────┘     └─────────────────────┘     └─────────────┘
```

---

## 📦 Prerequisites

### Required Software

| Software | Version | Purpose | Installation |
|----------|---------|---------|--------------|
| **Node.js** | 18.x+ | Runtime environment | [Download](https://nodejs.org/) |
| **npm** | 9.x+ | Package manager | Included with Node.js |
| **Java** | 8+ | Allure reports | [Download](https://www.oracle.com/java/technologies/downloads/) |
| **Git** | Latest | Version control | [Download](https://git-scm.com/) |

### Verify Prerequisites

```bash
# Check Node.js version
node --version
# Expected: v18.x.x or higher

# Check npm version
npm --version
# Expected: 9.x.x or higher

# Check Java version (for Allure)
java -version
# Expected: openjdk version "1.8.x" or higher
```

---

## 🚀 Installation

### Step 1: Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/dsalgo-playwright-bdd-framework.git
cd dsalgo-playwright-bdd-framework
```

### Step 2: Install Dependencies

```bash
npm install
```

This installs all required packages including:
- `@playwright/test` — Browser automation
- `playwright-bdd` — BDD integration
- `exceljs` — Excel file handling
- `winston` — Structured logging
- `allure-playwright` — Report generation

### Step 3: Install Playwright Browsers

```bash
# Install all browsers (recommended)
npx playwright install

# Or install specific browser only
npx playwright install chromium
```

### Step 4: Install System Dependencies (Linux/CI)

```bash
# Required for headless execution on Linux
npx playwright install-deps
```

### Step 5: Verify Installation

```bash
# Check Playwright version
npx playwright --version
# Expected: Version 1.49.0 or higher

# Generate BDD specs
npm run bddgen

# Run a quick smoke test
npm run test:smoke
```

---

## ⚙️ Configuration

### Environment Variables

Create a `.env` file in the project root (optional):

```env
# Application URL
BASE_URL=https://dsportalapp.herokuapp.com

# Browser settings
HEADLESS=true
SLOW_MO=0

# Test settings
WORKERS=4
RETRIES=1
TIMEOUT=30000

# Logging
LOG_LEVEL=info
LOG_DIR=logs

# Reporting
ALLURE_RESULTS_DIR=reports/allure-results
SCREENSHOTS=only-on-failure
VIDEO=retain-on-failure
```

### Playwright Configuration

Key settings in `playwright.config.js`:

```javascript
export default defineConfig({
  testDir: './.features-gen',
  timeout: 30000,
  retries: process.env.CI ? 2 : 1,
  workers: process.env.CI ? 1 : 4,
  
  use: {
    baseURL: process.env.BASE_URL || 'https://dsportalapp.herokuapp.com',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
  },
  
  projects: [
    { name: 'setup', testMatch: /setup\.spec\.js/ },
    { name: 'modules', testMatch: /module.*\.spec\.js/, dependencies: ['setup'] },
    { name: 'cleanup', testMatch: /cleanup\.spec\.js/, dependencies: ['modules'] },
  ],
});
```

### Test Data Configuration

Test data is managed in `testdata/TestData.xlsx` with multiple sheets:

| Sheet Name | Purpose |
|------------|---------|
| `Credentials` | User registration and login data |
| `EditorTest` | Code snippets for Try Here editor testing |
| `ArrayPracticeSolutions` | Practice question solutions for Array module |
| `LinkedListPracticeSolutions` | Practice question solutions for Linked List module |
| *(additional sheets)* | Module-specific test data |

### Global Setup and Teardown

The framework uses global hooks to manage test environment initialization and cleanup:

#### **global-setup.js**
Runs **once before all tests** to:
- Create necessary directories (`reports/`, `screenshots/`, `videos/`, `.auth/`, `test-results/`)
- Authenticate user and save session state to `.auth/user.json`
- Ensures all tests start with a clean, authenticated environment

#### **global-teardown.js**
Runs **once after all tests** to:
- Logout from the application (cleanup session)
- Delete authentication state files (`.auth/user.json`)
- Clear browser cookies and storage
- Print test execution summary with report locations

These hooks ensure proper environment setup and cleanup, preventing test pollution and authentication issues across test runs.

---

## 📁 Project Structure

```
dsalgo-playwright-bdd-framework/
│
├── 📂 features/                    # BDD Feature Files
│   ├── 01_homepage.feature         # Homepage navigation tests
│   ├── 02_register.feature         # User registration scenarios
│   ├── 03_signin.feature           # Authentication tests
│   ├── 04_logout.feature           # Logout functionality
│   ├── 05_array.feature            # Array module tests
│   ├── 06_linkedlist.feature       # Linked List module tests
│   ├── 07_stack.feature            # Stack module tests
│   ├── 08_queue.feature            # Queue module tests
│   ├── 09_tree.feature             # Tree module tests
│   └── 10_graph.feature            # Graph module tests
│
├── 📂 steps/                       # Step Definitions
│   ├── Homepage.steps.js           # Homepage-specific steps
│   ├── Registration.steps.js       # Registration steps
│   ├── Signin.steps.js             # Sign-in steps
│   ├── Array.steps.js              # Array module steps
│   ├── LinkedList.steps.js         # Linked List module steps
│   ├── Stack.steps.js              # Stack module steps
│   ├── Queue.steps.js              # Queue module steps
│   ├── Tree.steps.js               # Tree module steps
│   ├── Graph.steps.js              # Graph module steps
│   └── Logout.steps.js             # Logout steps
│
├── 📂 pages/                       # Page Object Models
│   ├── HomePage.js                 # Homepage page object
│   ├── SignInPage.js               # Sign-in page object
│   ├── RegistrationPage.js         # Registration page object
│   ├── ArrayPage.js                # Array module page object
│   ├── LinkedListPage.js           # Linked List page object
│   ├── StackPage.js                # Stack page object
│   ├── QueuePage.js                # Queue page object
│   ├── TreePage.js                 # Tree page object
│   └── GraphPage.js                # Graph page object
│
├── 📂 fixtures/                    # Test Fixtures
│   └── testFixtures.js             # Custom Playwright fixtures
│
├── 📂 testdata/                    # Test Data
│   └── TestData.xlsx               # Excel-based test data
│
├── 📂 utils/                       # Utility Functions
│   ├── logger.js                   # Winston logger configuration
│   └── excelReader.js              # Excel data reader
│
├── 📂 logs/                        # Log Files (gitignored)
│   ├── error.log                   # Error-level logs only
│   └── combined.log                # All logs combined
│
├── 📂 .auth/                       # Authentication State (gitignored)
│   └── user.json                   # Stored auth state
│
├── 📂 reports/                     # Test Reports (gitignored)
│   ├── allure-results/             # Allure report data
│   ├── allure-report/              # Generated Allure report
│   ├── playwright-report/          # Playwright HTML report
│   └── test-results/               # Test artifacts (screenshots, videos)
│
├── 📄 global-setup.js              # Global setup - creates directories, auth state
├── 📄 global-teardown.js           # Global teardown - logout, cleanup auth files
├── 📄 .env                         # Environment variables
├── 📄 playwright.config.js         # Playwright configuration
├── 📄 package.json                 # Project dependencies
├── 📄 .gitignore                   # Git ignore rules
└── 📄 README.md                    # This file
```

---

## 🧪 Running Tests

### Quick Reference

| Command | Description |
|---------|-------------|
| `npm test` | Run all tests |
| `npm run test:report` | Run tests + open Allure report |
| `npm run test:quick` | Run without BDD regeneration |
| `npm run test:smoke` | Run smoke tests only |
| `npm run test:headed` | Run with visible browser |
| `npm run test:debug` | Step-by-step debug mode |
| `npm run test:ui` | Playwright UI mode |

### Complete Test Execution

```bash
# 🎯 RECOMMENDED: Run all tests with auto-generated report
npm run test:report

# Run all tests without report
npm test

# Quick run (skip BDD spec regeneration)
npm run test:quick
```

### Project-Specific Execution

```bash
# Run setup only (register + signin)
npm run test:setup

# Run all data structure modules
npm run test:modules

# Run cleanup only (logout)
npm run test:cleanup
```

### Tagged Test Execution

```bash
# Run smoke tests
npm run test:smoke

# Run regression suite
npm run test:regression

# Run specific tag
npx bddgen && npx playwright test --grep "@array"
```

### Browser-Specific Execution

```bash
# Run on Chromium only
npx playwright test --project=chromium

# Run on Firefox
npx playwright test --project=firefox

# Run on WebKit (Safari)
npx playwright test --project=webkit
```

### Debug and Development

```bash
# Debug mode with step-by-step execution
npm run test:debug

# Playwright UI mode (interactive)
npm run test:ui

# Run with visible browser
npm run test:headed

# Run single feature file
npx playwright test features/05_array.feature
```

### Parallel Execution Control

```bash
# Run with specific number of workers
npx playwright test --workers=4

# Run sequentially (single worker)
npx playwright test --workers=1

# Fully parallel (all available cores)
npx playwright test --workers=100%
```

---

## 📚 Test Modules

### Module Overview

| # | Module | Feature File | Test Count | Coverage |
|---|--------|--------------|------------|----------|
| 1 | Homepage | `01_homepage.feature` | 5+ | Navigation, UI elements |
| 2 | Register | `02_register.feature` | 10+ | Validation, success paths |
| 3 | Sign In | `03_signin.feature` | 8+ | Auth flows, error handling |
| 4 | Array | `05_array.feature` | 15+ | Lessons, practice, editor |
| 5 | Linked List | `06_linkedlist.feature` | 15+ | All linked list operations |
| 6 | Stack | `07_stack.feature` | 12+ | Stack operations |
| 7 | Queue | `08_queue.feature` | 12+ | Queue operations |
| 8 | Tree | `09_tree.feature` | 15+ | Tree traversals |
| 9 | Graph | `10_graph.feature` | 12+ | Graph algorithms |
| 10 | Logout | `04_logout.feature` | 3+ | Logout, session cleanup |

### Execution Dependencies

```
Setup Phase (Sequential)
    │
    ├── Register
    └── Sign In
           │
           ▼
Module Phase (Parallel)
    │
    ├── Array ─────────┐
    ├── Linked List ───┤
    ├── Stack ─────────┤
    ├── Queue ─────────┼──► All run in parallel
    ├── Tree ──────────┤
    └── Graph ─────────┘
           │
           ▼
Cleanup Phase (Sequential)
    │
    └── Logout
```

---

## ✍️ Writing Tests

### Feature File Structure

```gherkin
@module_name @smoke
Feature: Array Data Structure Module

  Background:
    Given The user is logged in
    And The user is on the homepage

  @array @positive
  Scenario: Navigate to Array module
    When The user clicks "Get Started" button under "Array"
    Then The user should be redirected to "Array" page
    And The page title should contain "Array"

  @array @practice @data-driven
  Scenario Outline: Solve Array practice questions
    Given The user is on "<page_name>" page in Array module
    When The user clicks "Practice Questions" link
    And The user navigates to question "<question_name>"
    And The user enters solution from "ArrayPracticeSolutions" row <row_index>
    And The user clicks Run button
    Then The output should match expected result

    Examples:
      | page_name          | question_name        | row_index |
      | Arrays in Python   | Search the array     | 0         |
      | Arrays in Python   | Max Consecutive Ones | 1         |
```

### Step Definition Implementation

```javascript
// steps/Array.steps.js
import { Given, When, Then } from './fixtures/testFixtures.js';
import { expect } from '@playwright/test';
import { logger } from '../utils/logger.js';

Given('The user is on {string} page in Array module', async ({ arrayPage }, pageName) => {
  logger.info(`Navigating to ${pageName} page in Array module`);
  await arrayPage.navigateToPage(pageName);
  logger.info(`Successfully navigated to ${pageName}`);
});

When('The user clicks "Practice Questions" link', async ({ arrayPage }) => {
  logger.info('Clicking Practice Questions link');
  await arrayPage.clickPracticeQuestions();
});

When('The user enters solution from {string} row {int}', async ({ arrayPage, testData }, sheet, row) => {
  logger.info(`Reading solution from ${sheet} sheet, row ${row}`);
  const solution = await testData.getFromSheet(sheet, row, 'solution');
  logger.debug(`Solution code: ${solution.substring(0, 50)}...`);
  await arrayPage.enterCode(solution);
  logger.info('Solution code entered successfully');
});

Then('The output should match expected result', async ({ arrayPage, testData }, datatable) => {
  const expectedOutput = await testData.getFromSheet('ArrayPracticeSolutions', 0, 'expected_output');
  logger.info(`Verifying output matches: ${expectedOutput}`);
  await expect(arrayPage.outputArea).toContainText(expectedOutput);
  logger.info('Output verification passed');
});
```

### Page Object Model

```javascript
// pages/ArrayPage.js
import { BasePage } from './BasePage.js';
import { logger } from '../utils/logger.js';

export class ArrayPage extends BasePage {
  constructor(page) {
    super(page);
    
    // Locators using Playwright's recommended approach
    this.getStartedBtn = page.getByRole('button', { name: 'Get Started' });
    this.practiceLink = page.getByRole('link', { name: 'Practice Questions' });
    this.tryHereBtn = page.getByRole('button', { name: 'Try here>>>' });
    this.codeEditor = page.locator('.CodeMirror');
    this.runBtn = page.getByRole('button', { name: 'Run' });
    this.outputArea = page.locator('#output');
  }

  async navigateToPage(pageName) {
    logger.info(`Navigating to page: ${pageName}`);
    await this.page.getByRole('link', { name: pageName }).click();
    await this.page.waitForLoadState('networkidle');
    logger.info(`Page loaded: ${pageName}`);
  }

  async clickPracticeQuestions() {
    logger.info('Clicking Practice Questions link');
    await this.practiceLink.click();
  }

  async enterCode(code) {
    logger.info('Opening code editor');
    await this.tryHereBtn.click();
    await this.codeEditor.click();
    logger.debug('Typing code into editor');
    await this.page.keyboard.type(code);
    logger.info('Code entered successfully');
  }

  async runCode() {
    logger.info('Running code');
    await this.runBtn.click();
  }
}
```

### Custom Fixtures

```javascript
// fixtures/testFixtures.js
import { test as base, createBdd } from 'playwright-bdd';
import { ArrayPage } from '../pages/ArrayPage.js';
import { ExcelReader } from '../utils/excelReader.js';
import { logger } from '../utils/logger.js';

export const test = base.extend({
  arrayPage: async ({ page }, use) => {
    logger.info('Initializing ArrayPage fixture');
    await use(new ArrayPage(page));
  },
  
  testData: async ({}, use) => {
    logger.info('Loading test data from Excel');
    const reader = new ExcelReader('./testdata/TestData.xlsx');
    await reader.loadWorkbook();
    await use(reader);
    logger.info('Test data fixture cleanup complete');
  },
});

export const { Given, When, Then } = createBdd(test);
```

---

## 📊 Test Data Management

### Excel Structure

The `TestData.xlsx` file contains multiple sheets for different test scenarios:

#### Credentials Sheet
| username | password | email | expected_result |
|----------|----------|-------|-----------------|
| testuser1 | Test@123 | test1@email.com | success |
| invalid | wrong | bad@email | error |

#### EditorTest Sheet
| code | expected_output | description |
|------|-----------------|-------------|
| `print("Hello")` | Hello | Simple print test |
| `print(2+2)` | 4 | Arithmetic test |

#### Practice Solutions Sheets
| question_name | solution | expected_output |
|---------------|----------|-----------------|
| Search the array | `def search(arr, x):...` | Element found |

### Reading Test Data with ExcelJS

```javascript
// utils/excelReader.js
import ExcelJS from 'exceljs';
import { logger } from './logger.js';

export class ExcelReader {
  constructor(filePath) {
    this.filePath = filePath;
    this.workbook = null;
    logger.info(`ExcelReader initialized for file: ${filePath}`);
  }

  async loadWorkbook() {
    if (!this.workbook) {
      logger.info('Loading Excel workbook');
      this.workbook = new ExcelJS.Workbook();
      await this.workbook.xlsx.readFile(this.filePath);
      logger.info(`Workbook loaded successfully from ${this.filePath}`);
    }
  }

  async getFromSheet(sheetName, rowIndex, columnName) {
    await this.loadWorkbook();
    logger.debug(`Reading from sheet: ${sheetName}, row: ${rowIndex}, column: ${columnName}`);
    const worksheet = this.workbook.getWorksheet(sheetName);
    
    if (!worksheet) {
      logger.error(`Sheet not found: ${sheetName}`);
      throw new Error(`Sheet "${sheetName}" not found in workbook`);
    }
    
    const headers = [];
    
    // Get headers from first row
    worksheet.getRow(1).eachCell((cell, colNumber) => {
      headers[colNumber] = cell.value;
    });
    
    // Get data from specified row
    const dataRow = worksheet.getRow(rowIndex + 2);
    const columnIndex = headers.indexOf(columnName);
    
    if (columnIndex === -1) {
      logger.error(`Column not found: ${columnName} in sheet ${sheetName}`);
      throw new Error(`Column "${columnName}" not found in sheet "${sheetName}"`);
    }
    
    const value = dataRow.getCell(columnIndex).value;
    logger.debug(`Retrieved value: ${value}`);
    return value;
  }

  async getAllFromSheet(sheetName) {
    await this.loadWorkbook();
    logger.info(`Reading all data from sheet: ${sheetName}`);
    const worksheet = this.workbook.getWorksheet(sheetName);
    
    if (!worksheet) {
      logger.error(`Sheet not found: ${sheetName}`);
      throw new Error(`Sheet "${sheetName}" not found in workbook`);
    }
    
    const data = [];
    const headers = [];
    
    // Get headers from first row
    worksheet.getRow(1).eachCell((cell, colNumber) => {
      headers[colNumber - 1] = cell.value;
    });
    
    // Get all data rows
    worksheet.eachRow((row, rowNumber) => {
      if (rowNumber > 1) {
        const rowData = {};
        row.eachCell((cell, colNumber) => {
          rowData[headers[colNumber - 1]] = cell.value;
        });
        data.push(rowData);
      }
    });
    
    logger.info(`Retrieved ${data.length} rows from ${sheetName}`);
    return data;
  }
}
```

### Key Differences: ExcelJS vs XLSX

| Feature | ExcelJS | XLSX |
|---------|---------|------|
| **API Style** | Async (Promise-based) | Sync |
| **Usage** | `await workbook.xlsx.readFile()` | `XLSX.readFile()` |
| **Cell Access** | Object-oriented (`.getCell()`) | Array-based |
| **Performance** | Better for large files | Faster for small files |
| **Writing** | Full Excel feature support | Basic support |

**Important:** Always use `await` with ExcelJS methods:

```javascript
// ✅ Correct
const solution = await testData.getFromSheet('ArrayPracticeSolutions', 0, 'solution');

// ❌ Wrong
const solution = testData.getFromSheet('ArrayPracticeSolutions', 0, 'solution');
```

---

## 📝 Logging

The framework uses **Winston** for structured, professional logging with multiple transports and log levels.

### Logger Configuration

```javascript
// utils/logger.js
import winston from 'winston';

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    winston.format.errors({ stack: true }),
    winston.format.splat(),
    winston.format.json()
  ),
  defaultMeta: { service: 'dsalgo-test-framework' },
  transports: [
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' }),
  ],
});

// Add console logging in development
if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.simple()
    )
  }));
}

export { logger };
```

**Configuration Details:**

| Component | Purpose |
|-----------|---------|
| **level: 'info'** | Default log level (info and above) |
| **timestamp** | Adds timestamp to each log entry |
| **errors: { stack: true }** | Captures error stack traces |
| **json format** | Structured JSON output for files |
| **error.log** | Contains only error-level logs |
| **combined.log** | Contains all logs (info, warn, error) |
| **Console transport** | Added only in development (not production) |

### Log Levels

| Level | Purpose | Example Usage |
|-------|---------|---------------|
| **error** | Critical errors, test failures | `logger.error('Login failed', { username, error })` |
| **warn** | Warnings, potential issues | `logger.warn('Retry attempt', { attempt: 2 })` |
| **info** | General information, test flow | `logger.info('Test started: Array module')` |
| **http** | HTTP requests/responses | `logger.http('API call', { endpoint, status })` |
| **verbose** | Detailed diagnostic info | `logger.verbose('Waiting for element', { selector })` |
| **debug** | Debugging information | `logger.debug('Variable state', { values })` |
| **silly** | Extremely detailed logs | `logger.silly('Raw data', { data })` |

### Usage Examples

#### Basic Logging

```javascript
import { logger } from '../utils/logger.js';

// Info level - general test flow
logger.info('Starting Array module tests');
logger.info('User successfully logged in', { username: 'testuser' });

// Debug level - detailed debugging
logger.debug('Locator details', { selector: '.btn-submit', visible: true });

// Warning level - non-critical issues
logger.warn('Element not found, retrying', { attempt: 2, maxAttempts: 3 });

// Error level - failures
logger.error('Test failed: Array search', { 
  error: 'Element not found',
  selector: '#search-results',
  timeout: 30000
});
```

#### In Step Definitions

```javascript
// steps/Array.steps.js
import { Given, When, Then } from './fixtures/testFixtures.js';
import { logger } from '../utils/logger.js';

Given('The user navigates to Array page', async ({ arrayPage }) => {
  logger.info('Step: Navigate to Array page');
  
  try {
    await arrayPage.navigateTo();
    logger.info('Successfully navigated to Array page');
  } catch (error) {
    logger.error('Failed to navigate to Array page', { 
      error: error.message,
      stack: error.stack 
    });
    throw error;
  }
});

When('The user enters code {string}', async ({ arrayPage }, code) => {
  logger.info('Step: Enter code in editor');
  logger.debug('Code to enter', { codeLength: code.length, preview: code.substring(0, 50) });
  
  await arrayPage.enterCode(code);
  logger.info('Code entered successfully');
});
```

#### In Page Objects

```javascript
// pages/ArrayPage.js
import { logger } from '../utils/logger.js';

export class ArrayPage {
  async navigateToPage(pageName) {
    logger.info(`Navigating to ${pageName}`, { currentUrl: this.page.url() });
    
    try {
      await this.page.getByRole('link', { name: pageName }).click();
      await this.page.waitForLoadState('networkidle');
      
      logger.info(`Navigation successful`, { 
        pageName,
        finalUrl: this.page.url() 
      });
    } catch (error) {
      logger.error(`Navigation failed`, {
        pageName,
        error: error.message,
        currentUrl: this.page.url()
      });
      throw error;
    }
  }
  
  async runCode() {
    logger.info('Running code in editor');
    const startTime = Date.now();
    
    await this.runBtn.click();
    await this.page.waitForLoadState('networkidle');
    
    const duration = Date.now() - startTime;
    logger.info(`Code execution completed`, { durationMs: duration });
  }
}
```

### Log Output Examples

#### Console Output (Development)
```
2026-02-09 10:30:15 info: Starting test execution
2026-02-09 10:30:16 info: User logged in successfully
2026-02-09 10:30:17 info: Navigating to page
2026-02-09 10:30:18 warn: Element not immediately visible, retrying
2026-02-09 10:30:20 info: Test passed: Array navigation
```

#### JSON File Output (logs/combined.log)
```json
{"level":"info","message":"User logged in successfully","service":"dsalgo-test-framework","timestamp":"2026-02-09 10:30:16"}
{"level":"info","message":"Navigating to page","service":"dsalgo-test-framework","timestamp":"2026-02-09 10:30:17","pageName":"Arrays in Python"}
{"level":"error","message":"Test failed: Array search","service":"dsalgo-test-framework","timestamp":"2026-02-09 10:30:25","error":"Element not found","selector":"#search-results","stack":"Error: Element not found\n    at ArrayPage.search..."}
```

#### Error File Output (logs/error.log)
```json
{"level":"error","message":"Test failed: Array search","service":"dsalgo-test-framework","timestamp":"2026-02-09 10:30:25","error":"Element not found","selector":"#search-results","stack":"Error: Element not found\n    at ArrayPage.search..."}
```

### Log Files

| File | Content | Purpose |
|------|---------|---------|
| `logs/error.log` | Error-level logs only | Quick error diagnosis |
| `logs/combined.log` | All logs (info, warn, error) | Complete test execution history |

### Changing Log Level

```bash
# Development - verbose logging
LOG_LEVEL=debug npm test

# Production - minimal logging
LOG_LEVEL=warn npm test

# CI/CD - info level
LOG_LEVEL=info npm test
```

### Best Practices

✅ **DO:**
- Log test flow at `info` level
- Log errors with context (error message, stack trace, relevant data)
- Use structured logging (pass objects, not concatenated strings)
- Log before and after critical operations
- Use appropriate log levels

❌ **DON'T:**
- Log sensitive data (passwords, tokens, PII)
- Over-log in production (keep `info` or `warn` level)
- Use console.log (use logger instead)
- Log large objects without filtering
- Log in tight loops (causes performance issues)

---

## 📈 Reports

### Allure Reports (Recommended)

Allure provides beautiful, interactive test reports with detailed information.

```bash
# Run tests and auto-open report
npm run test:report

# Generate report from existing results
npm run allure:generate

# Open existing report
npm run allure:open

# Serve report (for sharing)
npx allure serve reports/allure-results
```

#### Allure Report Features
- **Overview Dashboard** — Pass/fail statistics, duration trends
- **Test Suites** — Organized by feature/module
- **Timeline** — Visual execution timeline
- **Categories** — Error categorization
- **Behaviors** — BDD scenario grouping
- **Attachments** — Screenshots, videos, traces

### Playwright HTML Report

```bash
# Generate and open Playwright report
npm run report

# Open existing report
npx playwright show-report
```

### Report Locations

| Report Type | Location | Command |
|-------------|----------|---------|
| Allure Results | `./reports/allure-results/` | Auto-generated |
| Allure Report | `./reports/allure-report/` | `npm run allure:generate` |
| Playwright Report | `./reports/playwright-report/` | `npm run report` |
| Test Artifacts | `./reports/test-results/` | Auto-generated |
| Log Files | `./logs/` | Auto-generated (Winston) |

---

## 🔄 CI/CD Integration

### GitHub Actions

The project includes a complete GitHub Actions workflow for automated testing.

#### Workflow Configuration

Create `.github/workflows/playwright.yml`:

```yaml
name: Playwright-BDD Tests

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    timeout-minutes: 60
    runs-on: ubuntu-latest
    
    env:
      BASE_URL: https://dsportalapp.herokuapp.com
      TEST_USERNAME: ${{ secrets.TEST_USERNAME }}
      TEST_PASSWORD: ${{ secrets.TEST_PASSWORD }}
      HEADLESS: true
      LOG_LEVEL: info
      CI: true
    
    steps:
    - name: Checkout code
      uses: actions/checkout@v4
    
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: 20
    
    - name: Install dependencies
      run: npm ci
    
    - name: Install Playwright Browsers
      run: npx playwright install --with-deps
    
    - name: Generate BDD specs
      run: npm run bddgen
    
    - name: Run Playwright tests
      run: npm test
      continue-on-error: true
    
    - name: Generate Allure Report
      if: always()
      run: npx allure generate reports/allure-results --clean -o allure-report
    
    - name: Upload Playwright HTML Report
      if: always()
      uses: actions/upload-artifact@v4
      with:
        name: playwright-report
        path: reports/playwright-report/
        retention-days: 30
    
    - name: Upload Allure Report
      if: always()
      uses: actions/upload-artifact@v4
      with:
        name: allure-report
        path: allure-report/
        retention-days: 30
    
    - name: Upload Test Logs
      if: always()
      uses: actions/upload-artifact@v4
      with:
        name: test-logs
        path: logs/
        retention-days: 7
    
    - name: Upload Test Results
      if: always()
      uses: actions/upload-artifact@v4
      with:
        name: allure-results
        path: reports/allure-results/
        retention-days: 7
```

#### Setting Up GitHub Secrets

Before running the workflow, configure these secrets in your GitHub repository:

**Navigate to:** `Settings → Secrets and variables → Actions → New repository secret`

| Secret Name | Description | Example Value |
|-------------|-------------|---------------|
| `TEST_USERNAME` | Valid registered username for DSAlgo Portal | `testuser123` |
| `TEST_PASSWORD` | User's password | `Test@12345` |

#### Workflow Triggers

The workflow runs automatically on:
- **Push to main branch** — Any commit pushed to main
- **Pull requests** — PRs targeting the main branch

To add scheduled runs (optional):

```yaml
on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]
  schedule:
    - cron: '0 6 * * *'  # Daily at 6 AM UTC
```

#### Viewing Test Reports and Logs

After workflow completion:

1. **Go to Actions tab** in your GitHub repository
2. **Click on the workflow run** you want to review
3. **Scroll to Artifacts** section at the bottom
4. **Download reports**:
   - `playwright-report` — Playwright HTML report (30-day retention)
   - `allure-report` — Allure HTML report (30-day retention)
   - `test-logs` — Winston log files (7-day retention)
   - `allure-results` — Raw Allure JSON results (7-day retention)

#### Local Simulation of CI Environment

Test your workflow locally before pushing:

```bash
# Simulate CI environment variables
export CI=true
export HEADLESS=true
export LOG_LEVEL=info
export TEST_USERNAME="your_username"
export TEST_PASSWORD="your_password"
export BASE_URL="https://dsportalapp.herokuapp.com"

# Run the same commands as CI
npm ci
npx playwright install --with-deps
npm run bddgen
npm test
```

#### Optimization Tips

**1. Install only required browser:**
```yaml
- name: Install Playwright Browsers
  run: npx playwright install --with-deps chromium
```

**2. Enable caching for faster builds:**
```yaml
- name: Cache node modules
  uses: actions/cache@v3
  with:
    path: ~/.npm
    key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
    restore-keys: |
      ${{ runner.os }}-node-
```

**3. Run tests in parallel with matrix strategy:**
```yaml
strategy:
  matrix:
    project: [setup, modules, cleanup]
steps:
  - run: npx playwright test --project=${{ matrix.project }}
```

---

## 🔧 Troubleshooting

### Common Issues and Solutions

#### Issue: "No tests found"
```bash
# Cause: BDD specs not generated
# Solution: Regenerate specs
npm run bddgen
```

#### Issue: "Browser not found"
```bash
# Cause: Browsers not installed
# Solution: Reinstall browsers
npx playwright install --force

# For specific browser
npx playwright install chromium --force
```

#### Issue: "Authentication fails"
```bash
# Cause: Stale auth state
# Solution: Clear auth state and retry
rm -rf .auth/
npm run test:setup
```

#### Issue: "Allure report doesn't open"
```bash
# Cause: Java not installed or not in PATH
# Solution: Verify Java installation
java -version

# If not found, install Java and restart terminal
# Then manually serve the report
npx allure serve reports/allure-results
```

#### Issue: "Tests timeout frequently"
```javascript
// Solution: Increase timeout in playwright.config.js
export default defineConfig({
  timeout: 60000,  // Increase to 60 seconds
  expect: {
    timeout: 10000,  // Increase expect timeout
  },
});
```

#### Issue: "Element not found" errors
```javascript
// Solution: Use more specific locators
// ❌ Avoid
page.locator('.btn')

// ✅ Prefer
page.getByRole('button', { name: 'Submit' })
page.getByTestId('submit-button')
```

#### Issue: "Tests work locally but fail in CI"
```bash
# Cause: Usually timing or dependency issues
# Solutions:
# 1. Ensure headless mode
export HEADLESS=true

# 2. Install system dependencies
npx playwright install-deps

# 3. Use single worker in CI
npx playwright test --workers=1

# 4. Add explicit waits
await page.waitForLoadState('networkidle');
```

#### Issue: "ExcelJS data not loading"
```javascript
// Cause: Missing await on async methods
// ❌ Wrong
const solution = testData.getFromSheet('Sheet1', 0, 'solution');

// ✅ Correct
const solution = await testData.getFromSheet('Sheet1', 0, 'solution');
```

#### Issue: "Logs not being created"
```bash
# Cause: Missing logs directory
# Solution: Create logs directory
mkdir logs

# Or check logger.js configuration
export LOG_DIR=logs
```

#### Issue: "Too much console output in CI"
```bash
# Solution: Set appropriate log level
LOG_LEVEL=warn npm test  # Only warnings and errors

# Or disable console logging in CI (already configured in logger.js)
export CI=true
```

### Debug Commands

```bash
# Run in debug mode
npm run test:debug

# Run with trace viewer
npx playwright test --trace on

# View trace file
npx playwright show-trace reports/test-results/trace.zip

# Generate verbose output
DEBUG=pw:api npm test

# View logs in real-time
tail -f logs/combined.log

# View error logs only
tail -f logs/error.log
```

---

## ❓ FAQ

### General Questions

**Q: How do I run tests on a different environment?**
```bash
BASE_URL=https://staging.example.com npm test
```

**Q: How do I skip specific tests?**
```gherkin
@skip
Scenario: This test will be skipped
  ...
```

**Q: How do I run only failed tests?**
```bash
npx playwright test --last-failed
```

**Q: How do I update test snapshots?**
```bash
npx playwright test --update-snapshots
```

### Framework Questions

**Q: Why use playwright-bdd instead of native Playwright?**
- BDD provides human-readable test documentation
- Gherkin syntax enables collaboration with non-technical stakeholders
- Step reusability reduces code duplication
- Feature files serve as living documentation

**Q: How does authentication state work?**

The framework saves auth state after login to `.auth/user.json`. Subsequent tests reuse this state, avoiding repeated logins and improving execution speed.

**Q: Why ExcelJS instead of XLSX?**
- ExcelJS provides better support for modern async/await patterns
- Better handling of large Excel files
- Full support for Excel features (formatting, formulas, etc.)
- More active maintenance and updates

**Q: Can I add custom reporters?**
```javascript
// playwright.config.js
reporter: [
  ['html'],
  ['allure-playwright'],
  ['./custom-reporter.js'],  // Your custom reporter
],
```

### Logging Questions

**Q: How do I change the log level?**
```bash
# Set via environment variable
LOG_LEVEL=debug npm test

# Or update .env file
LOG_LEVEL=debug
```

**Q: Where are log files stored?**
- Default location: `./logs/`
- `error.log` - Error-level logs only
- `combined.log` - All logs (info, warn, error)

**Q: How do I view logs in real-time during test execution?**
```bash
# In a separate terminal
tail -f logs/combined.log

# Or use watch mode
watch -n 1 tail logs/combined.log

# View only errors
tail -f logs/error.log
```

**Q: Can I log to external services (e.g., CloudWatch, Splunk)?**

Yes! Add custom Winston transports:
```javascript
// utils/logger.js
import { CloudWatchTransport } from 'winston-cloudwatch';

const logger = winston.createLogger({
  transports: [
    // ... existing transports
    new CloudWatchTransport({
      logGroupName: 'playwright-tests',
      logStreamName: 'test-execution',
      awsRegion: 'us-east-1',
    }),
  ],
});
```

---

## 🤝 Contributing

We welcome contributions! Please follow these guidelines:

### Getting Started

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes**
4. **Run tests**
   ```bash
   npm test
   ```
5. **Commit with conventional commits**
   ```bash
   git commit -m "feat: add new array test scenarios"
   ```
6. **Push and create PR**
   ```bash
   git push origin feature/your-feature-name
   ```

### Coding Standards

- Use ES6+ JavaScript features
- Follow Page Object Model pattern
- Write descriptive Gherkin scenarios
- Add JSDoc comments for functions
- Maintain existing code formatting
- Always use `await` with ExcelJS methods
- Use Winston logger instead of console.log
- Follow logging best practices (appropriate levels, structured data)

### Commit Message Format

```
<type>(<scope>): <description>

Types: feat, fix, docs, style, refactor, test, chore
Scope: array, auth, config, steps, pages, logger, etc.
```

Examples:
- `feat(array): add practice question tests`
- `fix(auth): resolve login state persistence`
- `docs(readme): update ExcelJS usage examples`
- `refactor(testdata): migrate from XLSX to ExcelJS`
- `feat(logger): add Winston structured logging`
- `fix(logger): correct log rotation configuration`

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- [Playwright](https://playwright.dev/) — Microsoft's browser automation framework
- [playwright-bdd](https://github.com/vitalets/playwright-bdd) — BDD integration for Playwright
- [ExcelJS](https://github.com/exceljs/exceljs) — Excel file manipulation library
- [Winston](https://github.com/winstonjs/winston) — Versatile logging library
- [Allure Framework](https://allurereport.org/) — Test reporting
- [DSAlgo Portal](https://dsportalapp.herokuapp.com) — Application under test

---

<p align="center">
  <strong>Built with ❤️ for the QA community</strong>
</p>

<p align="center">
  <a href="#-dsalgo-playwright-bdd-test-automation-framework">⬆️ Back to Top</a>
</p>