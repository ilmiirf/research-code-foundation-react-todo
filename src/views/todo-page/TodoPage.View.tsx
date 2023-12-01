import AddTodo from './add-todo';
import TodoList from './todo-list';

const View = () => {
  return (
    <main className="pt-32 text-center">
      <AddTodo />
      <TodoList />
    </main>
  );
};

export default View;
