import { chromium } from '@playwright/test';
import fs from 'fs';
import 'dotenv/config';

async function globalTeardown() {
  console.log('\n🧹 ========================================');
  console.log('   STARTING GLOBAL TEARDOWN');
  console.log('========================================\n');
  

  // ========================================
  // 1. LOGOUT FROM APPLICATION
  // ========================================
  try {
    console.log('🚪 Logging out from application...');
    
    if (fs.existsSync('.auth/user.json')) {
      const browser = await chromium.launch({ headless: true });
      const context = await browser.newContext({ storageState: '.auth/user.json' });
      const page = await context.newPage();
      
      await page.goto(process.env.BASE_URL + '/home', { waitUntil: 'domcontentloaded' });
      
      // Click Sign out if visible
      const signOutLink = page.getByRole('link', { name: 'Sign out' });
      if (await signOutLink.isVisible({ timeout: 5000 })) {
        await signOutLink.click();
        console.log('   ✅ Logged out successfully');
      } else {
        console.log('   ℹ️  Already logged out or session expired');
      }
      
      await browser.close();
    }
  } catch (error) {
    console.log('   ⚠️ Logout failed:', error.message);
  }


  // ========================================
  // 2. CLEAR AUTHENTICATION FILES
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
  // 3. CLEAR BROWSER STORAGE/CACHE
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
  // 4. PRINT TEST EXECUTION SUMMARY
  // ========================================
  console.log('\n📊 ========================================');
  console.log('   TEST EXECUTION SUMMARY');
  console.log('========================================');
  console.log(`   Test Results: reports/test-results/results.json`);
  console.log(`   HTML Report:  reports/playwright-report/index.html`);
  console.log(`   Timestamp: ${new Date().toLocaleString()}`);
  
  console.log('\n✅ ========================================');
  console.log('   GLOBAL TEARDOWN COMPLETED');
  console.log('========================================\n');
}

export default globalTeardown;
