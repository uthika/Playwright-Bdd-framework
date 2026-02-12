import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';
import 'dotenv/config';


// Optional: Log to verify .env is loaded
console.log('🌐 Using BASE_URL:', process.env.BASE_URL || 'https://dsportalapp.herokuapp.com'); 


 
const testDir = defineBddConfig({
  features: ['features/*.feature'],
  steps: ['steps/*.steps.js'],
  importTestFrom: 'fixtures/testFixtures.js',
  disableWarnings: { importTestFrom: true },
});


export default defineConfig({
  testDir,
  globalSetup: './global-setup.js',  
  globalTeardown: './global-teardown.js',
  fullyParallel: false,  // ✅ Enable parallel execution
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 0 : 0,
  workers: process.env.CI ? 1 : 4,  // ✅ CHANGED: 1 → 4 workers for parallel execution
  maxFailures: undefined,


  
  reporter: [
  ['html', { open: 'never', outputFolder: 'reports/playwright-report' }],
  ['list'],
  ['json', { outputFile: 'reports/test-results/results.json' }],
  ['allure-playwright', {
    resultsDir: 'reports/allure-results',
    detail: true,
    suiteTitle: false
  }]
],
  
  use: {
    baseURL: process.env.BASE_URL || 'https://dsportalapp.herokuapp.com',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },


  projects: [
    // ========================================
    // PHASE 1: Homepage (No Auth) - SEQUENTIAL
    // ========================================
    {
      name: 'phase1-noauth',
      testMatch: /.*01_homepage\.feature/,
      grep: /@noauth/,
      fullyParallel: false,  // ✅ Sequential within phase
      use: { 
        ...devices['Desktop Chrome'],
      },
    },


    // ========================================
    // PHASE 2: Registration - SEQUENTIAL (depends on phase1)
    // ========================================
    {
      name: 'phase2-registration',
      testMatch: /.*02_registration\.feature/,
      grep: /@registration/,
      dependencies: ['phase1-noauth'],
      
      fullyParallel: false,  // ✅ Sequential within phase
      use: { 
        ...devices['Desktop Chrome'],
      },
    },


    // ========================================
    // PHASE 3: Sign In - SEQUENTIAL (depends on phase2)
    // ========================================
    {
      name: 'phase3-signin',
      testMatch: /.*03_signin\.feature/,
      grep: /@signin/,
      grepInvert: /@security/, 
      //dependencies: ['phase2-registration'],
      fullyParallel: false,  // ✅ Sequential within phase
      use: { 
        ...devices['Desktop Chrome'],
      },
    },


    // ========================================
    // PHASE 4: Authenticated Homepage - SEQUENTIAL (depends on phase3)
    // ✅ NOW INCLUDES LOGOUT TEST + RE-LOGIN
    // ========================================
    {
      name: 'phase4-authenticated-homepage',
      testMatch: /.*01_homepage\.feature/,
      grep: /@withauth/,
      dependencies: ['phase3-signin'],
      fullyParallel: false,  // ✅ Sequential within phase
      use: { 
        ...devices['Desktop Chrome'],
        storageState: '.auth/user.json',
      },
    },


    // ========================================
    // PHASE 5: ALL MODULES - PARALLEL (depends on phase4)
    // ✅ Feature files run in PARALLEL with 4 workers
    // ✅ Scenarios within each feature run sequentially
    // ========================================
    {
      name: 'phase5-datastructures',
      testMatch: /.*04_datastructures\.feature/,
      grep: /@phase5/,
      dependencies: ['phase4-authenticated-homepage'],
      fullyParallel: false, // ✅ Sequential scenarios within feature
      use: {
        ...devices['Desktop Chrome'],
        storageState: '.auth/user.json',
      },
    },
    {
      name: 'phase5-array',
      testMatch: /.*05_array\.feature/,
      grep: /@phase5/,
      dependencies: ['phase4-authenticated-homepage'],
      fullyParallel: false, // ✅ Sequential scenarios within feature
      use: {
        ...devices['Desktop Chrome'],
        storageState: '.auth/user.json',
      },
    },
    {
      name: 'phase5-linkedlist',
      testMatch: /.*06_linkedlist\.feature/,
      grep: /@phase5/,
      dependencies: ['phase4-authenticated-homepage'],
      fullyParallel: false, // ✅ Sequential scenarios within feature
      use: {
        ...devices['Desktop Chrome'],
        storageState: '.auth/user.json',
      },
    },
    {
      name: 'phase5-stack',
      testMatch: /.*07_stack\.feature/,
      grep: /@phase5/,
      dependencies: ['phase4-authenticated-homepage'],
      fullyParallel: false, // ✅ Sequential scenarios within feature
      use: {
        ...devices['Desktop Chrome'],
        storageState: '.auth/user.json',
      },
    },
    {
      name: 'phase5-queue',
      testMatch: /.*08_queue\.feature/,
      grep: /@phase5/,
      dependencies: ['phase4-authenticated-homepage'],
      fullyParallel: false, // ✅ Sequential scenarios within feature
      use: {
        ...devices['Desktop Chrome'],
        storageState: '.auth/user.json',
      },
    },
    {
      name: 'phase5-tree',
      testMatch: /.*09_tree\.feature/,
      grep: /@phase5/,
      dependencies: ['phase4-authenticated-homepage'],
      fullyParallel: false, // ✅ Sequential scenarios within feature
      use: {
        ...devices['Desktop Chrome'],
        storageState: '.auth/user.json',
      },
    },
    {
      name: 'phase5-graph',
      testMatch: /.*10_graph\.feature/,
      grep: /@phase5/,
      dependencies: ['phase4-authenticated-homepage'],
      fullyParallel: false, // ✅ Sequential scenarios within feature
      use: {
        ...devices['Desktop Chrome'],
        storageState: '.auth/user.json',
      },
    },
    // ========================================
                      // SECURITY TESTS - INDEPENDENT (No Dependencies)
                     // ========================================
    {
      name: 'security-tests',
      testMatch: /.*03_signin\.feature/,
      grep: /@security/,
      fullyParallel: false,
      use: {
        ...devices['Desktop Chrome'],
      },
    },

    // ========================================
    // ❌ PHASE 6 REMOVED - Logout now in Phase 4
    // ========================================
  ],
});
