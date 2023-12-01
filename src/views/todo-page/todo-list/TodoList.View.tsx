import { memo } from 'react';
import { type TodoType } from '@/types/todoType';
import { TrashIcon } from '@heroicons/react/24/solid';

interface TypeView {
  data: TodoType[] | undefined;
  isLoading: boolean;
  error: undefined;
  onDelete: (id: number) => void;
}

const View = ({ data, isLoading, error, onDelete }: TypeView) => {
  if (error) {
    return <div>error</div>;
  }

  if (isLoading) {
    return <div>Loading ..... </div>;
  }

  if (!data) {
    return <div>No Task</div>;
  }

  return (
    <div className="px-96">
      <p className="mb-4 text-2xl font-semibold"> List Todo</p>
      {data?.map((todo) => (
        <article key={todo.id}>
          <div className="flex items-center justify-between w-full mb-3 rounded-lg ps-4 bg-zinc-200">
            <p className="text-lg text-zinc-900">{todo.title}</p>
            <button
              className="px-8 py-4 rounded-r-lg"
              onClick={() => {
                onDelete(todo.id);
                window.location.reload();
              }}
            >
              <TrashIcon
                className={`h-6 w-6 text-red-900 hover:text-red-700`}
              />
            </button>
          </div>
        </article>
      ))}
    </div>
  );
};

export default memo(View);
