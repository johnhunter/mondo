import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  test('renders App component', () => {
    const { container } = render(<App />);

    expect(screen.getByRole('heading').textContent).toBe('Posts');

    // Verify css module className
    expect(container.querySelector('.container')).toBeTruthy();
  });
});
