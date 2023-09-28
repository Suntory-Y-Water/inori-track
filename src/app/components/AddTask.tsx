import React from 'react';

const AddTask = () => {
  return (
    <form className='mb-4 space-y-3'>
      <input
        type='text'
        className='w-full border px-4 py-2 rounded-lg focus:outline-none focus:border-blue-600'
      />
      <button className='w-full px-4 py-2 text-white bg-blue-600 rounded transform hover:bg-blue-400 hover:scale-y-90 duration-0'>
        Add Task
      </button>
    </form>
  );
};

export default AddTask;
