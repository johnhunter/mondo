import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';

import App from './App';

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
    expect(links.map((link) => link.textContent)).toEqual([
      'test title 1',
      'test title 2',
    ]);
  });
});
