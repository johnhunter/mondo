import { render, screen } from '@testing-library/react';
import Loading from './Loading';
import type { Status } from '../../../types';

describe('Loading', () => {
  const children = 'Success content';
  test.each<[Status, string]>([
    ['loading', 'Loading'],
    ['error', 'Error: an unknown error occurred'],
    ['success', children],
  ])('Displays expected content for status %p', (status, expectedContent) => {
    render(
      <Loading status={status} error={null}>
        {children}
      </Loading>,
    );

    screen.getByText(expectedContent);
  });

  test('Displays given error', () => {
    const error = { name: 'HttpError', message: 'given error', status: 0 };
    render(
      <Loading status="error" error={error}>
        {children}
      </Loading>,
    );
    const infoElement = screen.getByRole('alert');
    expect(infoElement.textContent).toBe('Error: given error');
  });
});
