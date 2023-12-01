import {
  useGetTodosQuery,
  useDeleteTodoMutation,
} from '@/services/todoApi';
import View from './TodoList.View';

const TodoList = () => {
  const { data: todos, isLoading, error } = useGetTodosQuery();
  const [deleteTodo] = useDeleteTodoMutation();

  if (error) {
    return <div>error</div>;
  }

  if (isLoading) {
    return <div>Loading ..... </div>;
  }

  if (!todos) {
    return <div>No Task</div>;
  }

  return (
    <View
      data={todos}
      isLoading={isLoading}
      error={error}
      onDelete={deleteTodo}
    />
  );
};

export default TodoList;
