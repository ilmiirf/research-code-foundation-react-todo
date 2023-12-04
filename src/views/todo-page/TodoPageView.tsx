import AddTodo from './add-todo/AddTodo';
import TodoList from './todo-list/TodoList';

const TodoPageView = () => (
  <main className="pt-32 text-center">
    <AddTodo />
    <TodoList />
  </main>
);

export default TodoPageView;