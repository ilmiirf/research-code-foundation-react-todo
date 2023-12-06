import { memo } from 'react';
import { type TodoType } from '@/types/todoType';
import { TrashIcon } from '@heroicons/react/24/solid';
import './TodoList.css';

interface TypeView {
  data: TodoType[] | undefined;
  isLoading?: boolean;
  error?: undefined;
  onDelete: (id: number) => void;
}

const TodoListView = ({ data, onDelete }: TypeView) => (
  <div className="px-96">
    <p className="todo-header"> List Todo</p>
    {data?.map((todo) => (
      <article key={todo.id}>
        <div className="todo-list__wrapper">
          <p className="todo-list__text">{todo.title}</p>
          <button
            className="todo-list__button"
            onClick={() => {
              onDelete(todo.id);
              window.location.reload();
            }}
          >
            <TrashIcon className={`todo-list__button-icon`} />
          </button>
        </div>
      </article>
    ))}
  </div>
);

export default memo(TodoListView);
