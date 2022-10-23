import { test, expect } from '@playwright/test';

test.describe('Home page', () => {
  test('has title', async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveTitle(/^Mondo$/);
  });

  test('has the App heading', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByRole('heading', { name: 'Posts' })).toBeInViewport();
  });

  // TODO: more tests and add mocking
});
