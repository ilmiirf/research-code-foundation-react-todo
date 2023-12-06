import AddTodo from './add-todo/AddTodo';
import TodoList from './todo-list/TodoList';
import './TodoPage.css';

const TodoPageView = () => (
  <main className="todo-page">
    <AddTodo />
    <TodoList />
  </main>
);

export default TodoPageView;
