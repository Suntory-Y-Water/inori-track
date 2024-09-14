import { liveNames } from '@/data/live';
import CheckBoxForms from '@/pages/Live/CheckBoxForms';
import { useEffect } from 'react';

const Live = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='md:w-2/3'>
      <h1 className='pb-4 font-bold text-2xl'>参加したライブを選ぼう</h1>
      <CheckBoxForms params={liveNames} />
    </div>
  );
};

export default Live;
