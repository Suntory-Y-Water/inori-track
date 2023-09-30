import React from 'react';
import { HeaderProps } from '@/types';

const Header: React.FC<HeaderProps> = ({ text }) => {
  return (
    <div>
      <h1 className='font-sans font-medium w-full text-4xl'>{text}</h1>
    </div>
  );
};

export default Header;
