import React from 'react';
import Title from '@/components/Title';
import StepNavigator from '@/components/StepNavigator';
import { stepLabel } from '@/types/types';
import Live from '@/components/Live';

export default function Page() {
  return (
    <>
      <div className='space-y-4 w-80 md:w-full max-w-2xl'>
        <Title text='☘参加したライブを選ぼう☘' titleFlag={true} />
        <StepNavigator steps={stepLabel} currentStep={1} />
        <Live />
      </div>
    </>
  );
}
