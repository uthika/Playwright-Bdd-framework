import { chromium } from '@playwright/test';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

async function globalSetup() {
  console.log('🚀 Starting Global Setup...');

  // Create necessary directories
  const directories = [
    'reports',
    'screenshots',
    'videos',
    '.auth',
    'test-results'
  ];

  directories.forEach(dir => {
    const dirPath = path.join(__dirname, dir);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
      console.log(`✅ Created directory: ${dir}`);
    }
  });

  // Create authenticated state
  console.log('🔐 Creating authenticated state...');
  
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  try {
    await page.goto(process.env.BASE_URL + '/login', { waitUntil: 'domcontentloaded' });
    await page.getByLabel('Username:').fill(process.env.TEST_USERNAME);
    await page.getByLabel('Password:').fill(process.env.TEST_PASSWORD);
    await page.getByRole('button', { name: 'Login' }).click();
    await page.waitForURL('**/home', { timeout: 10000 });
    
    await context.storageState({ path: '.auth/user.json' });
    console.log('✅ Authenticated state saved successfully');
    
  } catch (error) {
    console.error('❌ Failed to create authenticated state:', error.message);
  } finally {
    await browser.close();
  }

  console.log('✅ Global Setup Completed\n');
}

export default globalSetup;