import { render, screen } from '@testing-library/react';
import App from './App';

test('renders greetings', () => {
  render(<App user={{firstName: 'Lorenzo', lastName: 'Wynberg'}}/>);
  render(<App user={{firstName: 'John', lastName: 'Doe'}}/>);
  const text = screen.getByText(/Hello, Lorenzo Wynberg/i);
  const text2 = screen.getByText(/Hello, John Doe/i);
  expect(text).toBeInTheDocument();
  expect(text2).toBeInTheDocument();
});
