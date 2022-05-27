import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Hello, {user}', () => {
  render(<App />);
  const text = screen.getByText(/Hello, Lorenzo Wynberg/i);
  expect(text).toBeInTheDocument();
});
