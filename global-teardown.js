import { chromium } from '@playwright/test';
import fs from 'fs';

async function globalTeardown() {
  console.log('\n🧹 ========================================');
  console.log('   STARTING GLOBAL TEARDOWN');
  console.log('========================================\n');
  
  // ========================================
  // 1. CLEAR AUTHENTICATION FILES
  // ========================================
  try {
    console.log('🗑️  Clearing authentication state...');
    if (fs.existsSync('.auth/user.json')) {
      fs.unlinkSync('.auth/user.json');
      console.log('   ✅ Deleted .auth/user.json');
    } else {
      console.log('   ℹ️  No auth file to delete');
    }
  } catch (error) {
    console.log('   ⚠️ Failed to delete auth file:', error.message);
  }
  
  // ========================================
  // 2. CLEAR BROWSER STORAGE/CACHE
  // ========================================
  try {
    console.log('\n🧽 Clearing browser storage...');
    const browser = await chromium.launch({ headless: true });
    const context = await browser.newContext();
    await context.clearCookies();
    console.log('   ✅ Cookies cleared');
    await browser.close();
  } catch (error) {
    console.log('   ⚠️ Failed to clear browser storage:', error.message);
  }
  
  // ========================================
  // 3. PRINT TEST EXECUTION SUMMARY
  // ========================================
  console.log('\n📊 ========================================');
  console.log('   TEST EXECUTION SUMMARY');
  console.log('========================================');
  console.log(`   Test Results: test-results/results.json`);
  console.log(`   HTML Report: playwright-report/index.html`);
  console.log(`   Timestamp: ${new Date().toLocaleString()}`);
  
  console.log('\n✅ ========================================');
  console.log('   GLOBAL TEARDOWN COMPLETED');
  console.log('========================================\n');
}

export default globalTeardown;
