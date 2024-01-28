import VenueCheckBoxForms from './VenueCheckBoxForms';
import { useSearchParams } from 'react-router-dom';
import { venues, liveNames } from '@/data';
import { SelectLiveNameAndVenueProps } from '@/types';

const Venue = () => {
  const [searchParams] = useSearchParams();
  const liveId = searchParams.getAll('live_id');
  const lives = liveNames.filter((live) => liveId.includes(live.id));

  // 各ライブに対して対応する会場を検索
  const liveDetails: SelectLiveNameAndVenueProps[] = lives.map((live) => {
    const liveVenues = venues
      .filter((venue) => venue.liveNameId === live.id)
      .map((venue) => ({ id: venue.id, name: venue.name }));
    return { liveName: live.name, venues: liveVenues };
  });

  return (
    <div className='md:w-2/3'>
      <h1 className='pb-4 font-bold text-2xl'>参加したライブを選ぼう</h1>
      <VenueCheckBoxForms params={liveDetails} />
    </div>
  );
};

export default Venue;
