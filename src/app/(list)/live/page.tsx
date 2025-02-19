import LiveCheckBoxForm from '@/components/features/live/LiveCheckBoxForm';
import liveNames from '@/data/liveNames.json';
import type { LiveName } from '@/types';

export default function page() {
  const lives: LiveName[] = liveNames;
  return (
    <div>
      <h1 className='pb-4 font-bold text-2xl'>参加したライブを選ぼう🎤✨️</h1>
      <LiveCheckBoxForm params={lives} />
    </div>
  );
}
