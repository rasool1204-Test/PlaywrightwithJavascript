const { test } = require('@playwright/test');
const { HomePage } = require('../pages/homePage');

test('loads the example domain page', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.open();
  await homePage.assertLoaded();
});
