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
| Debugging difficulties | Allure reports, screenshots, videos, and trace files |

---

## ✨ Features

### Core Capabilities

| Feature | Description |
|---------|-------------|
| **BDD Testing** | Gherkin scenarios with playwright-bdd for human-readable tests |
| **Page Object Model** | Maintainable, reusable page components |
| **Data-Driven Testing** | Excel-based test data management (XLSX) |
| **Parallel Execution** | Multi-worker test execution for faster runs |
| **Cross-Browser Support** | Chromium, Firefox, and WebKit |
| **Authentication Management** | Reusable auth state across test sessions |
| **Rich Reporting** | Allure reports with screenshots, videos, and traces |

### Technical Highlights

- ✅ **ES6 Modules** — Modern JavaScript with import/export syntax
- ✅ **Custom Fixtures** — Extended Playwright fixtures for enhanced functionality
- ✅ **Structured Logging** — Winston-based logging with configurable levels
- ✅ **Auto-retry Logic** — Built-in retry mechanisms for flaky tests
- ✅ **CI/CD Ready** — GitHub Actions and Jenkins integration
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
│  │  (Custom)    │  │   (Excel)    │  │  (Logger, Helpers)   │   │
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
- `xlsx` — Excel file handling
- `winston` — Logging
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

# Reporting
ALLURE_RESULTS_DIR=allure-results
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
│   ├── commonSteps.js              # Shared step implementations
│   ├── homepageSteps.js            # Homepage-specific steps
│   ├── authSteps.js                # Authentication steps
│   ├── arraySteps.js               # Array module steps
│   └── ...                         # Other module steps
│
├── 📂 pages/                       # Page Object Models
│   ├── BasePage.js                 # Base page with common methods
│   ├── HomePage.js                 # Homepage page object
│   ├── SignInPage.js               # Sign-in page object
│   ├── RegisterPage.js             # Registration page object
│   ├── ArrayPage.js                # Array module page object
│   └── ...                         # Other module pages
│
├── 📂 fixtures/                    # Test Fixtures
│   └── testFixtures.js             # Custom Playwright fixtures
│
├── 📂 testdata/                    # Test Data
│   └── TestData.xlsx               # Excel-based test data
│
├── 📂 utils/                       # Utility Functions
│   ├── logger.js                   # Winston logger configuration
│   ├── excelReader.js              # Excel data reader
│   └── helpers.js                  # Common helper functions
│
├── 📂 .auth/                       # Authentication State (gitignored)
│   └── user.json                   # Stored auth state
│
├── 📂 allure-results/              # Allure Report Data (gitignored)
├── 📂 allure-report/               # Generated Allure Report (gitignored)
├── 📂 playwright-report/           # Playwright HTML Report (gitignored)
├── 📂 test-results/                # Test Artifacts (gitignored)
│
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
// steps/arraySteps.js
import { Given, When, Then } from './fixtures/testFixtures.js';
import { expect } from '@playwright/test';

Given('The user is on {string} page in Array module', async ({ arrayPage }, pageName) => {
  await arrayPage.navigateToPage(pageName);
});

When('The user clicks "Practice Questions" link', async ({ arrayPage }) => {
  await arrayPage.clickPracticeQuestions();
});

When('The user enters solution from {string} row {int}', async ({ arrayPage, testData }, sheet, row) => {
  const solution = testData.getFromSheet(sheet, row, 'solution');
  await arrayPage.enterCode(solution);
});

