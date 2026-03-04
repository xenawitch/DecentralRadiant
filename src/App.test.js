// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders DecentralRadiant title', () => {
    render(<App />);
    const titleElement = screen.getByText(/DecentralRadiant/i);
    expect(titleElement).toBeInTheDocument();
});
