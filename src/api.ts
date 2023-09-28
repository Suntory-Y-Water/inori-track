import { Task } from './types';

export const getAllTodos = async (): Promise<Task[]> => {
  const res = await fetch('http://localhost:3001/tasks', { cache: 'no-store' });
  const todos = res.json();

  return todos;
};
