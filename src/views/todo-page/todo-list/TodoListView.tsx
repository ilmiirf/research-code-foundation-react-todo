import { memo } from 'react';
import { TrashIcon } from '@heroicons/react/24/solid';
import './TodoList.css';
import { type TodoListInterface } from './todoListType';

const TodoListView = ({ data, onDelete }: TodoListInterface) => (
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
