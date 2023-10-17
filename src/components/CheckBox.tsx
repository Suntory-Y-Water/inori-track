import { CheckboxProps } from '@/types';
import React from 'react';

const Checkbox: React.FC<CheckboxProps> = ({ id, label, onCheckboxChange }) => {
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onCheckboxChange(id, event.target.checked);
  };

  return (
    <div className='flex items-center'>
      <input
        className='relative w-4 h-4 mr-4 border border-white'
        type='checkbox'
        id={String(id)}
        onChange={handleCheckboxChange}
      />
      <label htmlFor={String(id)}>{label}</label>
    </div>
  );
};

export default Checkbox;
