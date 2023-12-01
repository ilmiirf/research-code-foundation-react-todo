import { type TodoType } from '@/types/todoType';
import Button from '@/components/button/Button';

interface TypeView {
  data: Pick<TodoType, 'title'>;
  onInputChange: ({ target }: React.ChangeEvent<HTMLInputElement>) => void;
  onAddTodo: (event: React.FormEvent) => void;
}

const View = ({ data, onInputChange, onAddTodo }: TypeView) => {
  return (
    <div className="mb-6 ">
      <input
        className="px-6 py-3 border-0 h-14 w-96 rounded-l-2xl"
        id="todo"
        name="title"
        placeholder="enter todo"
        value={data.title}
        onChange={onInputChange}
      />
      <Button classNames="w-28 h-14 rounded-r-2xl" onClick={onAddTodo}>
        Add
      </Button>
    </div>
  );
};

export default View;
