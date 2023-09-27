import { test, expect } from './msw-fixture';
import { posts } from '@/mocks/data';

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
    const postsData = posts();
    const name = postsData[0].title;

    await page.goto('/');

    const list = page.getByRole('list');
    const thePost = list.getByRole('link', {
      name,
    });

    await expect(list.getByRole('link')).toHaveCount(postsData.length);
    await expect(thePost).toBeInViewport();

    await thePost.click();
    await expect(
      page.getByRole('heading', { level: 1, name }),
    ).toBeInViewport();
  });
});
