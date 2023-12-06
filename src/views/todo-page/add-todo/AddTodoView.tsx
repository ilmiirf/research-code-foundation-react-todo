import Button from '@/components/button/Button';
import './AddTodo.css';
import { type AddTodoInterface } from './addTodoType';

const AddTodoView = ({ data, onInputChange, onAddTodo }: AddTodoInterface) => (
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
