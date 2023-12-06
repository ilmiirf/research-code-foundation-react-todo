import { type TodoType } from '@/types/todoType';

export interface TodoListInterface {
  data: TodoType[] | undefined;
  isLoading?: boolean;
  error?: undefined;
  onDelete: (id: number) => void;
}
