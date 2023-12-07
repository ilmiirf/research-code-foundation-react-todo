import { describe, test, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  test('renders button base class', () => {
    const mockOnClick = vi.fn();
    const { getByRole } = render(<Button onClick={mockOnClick} />);
    const button = getByRole('button');
    expect(button).toHaveClass('button-base');
  });

  test('renders children content', () => {
    const { getByText } = render(<Button children="Click me" />);
    expect(getByText('Click me')).toBeInTheDocument();
  });

  test('calls onClick handler on click', () => {
    const mockOnClick = vi.fn();
    const { getByRole } = render(<Button onClick={mockOnClick} />);
    const button = getByRole('button');
    fireEvent.click(button);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
