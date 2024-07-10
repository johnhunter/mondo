import { render, screen } from '@testing-library/react';
import Info from './Info';

describe('Info', () => {
  test.each([
    ['Displays by default', undefined, true],
    ['Displays when active = true', true, true],
    ['Does not display when active = false', false, false],
  ])('%s', (_desc, active, expected) => {
    render(<Info active={active}>Message</Info>);
    const message = screen.queryByText('Message');

    if (expected) {
      expect(message).toBeInTheDocument();
    } else {
      expect(message).not.toBeInTheDocument();
    }
  });

  test('Displays an alert', () => {
    render(
      <Info error active>
        Message
      </Info>,
    );

    expect(screen.getByRole('alert').textContent).toBe('Message');
  });
  test('Displays an transient message', () => {
    render(
      <Info transient active>
        Message
      </Info>,
    );

    const infoElement = screen.getByRole('status');
    expect(infoElement.textContent).toBe('Message');
  });
});
