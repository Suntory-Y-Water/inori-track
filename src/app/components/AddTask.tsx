'use client';

import { addTodo } from '@/api';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const AddTask = () => {
  const [taskTitle, setTaskTitle] = useState('');

  const handlerSubmit = async (e: FormEvent) => {
    e.preventDefault();

    await addTodo({ id: uuidv4(), text: taskTitle });

    setTaskTitle('');
  };

  return (
    <form className='mb-4 space-y-3' onSubmit={handlerSubmit}>
      <input
        type='text'
        className='w-full border px-4 py-2 rounded-lg focus:outline-none focus:border-blue-600'
        onChange={(e: ChangeEvent<HTMLInputElement>) => setTaskTitle(e.target.value)}
        value={taskTitle}
      />
      <button className='w-full px-4 py-2 text-white bg-blue-600 rounded transform hover:bg-blue-400 hover:scale-y-90 duration-0'>
        Add Task
      </button>
    </form>
  );
};

export default AddTask;