Then('The output should match expected result', async ({ arrayPage, testData }) => {
  const expectedOutput = testData.getCurrentExpectedOutput();
  await expect(arrayPage.outputArea).toContainText(expectedOutput);
});
```

### Page Object Model

```javascript
// pages/ArrayPage.js
import { BasePage } from './BasePage.js';

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
    await this.page.getByRole('link', { name: pageName }).click();
    await this.page.waitForLoadState('networkidle');
  }

  async clickPracticeQuestions() {
    await this.practiceLink.click();
  }

  async enterCode(code) {
    await this.tryHereBtn.click();
    await this.codeEditor.click();
    await this.page.keyboard.type(code);
  }

  async runCode() {
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

export const test = base.extend({
  arrayPage: async ({ page }, use) => {
    await use(new ArrayPage(page));
  },
  
  testData: async ({}, use) => {
    const reader = new ExcelReader('./testdata/TestData.xlsx');
    await use(reader);
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

### Reading Test Data

```javascript
// utils/excelReader.js
import * as XLSX from 'xlsx';

export class ExcelReader {
  constructor(filePath) {
    this.workbook = XLSX.readFile(filePath);
  }

  getFromSheet(sheetName, rowIndex, columnName) {
    const sheet = this.workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(sheet);
    return data[rowIndex]?.[columnName];
  }

  getAllFromSheet(sheetName) {
    const sheet = this.workbook.Sheets[sheetName];
    return XLSX.utils.sheet_to_json(sheet);
  }
}
```

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
npx allure serve allure-results
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
| Allure Results | `./allure-results/` | Auto-generated |
| Allure Report | `./allure-report/` | `npm run allure:generate` |
| Playwright Report | `./playwright-report/` | `npm run report` |
| Test Artifacts | `./test-results/` | Auto-generated |

---

## 🔄 CI/CD Integration

### GitHub Actions

Create `.github/workflows/playwright.yml`:

```yaml
name: Playwright Tests

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]
  schedule:
    - cron: '0 6 * * *'  # Daily at 6 AM UTC

jobs:
  test:
    runs-on: ubuntu-latest
    timeout-minutes: 30
    
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Install Playwright browsers
        run: npx playwright install --with-deps chromium

      - name: Run Playwright tests
        run: npm test
        env:
          CI: true

      - name: Generate Allure Report
        if: always()
        run: |
          npm install -g allure-commandline
          npx allure generate allure-results --clean -o allure-report

      - name: Upload Allure Report
        if: always()
        uses: actions/upload-artifact@v4
        with:
          name: allure-report
          path: allure-report/
          retention-days: 30

      - name: Upload Playwright Report
        if: always()
        uses: actions/upload-artifact@v4
        with:
          name: playwright-report
          path: playwright-report/
          retention-days: 30

      - name: Upload Test Artifacts
        if: failure()
        uses: actions/upload-artifact@v4
        with:
          name: test-artifacts
          path: test-results/
          retention-days: 7
```

### Jenkins Pipeline

```groovy
pipeline {
    agent any
    
    tools {
        nodejs 'Node-20'
    }
    
    environment {
        CI = 'true'
    }
    
    stages {
        stage('Install') {
            steps {
                sh 'npm ci'
                sh 'npx playwright install --with-deps chromium'
            }
        }
        
        stage('Test') {
            steps {
                sh 'npm test'
            }
            post {
                always {
                    allure includeProperties: false,
                           jdk: '',
                           results: [[path: 'allure-results']]
                }
            }
        }
    }
    
    post {
        always {
            archiveArtifacts artifacts: 'playwright-report/**/*', allowEmptyArchive: true
            archiveArtifacts artifacts: 'test-results/**/*', allowEmptyArchive: true
        }
    }
}
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
npx allure serve allure-results
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

### Debug Commands

```bash
# Run in debug mode
npm run test:debug

# Run with trace viewer
npx playwright test --trace on

# View trace file
npx playwright show-trace test-results/trace.zip

# Generate verbose output
DEBUG=pw:api npm test
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

**Q: Can I add custom reporters?**
```javascript
// playwright.config.js
reporter: [
  ['html'],
  ['allure-playwright'],
  ['./custom-reporter.js'],  // Your custom reporter
],
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

### Commit Message Format

```
<type>(<scope>): <description>

Types: feat, fix, docs, style, refactor, test, chore
Scope: array, auth, config, steps, pages, etc.
```

Examples:
- `feat(array): add practice question tests`
- `fix(auth): resolve login state persistence`
- `docs(readme): update installation steps`

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- [Playwright](https://playwright.dev/) — Microsoft's browser automation framework
- [playwright-bdd](https://github.com/vitalets/playwright-bdd) — BDD integration for Playwright
- [Allure Framework](https://allurereport.org/) — Test reporting
- [DSAlgo Portal](https://dsportalapp.herokuapp.com) — Application under test

---

<p align="center">
  <strong>Built with ❤️ for the QA community</strong>
</p>

<p align="center">
  <a href="#-dsalgo-playwright-bdd-test-automation-framework">⬆️ Back to Top</a>
</p>
