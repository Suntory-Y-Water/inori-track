import React from 'react';
import Link from 'next/link';
import { ButtonProps, ColorClass } from '@/types';

const Button: React.FC<ButtonProps> = ({ text, color, href, disabled = false }) => {
  const colorClasses: ColorClass = {
    primary: 'bg-blue-700 text-white hover:bg-blue-900',
    secondary: 'text-blue-700 border-blue-700 border-2 hover:bg-blue-200',
    tertiary: 'text-blue-700 underline hover:bg-blue-200',
    disabled: 'bg-gray-400 text-white cursor-not-allowed',
  };

  return (
    <div>
      <Link href={href}>
        <button
          className={`w-full font-sans font-medium p-4 rounded-lg ${
            disabled ? colorClasses['disabled'] : colorClasses[color]
          }`}
          disabled={disabled}
        >
          {text}
        </button>
      </Link>
    </div>
  );
};

export default Button;
