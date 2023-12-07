import { describe, test, expect, vi } from 'vitest';
import type { Mock } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import AddTodo from './AddTodo';
import { useAddTodoMutation } from '@/services/todoApi';

vi.mock('@/services/todoApi', () => ({
  ...vi.importActual('@/services/todoApi'),
  useAddTodoMutation: vi.fn(),
}));

describe('AddTodo component', () => {
  test('renders AddTodo component and adds a new todo', async () => {
    const mockAddTodoMutation = vi.fn();
    (useAddTodoMutation as Mock).mockReturnValue([mockAddTodoMutation]);

    render(<AddTodo />);

    const inputElement = screen.getByPlaceholderText('enter todo');
    const buttonElement = screen.getByText('Add');
    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();

    fireEvent.change(inputElement, { target: { value: 'New Todo' } });

    fireEvent.click(buttonElement);

    expect(mockAddTodoMutation).toHaveBeenCalledWith({
      title: 'New Todo',
      userId: 1,
      isComplete: false,
    });
  });
});
