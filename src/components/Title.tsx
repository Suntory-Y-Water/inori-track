import React from 'react';
import { TitleProps } from '@/types/types';

const Title: React.FC<TitleProps> = ({ text, titleFlag }) => {
  return (
    <div>
      <h2
        className={`font-sans font-normal w-full ${
          titleFlag === true ? 'text-4xl mb-4 mt-8' : 'text-3xl my-8'
        }`}
        key={text}
      >
        {text}
      </h2>
    </div>
  );
};

export default Title;
