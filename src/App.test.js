import { render, screen } from '@testing-library/react';
import App from './App';

test("Lemon text", () => {
  render(<App />);
  const heading = document.getElementById("mainHeader");
  expect.heading.innerHTML.toBe('Little Lemon');
});
