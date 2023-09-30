import React from 'react';
import { StepNavigatorProps } from '@/types';

const StepNavigator: React.FC<StepNavigatorProps> = ({ steps, currentStep }) => {
  return (
    <div className='w-full flex flex-col items-center justify-center'>
      <div className='w-full flex justify-between mb-4'>
        {' '}
        {/* justify-betweenを使用 */}
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex flex-col items-center ${
              index < currentStep ? 'text-blue-900' : 'text-gray-500'
            }`}
            style={{ width: '25%' }}
          >
            <div
              className={`h-8 w-8 rounded-full flex items-center justify-center ${
                index < currentStep ? 'bg-blue-900 text-white' : 'bg-gray-200 text-gray-500'
              }`}
            >
              {index + 1}
            </div>
            <div className='mt-2 text-center'>{step}</div> {/* text-centerを追加 */}
          </div>
        ))}
      </div>
      <div className='flex flex-grow space-x-4'>
        {steps.map((_, index) => (
          <div
            key={index}
            className={`flex-grow h-1 ${index < currentStep - 1 ? 'bg-blue-900' : 'bg-gray-200'}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default StepNavigator;
