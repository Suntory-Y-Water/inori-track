import ResultInfo from '@/components/features/result/ResultInfo';
import { songs, songsSung } from '@/data';
import { processEnvConfig } from '@/lib/utils';
import { notFound } from 'next/navigation';
import React from 'react';

type Props = {
  searchParams?: {
    venue_id?: string;
  };
};

function getResultSongs({ searchParams }: Props) {
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
  return unsungSongs;
}

export function generateMetadata({ searchParams }: Props) {
  const unsungSongs = getResultSongs({ searchParams });
  return {
    openGraph: {
      url: processEnvConfig.apiUrl,
      title: '聴いたことがない曲一覧',
      siteName: '聴いたことがない曲一覧',
      type: 'article',
      images: {
        // 作ったAPIのURLを指定
        url: `${processEnvConfig.apiUrl}/api/og?count=${unsungSongs.length}`,
        width: 1200,
        height: 630,
      },
    },
  };
}

export default function Home({ searchParams }: Props) {
  const unsungSongs = getResultSongs({ searchParams });
  // クエリパラメータが設定されているが、該当するライブがない場合は、404 ページを表示
  // 1回もライブに参加していない場合(そもそも直アクセスや不正なパラメータの場合にしか発生しない)、404 ページを表示
  if (unsungSongs.length === songs.length) {
    notFound();
  }

  const pathname = '/result';
  const queryString = new URLSearchParams(searchParams).toString();
  const url = `${processEnvConfig.apiUrl + pathname}?${queryString}`;

  return (
    <div>
      <h1 className='pb-4 font-bold text-2xl'>聴いたことない曲一覧</h1>
      <ResultInfo params={unsungSongs} url={url} />
    </div>
  );
}
