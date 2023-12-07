import { describe, test, expect, vi } from 'vitest';
import type { Mock } from 'vitest';
import { render, screen } from '@testing-library/react';
import TodoList from './TodoList';
import { useGetTodosQuery, useDeleteTodoMutation } from '@/services/todoApi';

vi.mock('@/services/todoApi', () => ({
  ...vi.importActual('@/services/todoApi'),
  useGetTodosQuery: vi.fn(),
  useDeleteTodoMutation: vi.fn(),
}));

describe('TodoList component', () => {
  // test('renders TodoList component with loading state', () => {
  //   (useGetTodosQuery as Mock).mockReturnValue({
  //     data: undefined,
  //     isLoading: true,
  //     error: undefined,
  //   });

  //   render(<TodoList />);

  //   const loadingElement = screen.getByText('Loading .....');
  //   expect(loadingElement).toBeInTheDocument();
  // });

  // test('renders TodoList component with error state', () => {
  //   (useGetTodosQuery as Mock).mockReturnValue({
  //     data: [],
  //     isLoading: false,
  //     error: new Error('Mocked Error'),
  //   });

  //   render(<TodoList />);

  //   const errorElement = screen.getByText('error');
  //   expect(errorElement).toBeInTheDocument();
  // });

  test('renders TodoList component with tasks and deletes a task', async () => {
    const mockTodos = [
      { userId: 1, id: 1, title: 'Task 1', isComplete: false },
      { userId: 1, id: 2, title: 'Task 2', isComplete: false },
    ];
    (useGetTodosQuery as Mock).mockReturnValue({
      data: mockTodos,
      isLoading: false,
      error: undefined,
    });

    const mockDeleteTodoMutation = vi.fn();
    (useDeleteTodoMutation as Mock).mockReturnValue([mockDeleteTodoMutation]);

    render(<TodoList />);

    const headerElement = screen.getByText('List Todo');
    expect(headerElement).toBeInTheDocument();

    mockTodos.forEach((todo) => {
      const taskElement = screen.getByText(todo.title);
      expect(taskElement).toBeInTheDocument();
    });
  });
});
