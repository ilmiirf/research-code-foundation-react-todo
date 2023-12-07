import { describe, test, expect, vi } from 'vitest';
import type { Mock } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Home from './Home';
import { useNavigate } from 'react-router-dom';

vi.mock('react-router-dom', () => ({
  ...vi.importActual('react-router-dom'),
  useNavigate: vi.fn(),
}));

describe('Home component', () => {
  test('renders Home component and navigates to /todo', () => {
    const mockNavigate = vi.fn();
    (useNavigate as Mock).mockReturnValue(mockNavigate);

    render(<Home />);

    const headerElement = screen.getByText('Code Foundation React Web App');
    expect(headerElement).toBeInTheDocument();

    const subHeaderElement = screen.getByText(
      'React + Vite + Typescript + Redux Toolkit (RTK Query) + tailwind CSS + i18n',
    );
    expect(subHeaderElement).toBeInTheDocument();

    const buttonElement = screen.getByText('Get Start');
    expect(buttonElement).toBeInTheDocument();

    fireEvent.click(buttonElement);

    expect(mockNavigate).toHaveBeenCalledWith('/todo');
  });
});
