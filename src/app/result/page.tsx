import ResultInfo from '@/components/features/result/ResultInfo';
import { songs, songsSung } from '@/data';
import { notFound } from 'next/navigation';
import React from 'react';

type props = {
  searchParams?: {
    venue_id: string;
  };
};

export default function Home({ searchParams }: props) {
  const venueIdsQuery = searchParams?.venue_id || '';

  // クエリパラメータが設定されていない場合は、404 ページを表示
  if (!venueIdsQuery) {
    notFound();
  }

  // venue_id をカンマで区切って配列に変換
  const venueIds = venueIdsQuery.split(',');

  const sungSongIds = songsSung
    .filter((songSung) => venueIds.includes(songSung.venueId))
    .map((songSung) => songSung.songId);

  const uniqueSungSongIds = Array.from(new Set(sungSongIds));
  const unsungSongs = songs.filter((song) => !uniqueSungSongIds.includes(song.id));

  // クエリパラメータが設定されているが、該当するライブがない場合は、404 ページを表示
  // 1回もライブに参加していない場合(そもそも直アクセスや不正なパラメータの場合にしか発生しない)、404 ページを表示
  if (unsungSongs.length === songs.length) {
    notFound();
  }

  return (
    <div className='md:w-2/3'>
      <h1 className='pb-4 font-bold text-2xl'>聴いたことない曲一覧</h1>
      <ResultInfo params={unsungSongs} />
    </div>
  );
}
