import React from 'react';
import { HeaderProps } from '@/types';

const Header: React.FC<HeaderProps> = ({ text }) => {
  return (
    <div>
      <h1 className='font-sans font-normal w-full text-4xl mb-12 mt-12'>{text}</h1>
    </div>
  );
};

export default Header;
