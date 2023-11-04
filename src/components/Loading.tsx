import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className='flex items-center justify-center '>
      <div className='bg-white p-4 rounded shadow-lg text-3xl font-bold text-gray-800'>
        読み込み中です…
      </div>
    </div>
  );
};
export default Loading;
