import AddTask from './components/AddTask';
import TodoList from './components/TodoList';

export default function Home() {
  return (
    <main>
      <div className='flex flex-col items-center justify-center min-h-screen py-4 bg-gray-200 font-sans'>
        <h1 className='text-4xl font-bold font-sans text-gray-700 -mt-32'>
          Next.js Todo List tutorial
        </h1>
        <div className=' w-full max-w-xl mt-6'>
          <div className='w-full px-8 py-6 bg-white shadow-md rounded-lg'>
            <AddTask />
            <TodoList />
          </div>
        </div>
      </div>
    </main>
  );
}
