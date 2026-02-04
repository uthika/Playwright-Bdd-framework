import { expect } from '@playwright/test';
import { logger } from '../utils/Logger.js';


export class EditorPage {
  constructor(page) {
    this.page = page;

    // ✅ Detect OS and set modifier key
    this.isMac = process.platform === 'darwin';
    this.modifier = this.isMac ? 'Meta' : 'Control';
    logger.info(`Detected OS: ${process.platform}, using ${this.modifier} key`);

    // CodeMirror editor
    this.codeEditor = page.locator('.CodeMirror textarea');
    this.codeMirrorArea = page.locator('.CodeMirror');

    // Buttons
    this.runButton = page.locator('button:has-text("Run")');

    // Output
    this.output = page.locator('#output');
  }


  // Navigation
  async navigateToTryEditor() {
    await this.page.goto('/tryEditor');
    logger.info('Navigated to Try Editor page');
  }


  // Verification
  async verifyEditorLoaded() {
    await expect(this.codeMirrorArea).toBeVisible();
    logger.info('Verified editor loaded');
  }


  async verifyRunButton() {
    await expect(this.runButton).toBeVisible();
    logger.info('Verified Run button is visible');
  }


  // Actions
  async enterCode(code) {
  // ✅ STEP 1: NORMALIZE INDENTATION
  const lines = code.split('\n');
  const normalizedLines = lines.map((line) => {
    if (!line.trim()) return ''; // Empty lines stay empty
    
    const leadingWhitespace = line.match(/^[\s\t]+/)?.[0] || '';
    const contentWithoutLeadingWhitespace = line.substring(leadingWhitespace.length);
    
    let indentLevel = 0;
    for (let i = 0; i < leadingWhitespace.length; i++) {
      if (leadingWhitespace[i] === '\t') {
        indentLevel += 1;
      } else {
        indentLevel += 0.25;
      }
    }
    
    indentLevel = Math.round(indentLevel);
    const cleanIndent = '    '.repeat(indentLevel);
    
    return cleanIndent + contentWithoutLeadingWhitespace.trim();
  });
  
  // Remove empty lines at start/end
  while (normalizedLines.length > 0 && !normalizedLines[0].trim()) {
    normalizedLines.shift();
  }
  while (normalizedLines.length > 0 && !normalizedLines[normalizedLines.length - 1].trim()) {
    normalizedLines.pop();
  }
  
  logger.info(`📝 Normalized ${normalizedLines.length} lines of code`);
  
  // ✅ STEP 2: CLEAR EDITOR
  await this.codeMirrorArea.click({ force: true });
  await this.page.waitForTimeout(300);
  
  await this.page.keyboard.press(`${this.modifier}+A`);
  await this.page.keyboard.press('Backspace');
  await this.page.waitForTimeout(300);
  
  // ✅ STEP 3: TYPE ALL CODE AT ONCE (preserves original structure)
  const cleanCode = normalizedLines.join('\n');
  
  // Use insertText method which preserves newlines better
  await this.page.evaluate(({ code }) => {
    const cm = document.querySelector('.CodeMirror').CodeMirror;
    cm.replaceRange(code, cm.getCursor());
  }, { code: cleanCode });
  
  await this.page.waitForTimeout(500);
  
  logger.info('✅ Entered code in editor with normalized indentation');
}


  async clearCode() {
    await this.codeMirrorArea.click({ force: true });
    await this.page.keyboard.press(`${this.modifier}+A`);  // Cross-platform
    await this.page.keyboard.press('Backspace');
    logger.info('Cleared code editor');
  }


 async clickRun() {
  // ✅ SET UP ALERT HANDLER BEFORE CLICKING RUN
  let alertMessage = null;
  
  const dialogHandler = async dialog => {
    alertMessage = dialog.message();
    logger.error(`🚨 ALERT DETECTED: ${alertMessage}`);
    await dialog.accept();
  };
  
  this.page.once('dialog', dialogHandler);
  
  logger.info('About to click Run button...');
  await this.runButton.click();
  logger.info('✅ Clicked Run button (should trigger runit())');
  
  // Wait longer for execution
  await this.page.waitForTimeout(3000);
  logger.info('Waited 3 seconds after Run click');
  
  // ✅ CHECK IF ALERT APPEARED
  if (alertMessage) {
    logger.error(`❌ Python execution failed with error: ${alertMessage}`);
    throw new Error(`SyntaxError in code: ${alertMessage}`);
  }
}


  // ✅ Click Run and expect error dialog
  async clickRunExpectingError() {
    // Set up dialog handler BEFORE clicking
    const dialogPromise = this.page.waitForEvent('dialog');
    
    // Click Run WITHOUT waiting (dialog interrupts the click)
    this.runButton.click(); // No await!
    
    logger.info('Triggered Run button click (expecting error)');
    
    // Now wait for and handle the dialog
    const dialog = await dialogPromise;
    logger.info(`Error dialog appeared: ${dialog.message()}`);
    await dialog.accept();
    logger.info('Accepted error dialog');
    
    // Give it a moment to settle
    await this.page.waitForTimeout(500);
  }


  
// Output verification
async verifyOutput(expectedOutput) {
  // ✅ CONVERT TO STRING FIRST (handles numbers)
  const expectedString = String(expectedOutput);
  
  // ✅ TRIM QUOTES IF PRESENT IN EXPECTED VALUE
  const trimmedExpected = expectedString.replace(/^["']|["']$/g, '').trim();
  
  logger.info(`Expected: ${trimmedExpected}`);
  
  try {
    // ✅ Wait for content FIRST (includes visibility check)
    const actualText = await this.output.textContent();
    const trimmedActual = actualText.trim().replace(/^["']|["']$/g, '');
    
    logger.info(`Actual: ${trimmedActual}`);
    
    // ✅ Compare trimmed values
    if (trimmedActual.includes(trimmedExpected)) {
      logger.info(`✅ Output verified: ${trimmedExpected}`);
    } else {
      throw new Error(`Output mismatch: expected "${trimmedExpected}", got "${trimmedActual}"`);
    }
  } catch (error) {
    logger.error('❌ Output verification failed');
    const isVisible = await this.output.isVisible();
    const actualText = await this.output.textContent();
    logger.error(`Is visible: ${isVisible}, Text: "${actualText}"`);
    await this.page.screenshot({ path: 'output-verification-failed.png' });
    throw error;
  }
}

  async verifyOutputContains(text) {
    await expect(this.output).toContainText(text);
    logger.info(`Verified output contains: ${text}`);
  }


  async getOutputText() {
    return await this.output.textContent();
  }


  // Error handling
  async handleErrorAlert() {
    this.page.on('dialog', async dialog => {
      const message = dialog.message();
      expect(message).toContain('Error');
      await dialog.accept();
      logger.info(`Handled error alert: ${message}`);
    });
  }


  async verifyErrorAlert() {
    return new Promise((resolve) => {
      this.page.once('dialog', async dialog => {
        logger.info(`Error alert appeared: ${dialog.message()}`);
        await dialog.accept();
        resolve(true);
      });
    });
  }
  
  async verifyError() {
    // Wait for error alert dialog
    await this.verifyErrorAlert();
    logger.info('Verified error alert appeared');
  }
}
