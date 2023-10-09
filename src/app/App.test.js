import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe('Render tests', () => {
  test('Renders tree', () => {
    const { container } = render(<App />);
    const rows = container.getElementsByClassName('trees-container');
    expect(rows.length).toBe(1);
  });
  test('Renders paths', () => {
    const { container } = render(<App />);
    const rows = container.getElementsByClassName('paths-container');
    expect(rows.length).toBe(2);
  });
  test('Renders runes', () => {
    const { container } = render(<App />);
    const rows = container.getElementsByClassName('rune-container');
    const progressBars = container.getElementsByClassName('progress-bar');
    expect(rows.length).toBe(8);
    expect(progressBars.length).toBe(8);
  });
  test('Renders runes', () => {
    const { container } = render(<App />);
    const rows = container.getElementsByClassName('points-counter-container');
    expect(rows.length).toBe(1);
  });
  test('Renders point total', () => {
    render(<App />);
    const pointsTotal = screen.getByText(/Points Spent/i);
    expect(pointsTotal).toBeInTheDocument();
  });
})
