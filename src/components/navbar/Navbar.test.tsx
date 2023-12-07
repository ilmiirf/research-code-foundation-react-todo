import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

describe('NavbarView component', () => {
  test('renders NavbarView component with navigation links', () => {
    render(<Navbar />);

    const headerElement = screen.getByRole('banner');
    expect(headerElement).toBeInTheDocument();

    const navElement = screen.getByRole('navigation');
    expect(navElement).toBeInTheDocument();

    const titleElement = screen.getByText('React');
    expect(titleElement).toBeInTheDocument();

    const homeLink = screen.getByRole('link', { name: 'Home' });
    const todoLink = screen.getByRole('link', { name: 'Todo' });

    expect(homeLink).toBeInTheDocument();
    expect(todoLink).toBeInTheDocument();

    expect(homeLink).toHaveAttribute('href', '/');
    expect(todoLink).toHaveAttribute('href', '/todo');
  });
});
