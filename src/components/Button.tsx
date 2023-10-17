import React from 'react';
import Link from 'next/link';
import { ButtonProps, ColorClass } from '@/types';

const Button: React.FC<ButtonProps> = ({ text, color, href }) => {
  const colorClasses: ColorClass = {
    primary: 'bg-blue-700 text-white hover:bg-blue-900',
    secondary: 'text-blue-700 border-blue-700 border-2 hover:bg-blue-200',
    tertiary: 'text-blue-700 underline hover:bg-blue-200',
  };

  return (
    <div>
      <Link href={href}>
        <button className={`w-full font-sans font-medium p-4 rounded-lg ${colorClasses[color]}`}>
          {text}
        </button>
      </Link>
    </div>
  );
};

export default Button;
