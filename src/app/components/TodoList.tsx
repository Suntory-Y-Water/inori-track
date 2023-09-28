import { Task } from '@/types';
import React from 'react';
import Todo from './Todo';

interface TodoListProps {
  todos: Task[];
}

const TodoList = ({ todos }: TodoListProps) => {
  return (
    <ul className='space-y-3'>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
