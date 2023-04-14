import { render, screen } from '@testing-library/react';
import App from './App';

test('renders website header', () => {
  render(<App />);
  const headerElement = screen.getByText(/my e-commerce website/i);
  expect(headerElement).toBeInTheDocument();
});
