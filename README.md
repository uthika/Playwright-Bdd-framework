# 🧪 DSAlgo Playwright-BDD Test Automation Framework

[![Playwright](https://img.shields.io/badge/Playwright-45ba4b?logo=playwright&logoColor=white)](https://playwright.dev)
[![playwright-bdd](https://img.shields.io/badge/playwright--bdd-BDD-blue)](https://github.com/vitalets/playwright-bdd)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-green?logo=node.js)](https://nodejs.org)
[![Cucumber](https://img.shields.io/badge/Cucumber-Gherkin-brightgreen?logo=cucumber)](https://cucumber.io)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Allure Report](https://img.shields.io/badge/Allure%20Report-Live-orange)](https://uthika.github.io/Playwright-Bdd-framework/)
[![Playwright Report](https://img.shields.io/badge/Playwright%20Report-Live-blue)](https://uthika.github.io/Playwright-Bdd-framework/playwright-report/)

> Enterprise-grade BDD test automation framework for the DSAlgo Portal application

**📊 [View Live Allure Report](https://uthika.github.io/Playwright-Bdd-framework/)** | **🎭 [View Live Playwright Report](https://uthika.github.io/Playwright-Bdd-framework/playwright-report/)**

[Features](#-features) • [Quick Start](#-installation) • [Running Tests](#-running-tests) • [Project Structure](#-project-structure) • [Reports](#-reports) • [Contributing](#-contributing)

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

This framework provides a comprehensive, production-ready test automation solution for the DSAlgo Portal educational platform. Built with Playwright and playwright-bdd, it follows BDD (Behavior-Driven Development) principles using Gherkin syntax for readable, maintainable test scenarios.

### What is DSAlgo Portal?

DSAlgo Portal is an educational web application that teaches data structures and algorithms through interactive lessons and coding exercises. This framework automates testing across all major modules including Arrays, Linked Lists, Stacks, Queues, Trees, and Graphs.

### Why This Framework?

| Challenge | Solution |
|---|---|
| Complex authentication flows | Persistent auth state management with storage state |
| Data-driven testing needs | Excel-based test data with dynamic loading |
| Sequential test dependencies | Project-based execution with setup → modules → cleanup workflow |
| Readable test documentation | Gherkin scenarios with comprehensive step definitions |
| Debugging & observability | Winston structured logging, Allure reports, screenshots, videos, and trace files |

---

## ✨ Features

### Core Capabilities

| Feature | Description |
|---|---|
| BDD Testing | Gherkin scenarios with playwright-bdd for human-readable tests |
| Page Object Model | Maintainable, reusable page components |
| Data-Driven Testing | Excel-based test data management (ExcelJS) |
| Parallel Execution | Multi-worker test execution for faster runs |
| Cross-Browser Support | Chromium, Firefox, and WebKit |
| Authentication Management | Reusable auth state across test sessions |
| Structured Logging | Winston-based logging with configurable levels and transports |
| Rich Reporting | Allure reports with screenshots, videos, and traces |
| Live Report Publishing | Automated GitHub Pages deployment after every CI run |

### Technical Highlights

- ✅ **ES6 Modules** — Modern JavaScript with import/export syntax
- ✅ **Custom Fixtures** — Extended Playwright fixtures for enhanced functionality
- ✅ **Winston Logger** — Professional logging with daily rotation and error tracking
- ✅ **Auto-retry Logic** — Built-in retry mechanisms for flaky tests
- ✅ **CI/CD Ready** — GitHub Actions integration with manual trigger support
- ✅ **Live Allure Report** — Auto-published to GitHub Pages after every run
- ✅ **Live Playwright Report** — Also published to GitHub Pages at `/playwright-report/`
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
│  │    Engine    │  │     bdd      │  │  + GitHub Pages      │   │
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

| Software | Version | Purpose | Installation |
|---|---|---|---|
| Node.js | 18.x+ | Runtime environment | [Download](https://nodejs.org) |
| npm | 9.x+ | Package manager | Included with Node.js |
| Java | 8+ | Allure reports | [Download](https://adoptium.net) |
| Git | Latest | Version control | [Download](https://git-scm.com) |

### Verify Prerequisites

```bash
node --version    # Expected: v18.x.x or higher
npm --version     # Expected: 9.x.x or higher
java -version     # Expected: openjdk version "1.8.x" or higher
```

---

## 🚀 Installation

### Step 1: Clone the Repository

```bash
git clone https://github.com/uthika/Playwright-Bdd-framework.git
cd Playwright-Bdd-framework
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Install Playwright Browsers

```bash
npx playwright install
```

### Step 4: Install System Dependencies (Linux/CI)

```bash
npx playwright install-deps
```

### Step 5: Verify Installation

```bash
npx playwright --version
npm run bddgen
npm run test:smoke
```

---

## ⚙️ Configuration

### Environment Variables

Create a `.env` file in the project root:

```env
BASE_URL=https://dsportalapp.herokuapp.com
HEADLESS=true
SLOW_MO=0
WORKERS=2
RETRIES=1
TIMEOUT=30000
LOG_LEVEL=info
LOG_DIR=logs
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
  workers: process.env.CI ? 2 : 1,   // 2 workers on CI (matches ubuntu-latest CPUs)
  fullyParallel: false,               // Sequential within files, parallel across files

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

> **Why `fullyParallel: false`?** Since BDD tests involve login and sequential navigation state, running tests within the same feature file in parallel can cause flakiness. Different feature files (Array, Stack, Queue etc.) run in parallel with each other while tests inside each file run sequentially — the safest approach for BDD.

---

## 📁 Project Structure

```
Playwright-Bdd-framework/
│
├── 📂 features/                    # BDD Feature Files
│   ├── 01_homepage.feature
│   ├── 02_register.feature
│   ├── 03_signin.feature
│   ├── 04_logout.feature
│   ├── 05_array.feature
│   ├── 06_linkedlist.feature
│   ├── 07_stack.feature
│   ├── 08_queue.feature
│   ├── 09_tree.feature
│   └── 10_graph.feature
│
├── 📂 steps/                       # Step Definitions
│   ├── Homepage.steps.js
│   ├── Registration.steps.js
│   ├── Signin.steps.js
│   ├── Array.steps.js
│   ├── LinkedList.steps.js
│   ├── Stack.steps.js
│   ├── Queue.steps.js
│   ├── Tree.steps.js
│   ├── Graph.steps.js
│   └── Logout.steps.js
│
├── 📂 pages/                       # Page Object Models
│   ├── HomePage.js
│   ├── SignInPage.js
│   ├── RegistrationPage.js
│   ├── ArrayPage.js
│   ├── LinkedListPage.js
│   ├── StackPage.js
│   ├── QueuePage.js
│   ├── TreePage.js
│   └── GraphPage.js
│
├── 📂 fixtures/                    # Test Fixtures
│   └── testFixtures.js
│
├── 📂 testdata/                    # Test Data
│   └── TestData.xlsx
│
├── 📂 utils/                       # Utility Functions
│   ├── logger.js
│   └── excelReader.js
│
├── 📂 logs/                        # Log Files (gitignored)
│   ├── error.log
│   └── combined.log
│
├── 📂 .auth/                       # Authentication State (gitignored)
│   └── user.json
│
├── 📂 reports/                     # Test Reports (gitignored)
│   ├── allure-results/
│   ├── allure-report/
│   ├── playwright-report/
│   └── test-results/
│
├── 📂 .github/workflows/           # CI/CD
│   └── playwright.yml
│
├── 📄 global-setup.js
├── 📄 global-teardown.js
├── 📄 .env
├── 📄 playwright.config.js
├── 📄 package.json
├── 📄 .gitignore
└── 📄 README.md
```

---

## 🧪 Running Tests

### Quick Reference

| Command | Description |
|---|---|
| `npm test` | Run all tests |
| `npm run test:report` | Run tests + open Allure report |
| `npm run test:quick` | Run without BDD regeneration |
| `npm run test:smoke` | Run smoke tests only |
| `npm run test:headed` | Run with visible browser |
| `npm run test:debug` | Step-by-step debug mode |
| `npm run test:ui` | Playwright UI mode |

### Complete Test Execution

```bash
# Recommended: Run all tests with auto-generated report
npm run test:report

# Run all tests
npm test

# Quick run (skip BDD spec regeneration)
npm run test:quick
```

### Tagged Test Execution

```bash
npm run test:smoke        # Smoke tests
npm run test:regression   # Regression suite
npx bddgen && npx playwright test --grep "@array"   # Specific tag
```

### Parallel Execution Control

```bash
npx playwright test --workers=2    # 2 parallel workers
npx playwright test --workers=1    # Sequential (single worker)
npx playwright test --workers=50%  # Half available cores
```

---

## 📚 Test Modules

### Module Overview

| # | Module | Feature File | Coverage |
|---|---|---|---|
| 1 | Homepage | 01_homepage.feature | Navigation, UI elements |
| 2 | Register | 02_register.feature | Validation, success paths |
| 3 | Sign In | 03_signin.feature | Auth flows, error handling |
| 4 | Array | 05_array.feature | Lessons, practice, editor |
| 5 | Linked List | 06_linkedlist.feature | All linked list operations |
| 6 | Stack | 07_stack.feature | Stack operations |
| 7 | Queue | 08_queue.feature | Queue operations |
| 8 | Tree | 09_tree.feature | Tree traversals |
| 9 | Graph | 10_graph.feature | Graph algorithms |
| 10 | Logout | 04_logout.feature | Logout, session cleanup |

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
    And The user enters solution from "ArrayPracticeSolutions" row <row_index>
    And The user clicks Run button
    Then The output should match expected result

    Examples:
      | page_name          | row_index |
      | Arrays in Python   | 0         |
      | Arrays in Python   | 1         |
```

### Page Object Model

```javascript
// pages/ArrayPage.js
import { BasePage } from './BasePage.js';
import { logger } from '../utils/logger.js';

export class ArrayPage extends BasePage {
  constructor(page) {
    super(page);
    this.getStartedBtn = page.getByRole('button', { name: 'Get Started' });
    this.practiceLink = page.getByRole('link', { name: 'Practice Questions' });
    this.codeEditor = page.locator('.CodeMirror');
    this.runBtn = page.getByRole('button', { name: 'Run' });
    this.outputArea = page.locator('#output');
  }

  async navigateToPage(pageName) {
    logger.info(`Navigating to page: ${pageName}`);
    await this.page.getByRole('link', { name: pageName }).click();
    await this.page.waitForLoadState('networkidle');
  }
}
```

---

## 📊 Test Data Management

### Excel Structure

| Sheet Name | Purpose |
|---|---|
| Credentials | User registration and login data |
| EditorTest | Code snippets for Try Here editor testing |
| ArrayPracticeSolutions | Practice question solutions for Array module |
| LinkedListPracticeSolutions | Practice question solutions for Linked List module |

> ⚠️ **Important:** Always use `await` with ExcelJS methods:
> ```javascript
> // ✅ Correct
> const solution = await testData.getFromSheet('ArrayPracticeSolutions', 0, 'solution');
>
> // ❌ Wrong — will return a Promise, not a value
> const solution = testData.getFromSheet('ArrayPracticeSolutions', 0, 'solution');
> ```

---

## 📝 Logging

The framework uses **Winston** for structured, professional logging.

### Log Levels

| Level | Purpose | Example |
|---|---|---|
| `error` | Critical errors, test failures | `logger.error('Login failed', { username, error })` |
| `warn` | Warnings, potential issues | `logger.warn('Retry attempt', { attempt: 2 })` |
| `info` | General test flow | `logger.info('Test started: Array module')` |
| `debug` | Debugging information | `logger.debug('Variable state', { values })` |

### Log Files

| File | Content | Purpose |
|---|---|---|
| `logs/error.log` | Error-level logs only | Quick error diagnosis |
| `logs/combined.log` | All logs (info, warn, error) | Complete execution history |

### Changing Log Level

```bash
LOG_LEVEL=debug npm test    # Verbose - development
LOG_LEVEL=warn npm test     # Minimal - production
LOG_LEVEL=info npm test     # Default - CI/CD
```

---

## 📈 Reports

### Live Reports (GitHub Pages)

Both reports are automatically published after every CI run:

> 📊 **Allure Report:** https://uthika.github.io/Playwright-Bdd-framework/
> 🎭 **Playwright Report:** https://uthika.github.io/Playwright-Bdd-framework/playwright-report/

No login required — shareable with anyone! Report links also appear directly in each GitHub Actions run summary.

### Local Allure Report

```bash
npm run test:report        # Run tests and auto-open report
npm run allure:generate    # Generate from existing results
npm run allure:open        # Open existing report
```

### Playwright HTML Report

```bash
npm run report             # Generate and open Playwright report
npx playwright show-report # Open existing report
```

### Report Locations

| Report Type | Location | Retention |
|---|---|---|
| Live Allure Report | `https://uthika.github.io/Playwright-Bdd-framework/` | Always latest |
| Live Playwright Report | `https://uthika.github.io/Playwright-Bdd-framework/playwright-report/` | Always latest |
| Allure Results (CI artifact) | GitHub Actions → Artifacts | 7 days |
| Allure Report (CI artifact) | GitHub Actions → Artifacts | 30 days |
| Playwright Report (CI artifact) | GitHub Actions → Artifacts | 30 days |
| Local Allure Report | `./reports/allure-report/` | Local only |
| Log Files | `./logs/` | Local only |

---

## 🔄 CI/CD Integration

### GitHub Actions Workflow

The complete workflow file at `.github/workflows/playwright.yml`:

```yaml
name: Playwright-BDD Tests

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]
  workflow_dispatch:              # Enables manual "Run workflow" button in GitHub Actions

permissions:
  contents: write                 # Required for GitHub Pages deployment

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
        with:
          fetch-depth: 0          # Required for gh-pages deployment

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

      - name: Deploy Allure Report to GitHub Pages
        if: always()
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./allure-report
          publish_branch: gh-pages

      - name: Deploy Playwright Report to GitHub Pages
        if: always()
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./reports/playwright-report
          publish_branch: gh-pages
          destination_dir: playwright-report
          keep_files: true          # Preserves Allure files when deploying Playwright report

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

      - name: Upload Test Results
        if: always()
        uses: actions/upload-artifact@v4
        with:
          name: allure-results
          path: reports/allure-results/
          retention-days: 7

      - name: Print Report URLs
        if: always()
        run: |
          echo "## 📊 Test Reports" >> $GITHUB_STEP_SUMMARY
          echo "- 🔴 [Allure Report](https://uthika.github.io/Playwright-Bdd-framework/)" >> $GITHUB_STEP_SUMMARY
          echo "- 🎭 [Playwright Report](https://uthika.github.io/Playwright-Bdd-framework/playwright-report/)" >> $GITHUB_STEP_SUMMARY
```

### Setting Up GitHub Secrets

Navigate to: **Settings → Secrets and variables → Actions → New repository secret**

| Secret Name | Description | Example Value |
|---|---|---|
| `TEST_USERNAME` | Valid registered username | `testuser123` |
| `TEST_PASSWORD` | User's password | `Test@12345` |

### Setting Up GitHub Pages (One-time Setup)

1. Push the workflow yml above to `main` — this creates the `gh-pages` branch automatically
2. Go to **Settings → Pages**
3. Under **Branch**, select `gh-pages` and `/ (root)`
4. Click **Save**

Your live reports will be available within a few minutes:
- Allure Report: `https://uthika.github.io/Playwright-Bdd-framework/`
- Playwright Report: `https://uthika.github.io/Playwright-Bdd-framework/playwright-report/`

### Running Tests Manually (Without Pushing)

1. Go to your repo → **Actions** tab
2. Click **Playwright-BDD Tests** in the left sidebar
3. Click the **"Run workflow"** button (top right)
4. Select a branch and click **"Run workflow"**

This is useful for running tests on feature branches before merging to main.

### Workflow Triggers Summary

| Trigger | When it runs |
|---|---|
| Push to `main` | Automatically on every commit to main |
| Pull Request to `main` | Automatically when a PR is opened/updated |
| `workflow_dispatch` | Manually via the "Run workflow" button |

### GitHub Actions Permissions

Ensure **Settings → Actions → General → Workflow permissions** is set to **"Read and write permissions"** to allow the GitHub Pages deployment step to push to the `gh-pages` branch.

---

## 🔧 Troubleshooting

### Common Issues and Solutions

**"No tests found"**
```bash
npm run bddgen    # Regenerate BDD specs
```

**"Browser not found"**
```bash
npx playwright install --force
```

**"Authentication fails"**
```bash
rm -rf .auth/
npm run test:setup
```

**"Allure report doesn't open"**
```bash
java -version    # Verify Java is installed
npx allure serve reports/allure-results
```

**"Tests work locally but fail in CI"**
```bash
# Simulate CI environment locally
export CI=true
export HEADLESS=true
export LOG_LEVEL=info
npm test
```

**"GitHub Pages deployment fails with exit code 128"**
- Ensure `permissions: contents: write` is in the workflow yml
- Check **Settings → Actions → General → Workflow permissions** is set to "Read and write permissions"

**"ExcelJS data not loading"**
```javascript
// ❌ Wrong — missing await
const solution = testData.getFromSheet('Sheet1', 0, 'solution');

// ✅ Correct
const solution = await testData.getFromSheet('Sheet1', 0, 'solution');
```

### Debug Commands

```bash
npm run test:debug                              # Step-by-step debug
npx playwright test --trace on                  # Record trace
npx playwright show-trace reports/test-results/trace.zip
tail -f logs/combined.log                       # Live log monitoring
tail -f logs/error.log                          # Monitor errors only
```

---

## ❓ FAQ

**Q: How do I run tests on a different environment?**
```bash
BASE_URL=https://staging.example.com npm test
```

**Q: How do I skip specific tests?**
```gherkin
@skip
Scenario: This test will be skipped
```

**Q: How do I run only failed tests?**
```bash
npx playwright test --last-failed
```

**Q: Can team members access the reports?**

Yes! Both reports are publicly available — no GitHub account required:
- Allure Report: `https://uthika.github.io/Playwright-Bdd-framework/`
- Playwright Report: `https://uthika.github.io/Playwright-Bdd-framework/playwright-report/`

**Q: Why use `fullyParallel: false`?**

BDD tests involve sequential navigation and shared auth state. Running tests within the same feature file in parallel can cause race conditions. Instead, different feature files run in parallel across workers, while tests inside each file run sequentially — safer and more reliable.

**Q: Why use playwright-bdd instead of native Playwright?**

BDD provides human-readable test documentation, enables collaboration with non-technical stakeholders, and step reusability reduces code duplication. Feature files serve as living documentation of application behavior.

**Q: Why ExcelJS instead of XLSX?**

ExcelJS provides better async/await support, handles large files more efficiently, and has more active maintenance. It supports the full Excel feature set and integrates cleanly with modern JavaScript.

---

## 🤝 Contributing

### Getting Started

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Make your changes
4. Run tests: `npm test`
5. Commit with conventional commits: `git commit -m "feat: add new array test scenarios"`
6. Push and create PR: `git push origin feature/your-feature-name`

### Git Workflow Guide

Understanding Git commands is essential for contributing to this project. Here are the most common commands you'll use:

#### Syncing Your Fork

**`git pull origin main`**

This command does two things:
1. **`git fetch origin main`** — Downloads the latest changes from the `main` branch of the remote repository (called `origin`) to your local machine
2. **`git merge origin/main`** — Merges those downloaded changes into your current branch

**When to use it:**
- Before starting new work to ensure you have the latest code
- To update your local `main` branch with changes from the remote repository
- To resolve conflicts by getting the latest changes

**Example workflow:**
```bash
# Switch to your main branch
git checkout main

# Pull the latest changes from remote
git pull origin main

# Now create your feature branch from the updated main
git checkout -b feature/new-feature
```

#### Common Git Commands

| Command | What It Does |
|---|---|
| `git status` | Shows which files have been modified, staged, or are untracked |
| `git add .` | Stages all changes in the current directory for commit |
| `git commit -m "message"` | Commits staged changes with a descriptive message |
| `git push origin branch-name` | Pushes your local commits to the remote repository |
| `git checkout -b branch-name` | Creates and switches to a new branch |
| `git checkout branch-name` | Switches to an existing branch |
| `git branch` | Lists all local branches (current branch marked with `*`) |
| `git log --oneline` | Shows commit history in a compact format |
| `git diff` | Shows unstaged changes in your working directory |
| `git fetch origin` | Downloads updates from remote without merging |
| `git merge branch-name` | Merges specified branch into current branch |

#### Keeping Your Feature Branch Updated

```bash
# While on your feature branch
git checkout feature/your-feature-name

# Fetch and merge latest changes from main
git pull origin main

# Resolve any conflicts if they occur
# Then continue working on your feature
```

#### Understanding Remote vs Local

- **Remote (`origin`)**: The GitHub repository (online)
- **Local**: Your copy of the repository on your computer
- **`main` branch**: The primary branch containing production-ready code
- **Feature branch**: Your personal branch for developing a specific feature

### Commit Message Format

```
<type>(<scope>): <description>
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

Examples:
```
feat(stack): add stack overflow test scenarios
fix(auth): resolve login state persistence
docs(readme): update CI/CD configuration
feat(ci): add GitHub Pages deployment
```

### Coding Standards

- Use ES6+ JavaScript features
- Follow Page Object Model pattern
- Write descriptive Gherkin scenarios
- Add JSDoc comments for functions
- Always use `await` with ExcelJS methods
- Use Winston logger instead of `console.log`
- Use appropriate log levels (avoid debug in production)

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- [Playwright](https://playwright.dev) — Microsoft's browser automation framework
- [playwright-bdd](https://github.com/vitalets/playwright-bdd) — BDD integration for Playwright
- [ExcelJS](https://github.com/exceljs/exceljs) — Excel file manipulation library
- [Winston](https://github.com/winstonjs/winston) — Versatile logging library
- [Allure Framework](https://docs.qameta.io/allure/) — Test reporting
- [DSAlgo Portal](https://dsportalapp.herokuapp.com) — Application under test

---

*Built with ❤️ for the QA community*

[⬆️ Back to Top](#-dsalgo-playwright-bdd-test-automation-framework)
