import { test, expect } from '@playwright/test';

test.describe('Home page', () => {
  test('has title', async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveTitle(/^Mondo$/);
  });

  test('has the App', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByTestId('app')).toBeInViewport();
  });
});
