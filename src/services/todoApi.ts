import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { type TodoType } from '@/types/todoType';

export const todoApi = createApi({
  reducerPath: 'TodoServices',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
  endpoints: (builder) => ({
    getTodos: builder.query<TodoType[], void>({
      query: () => '/todos',
    }),
    addTodo: builder.mutation<TodoType, Partial<TodoType>>({
      query: (newTodo) => ({
        url: '/todos',
        method: 'POST',
        body: newTodo,
      }),
    }),
    updateTodo: builder.mutation<void, TodoType>({
      query: (id, ...updates) => ({
        url: `/todos/${id}`,
        method: 'PUT',
        body: updates,
      }),
    }),
    deleteTodo: builder.mutation<{ success: boolean; id: number }, number>({
      query: (id) => ({
        url: `/todos/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetTodosQuery,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
  useAddTodoMutation,
} = todoApi;
