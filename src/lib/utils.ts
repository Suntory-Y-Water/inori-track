import songs from '@/data/songs.json';
import songsSung from '@/data/soungsSong.json';
import { type ClassValue, clsx } from 'clsx';
import { notFound } from 'next/navigation';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type Props = {
  searchParams?: {
    venue_id?: string;
  };
};

export function getResultSongs({ searchParams }: Props) {
  const venueIdsQuery = searchParams?.venue_id || '';

  // クエリパラメータが設定されていない場合は、404 ページを表示
  if (!venueIdsQuery) {
    console.log('🚀 ~ getResultSongs ~ notFound:');
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
