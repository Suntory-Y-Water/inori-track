import { venues, liveNames } from '@/data';
import type { LiveAndVenuesInfo } from '@/types';
import VenueCheckBoxForm from '@/components/features/venue/VenueCheckBoxForm';
import { notFound } from 'next/navigation';

type props = {
  searchParams?: {
    live_id: string;
  };
};

export default async function Home({ searchParams }: props) {
  const liveId = searchParams?.live_id || '';
  // クエリパラメータが設定されていない場合は、404 ページを表示
  if (!liveId) {
    notFound();
  }

  const lives = liveNames.filter((live) => liveId.includes(live.id));

  // クエリパラメータが設定されているが、該当するライブがない場合は、404 ページを表示
  if (lives.length === 0) {
    notFound();
  }

  // 各ライブに対して対応する会場を検索
  const liveDetails: LiveAndVenuesInfo[] = lives.map((live) => {
    const liveVenues = venues
      .filter((venue) => venue.liveNameId === live.id)
      .map((venue) => ({ id: venue.id, name: venue.name }));
    return { liveName: live.name, venues: liveVenues };
  });

  return (
    <div>
      <h1 className='pb-4 font-bold text-2xl'>参加したライブを選ぼう</h1>
      <VenueCheckBoxForm params={liveDetails} />
    </div>
  );
}
