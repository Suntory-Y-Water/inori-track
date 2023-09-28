import { Task } from '@/types';
import React from 'react';

interface TodoProps {
  todo: Task;
}

const Todo = ({ todo }: TodoProps) => {
  return (
    <li
      key={todo.id}
      className='flex justify-between p-4 bg-white border-l-4 border-blue-600 rounded shadow'
    >
      <span>{todo.text}</span>
      <div>
        <button className='text-green-600 mr-4'>追加</button>
        <button className='text-red-600'>削除</button>
      </div>
    </li>
  );
};

export default Todo;
