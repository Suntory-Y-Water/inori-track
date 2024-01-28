import { liveNames } from '@/data/live';
import CheckBoxForms from './CheckBoxForms';

const Live = () => {
  return (
    <div className='md:w-2/3'>
      <h1 className='pb-4 font-bold text-2xl'>参加したライブを選ぼう</h1>
      <CheckBoxForms params={liveNames} />
    </div>
  );
};

export default Live;
