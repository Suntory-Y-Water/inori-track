import React from 'react';
import { CheckboxProps } from '@/types';

const Checkbox: React.FC<CheckboxProps> = ({ liveData, onCheckboxChange }) => {
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onCheckboxChange(liveData.id || 0, event.target.checked);
  };

  return (
    <div className='flex items-center'>
      <input
        className='relative w-4 h-4 mr-4 border border-white'
        type='checkbox'
        id={String(liveData.id)}
        onChange={handleCheckboxChange}
      />
      <label htmlFor={String(liveData.id)}>{liveData.name}</label>
    </div>
  );
};

export default Checkbox;
