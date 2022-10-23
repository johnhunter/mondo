import { test, expect } from '@playwright/test';

test.describe('Home page', () => {
  test('has title', async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveTitle(/^Mondo$/);
  });

  test('has the App structure', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByRole('heading', { name: 'Posts' })).toBeInViewport();
    await expect(page.getByRole('main')).toBeInViewport();
  });

  test('has a link to a post', async ({ page }) => {
    // TODO: use mocked data rather than external API
    const name =
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit';
    const length = 100;

    await page.goto('/');

    const list = page.getByRole('list');
    const thePost = list.getByRole('link', {
      name,
    });

    await expect(list.getByRole('link')).toHaveCount(length);
    await expect(thePost).toBeInViewport();

    await thePost.click();
    await expect(
      page.getByRole('heading', { level: 1, name }),
    ).toBeInViewport();
  });
});
