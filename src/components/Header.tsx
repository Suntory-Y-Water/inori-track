import React from 'react';
import { HeaderProps } from '@/types/types';

const Header: React.FC<HeaderProps> = ({ text, titleFlag }) => {
  return (
    <div>
      <h1
        className={`font-sans font-normal w-full text-4xl ${
          titleFlag === false ? 'mb-12 mt-12' : 'mb-4 mt-8'
        }`}
        key={text}
      >
        {text}
      </h1>
    </div>
  );
};

export default Header;
