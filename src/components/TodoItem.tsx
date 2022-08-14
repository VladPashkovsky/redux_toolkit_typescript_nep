import { useAppDispatch } from '../app/hooks'
import { toggleComplete, removeTodo } from '../app/todoSlice'
import { FC } from 'react'

interface TodoItemsProps {
  id: string,
  title: string,
  completed: boolean
}

const TodoItem: FC<TodoItemsProps> = ({ id, title, completed }) => {
  const dispatch = useAppDispatch()

  return (
    <li>
      <input
        type='checkbox'
        checked={completed}
        onChange={() => dispatch(toggleComplete(id))}
      />
      <span>{title}</span>
      <span onClick={() => dispatch(removeTodo(id))}>&times;</span>
    </li>
  )
}

export default TodoItem