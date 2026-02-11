import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';

const { Given, When, Then } = createBdd();

/* ===============================
   BACKGROUND / COMMON
================================ */

Given('the user is on the DS Algo Home page', async ({ page }) => {
  await page.goto('https://dsportalapp.herokuapp.com/', { waitUntil: 'domcontentloaded', });
});

/* ===============================
   BASIC VALIDATIONS
================================ */

Then('the user should see the {string} button', async ({ page }, buttonText) => {
  await expect(page.getByRole('link', { name: buttonText })).toBeVisible();
});

Then('the user should see the text {string}', async ({ page }, text) => {
  await expect(page.getByText(text)).toBeVisible();
});

/* ===============================
   GET STARTED / HOME PAGE
================================ */

When('the user clicks on {string} button', async ({ page }, buttonText) => {
  await page.getByRole('link', { name: buttonText }).click();
});

When('the user clicks on {string}', async ({ page }, text) => {
  await page.getByRole('link', { name: text }).click();
});

Then('the user should be on the Home page', async ({ page }) => {
  await expect(page).toHaveURL(/home/);
});

/* ===============================
   HEADER VALIDATIONS
================================ */

Then(
  'the top right page title should be {string} with dropdown options',
  async ({ page }, title) => {
    await expect(page.getByRole('link', { name: title })).toBeVisible();
  }
);

Then(
  'the top left page should show {string} and {string}',
  async ({ page }, text1, text2) => {
    await expect(page.getByRole('link', { name: text1 })).toBeVisible();
    await expect(page.getByRole('link', { name: text2 })).toBeVisible();
  }
);

/* ===============================
   LOGO / BASE PAGE
================================ */

When('the user clicks on NumpyNinja link', async ({ page }) => {
  await page.getByRole('link', { name: 'NumpyNinja' }).click();
});

Then('the user should be redirected to the Base page', async ({ page }) => {
  await expect(page).toHaveURL(/herokuapp\.com\/?$/);
});

/* ===============================
   REGISTER / SIGN IN
================================ */

When('the user clicks on Register link', async ({ page }) => {
  await page.getByRole('link', { name: 'Register' }).click();
});

Then('the user should be redirected to the Register page', async ({ page }) => {
  await expect(page).toHaveURL(/register/);
});

When('the user clicks on Sign In link', async ({ page }) => {
  await page.getByRole('link', { name: 'Sign In' }).click();
});

Then('the user should be redirected to the Sign In page', async ({ page }) => {
  await expect(page).toHaveURL(/login/);
});

/* ===============================
   DATA STRUCTURES DROPDOWN
================================ */

When('the user clicks on the Data Structures dropdown', async ({ page }) => {
  await page.getByRole('link', { name: 'Data Structures' }).click();
});

Then(
  'the user should see the following options in the dropdown:',
  async ({ page }, dataTable) => {
    for (const [option] of dataTable.raw()) {
      await expect(
        page.getByRole('link', { name: option })
      ).toBeVisible();
    }
  }
);

When(
  'the user selects {string} from the Data Structures dropdown',
  async ({ page }, option) => {
    await page.getByRole('link', { name: 'Data Structures' }).click();
    await page.getByRole('link', { name: option }).click();
  }
);

/* ===============================
   GET STARTED (MODULE CARDS)
================================ */

When(
  'the user clicks the {string} button for {string} on the home page',
  async ({ page }, button, module) => {
    await page
      .locator('div.card')
      .filter({ hasText: module })
      .getByRole('link', { name: button })
      .click();
  }
);

/* ===============================
   WARNING MESSAGE
================================ */

Then(
  'the user should see a warning message {string}',
  async ({ page }, message) => {
    await expect(page.getByText(message)).toBeVisible();
  }
);

/* ===============================
   LOGGED-IN STATE
================================ */

Given('The user is logged in and on Home page', async ({ page }) => {
  await page.goto('/home', { waitUntil: 'domcontentloaded' });
});

Then('The user should see username displayed in header', async ({ page }) => {
  await expect(page.locator('.username, text=/^Hi/i')).toBeVisible();
});

Then('The user should see Sign out link on homepage', async ({ page }) => {
  await expect(page.getByRole('link', { name: 'Sign out' })).toBeVisible();
});

/* ===============================
   DROPDOWN AFTER LOGIN
================================ */

When('The user clicks on dropdown menu', async ({ page }) => {
  await page.getByRole('link', { name: 'Data Structures' }).click();
});

When(
  'The user selects {string} from dropdown',
  async ({ page }, menuItem) => {
    await page.getByRole('link', { name: menuItem }).click();
  }
);

Then(
  'The user should be on {string} module page',
  async ({ page }, modulePage) => {
    const urlPart = modulePage.toLowerCase().replace(/\s+/g, '-');
    await expect(page).toHaveURL(new RegExp(urlPart));
  }
);

/* ===============================
   LOGOUT & RE-LOGIN
================================ */

When('The user clicks Sign out link from header', async ({ page }) => {
  await page.getByRole('link', { name: 'Sign out' }).click();
});

Then(
  'The user should see alert message {string}',
  async ({ page }, message) => {
    await expect(page.getByText(message)).toBeVisible();
  }
);

Then('The user should see Sign in link on homepage', async ({ page }) => {
  await expect(page.getByRole('link', { name: 'Sign In' })).toBeVisible();
});

Then('The user should see Register link on homepage', async ({ page }) => {
  await expect(page.getByRole('link', { name: 'Register' })).toBeVisible();
});

When(
  'The user logs in with credentials from environment',
  async ({ page }) => {
    const username = process.env.TEST_USERNAME;
    const password = process.env.TEST_PASSWORD;

    if (!username || !password) {
      throw new Error('TEST_USERNAME or TEST_PASSWORD not set');
    }

    await page.getByRole('link', { name: 'Sign In' }).click();
    await page.fill('input[name="username"]', username);
    await page.fill('input[name="password"]', password);
    await page.getByRole('button', { name: 'Login' }).click();
  }
);

Then('The user should be logged in successfully', async ({ page }) => {
  await expect(page).toHaveURL(/home/);
});
