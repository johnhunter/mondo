import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import { posts } from '@/mocks/data';
import App from './App';
import type { PostData } from '@/types';

const testTitles: string[] = posts().map((p: PostData) => p.title);

describe('App', () => {
  test('renders App component', () => {
    const { container } = render(<App />);

    expect(screen.getByRole('heading').textContent).toBe('Posts');

    // Verify css module className
    expect(container.querySelector('.container')).toBeTruthy();
  });

  test('Loads the posts list', async () => {
    render(<App />);

    await waitForElementToBeRemoved(() => screen.queryByRole('status'));

    const links = screen.getAllByRole('link');
    expect(links.map((link) => link.textContent)).toEqual(testTitles);
  });
});
