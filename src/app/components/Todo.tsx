'use client';
import { deleteTodo, editTodo } from '@/api';
import { Task } from '@/types';
import React, { useEffect, useRef, useState } from 'react';

interface TodoProps {
  todo: Task;
}

const Todo = ({ todo }: TodoProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTaskTitle, setEditedTaskTitle] = useState(todo.text);
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditing) {
      ref.current?.focus();
    }
  });

  const handleEdit = async () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    await editTodo(todo.id, editedTaskTitle);
    setIsEditing(false);
  };

  const handleDelete = async () => {
    await deleteTodo(todo.id);
  };

  return (
    <li
      key={todo.id}
      className='flex justify-between p-4 bg-white border-l-4 border-blue-600 rounded shadow'
    >
      {isEditing ? (
        <input
          ref={ref}
          type='text'
          className='mr-2 px-2 rounded border-gray-400 border'
          value={editedTaskTitle}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEditedTaskTitle(e.target.value)}
        />
      ) : (
        <span>{todo.text}</span>
      )}
      <div>
        {isEditing ? (
          <button className='text-blue-600 mr-4' onClick={handleSave}>
            save
          </button>
        ) : (
          <button className='text-green-600 mr-4' onClick={handleEdit}>
            edit
          </button>
        )}
        <button className='text-red-600' onClick={handleDelete}>
          delete
        </button>
      </div>
    </li>
  );
};

export default Todo;
