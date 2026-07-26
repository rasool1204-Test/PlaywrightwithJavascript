const { expect } = require('@playwright/test');

class HomePage {
  constructor(page) {
    this.page = page;
    this.heading = page.locator('h1');
  }

  async open() {
    await this.page.goto('/');
  }

  async assertLoaded() {
    await expect(this.page).toHaveTitle(/Example Domain/);
    await expect(this.heading).toHaveText('Example Domain');
  }
}

module.exports = { HomePage };
