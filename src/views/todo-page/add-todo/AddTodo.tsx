import { useAddTodoMutation } from '@/services/todoApi';
import { useState } from 'react';
import { type TodoType } from '@/types/todoType';
import View from './AddTodo.View';

const AddTodo = () => {
  const initialValue = { title: '', userId: 1, isComplete: false };
  const [todo, setTodo] = useState<Pick<TodoType, 'title'>>(initialValue);
  const [addTodo] = useAddTodoMutation();

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setTodo((prev) => ({
      ...prev,
      [target.name]: target.value,
    }));
  };

  const handleAddTodo = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await addTodo(todo).unwrap();
      setTodo(initialValue);
      window.location.reload();
    } catch {
      console.log('error save todo');
    }
  };

  return (
    <View data={todo} onInputChange={handleChange} onAddTodo={handleAddTodo} />
  );
};

export default AddTodo;
