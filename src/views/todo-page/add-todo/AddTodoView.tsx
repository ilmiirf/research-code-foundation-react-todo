import { type TodoType } from '@/types/todoType';
import Button from '@/components/button/Button';
import './AddTodo.css';

interface TypeView {
  data: Pick<TodoType, 'title'>;
  onInputChange: ({ target }: React.ChangeEvent<HTMLInputElement>) => void;
  onAddTodo: (event: React.FormEvent) => void;
}

const AddTodoView = ({ data, onInputChange, onAddTodo }: TypeView) => (
  <div className="mb-6 ">
    <input
      className="add-todo__input"
      id="todo"
      name="title"
      placeholder="enter todo"
      value={data.title}
      onChange={onInputChange}
    />
    <Button classNames="add-todo__button" onClick={onAddTodo}>
      Add
    </Button>
  </div>
);

export default AddTodoView;
