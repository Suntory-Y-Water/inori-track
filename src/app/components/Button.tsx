import React from 'react';
import { ButtonProps, ColorClass } from '@/types';

const Button: React.FC<ButtonProps> = ({ text, color }) => {
  const colorClasses: ColorClass = {
    primary: 'bg-blue-700 text-white hover:bg-blue-900',
    secondary: 'text-blue-700 border-blue-700 border-2 hover:bg-blue-300',
    tertiary: 'text-blue-700 underline hover:bg-blue-300',
  };

  return (
    <div>
      <button className={`w-full font-sans font-medium p-4 rounded-lg ${colorClasses[color]}`}>
        {text}
      </button>
    </div>
  );
};

export default Button;
