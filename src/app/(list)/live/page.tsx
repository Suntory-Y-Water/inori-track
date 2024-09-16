import LiveCheckBoxForm from '@/components/features/live/LiveCheckBoxForm';
import { liveNames } from '@/data';
import React from 'react';

export default function page() {
  return (
    <div className='md:w-2/3'>
      <h1 className='pb-4 font-bold text-2xl'>参加したライブを選ぼう</h1>
      <LiveCheckBoxForm params={liveNames} />
    </div>
  );
}
