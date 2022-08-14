import { useAppSelector } from '../app/hooks';
import TodoItem from './TodoItem';
import { FC } from 'react'

const TodoList: FC = () => {
    const todos = useAppSelector(state => state.todo.list);

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
        />
      ))}
    </ul>
  );
};

export default TodoList;