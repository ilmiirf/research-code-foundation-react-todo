import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import LayoutView from './LayoutView';

describe('LayoutView component', () => {
  test('renders LayoutView component with Navbar and children', () => {
    render(<LayoutView>Mocked Children</LayoutView>);

    expect(screen.getByText('Mocked Children')).toBeInTheDocument();
  });
});
