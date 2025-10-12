import { songs, songsSung, venues } from '@/data';
import type { SongInfo } from '@/types';
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

/**
 * クエリパラメータから参加会場IDに基づいて、SongsDataTable に渡すデータを生成する関数
 * @param queryParams - クエリパラメータ（例: { venue_id: "21,22,23" }）
 * @returns SongInfo[] - テーブル表示用のデータ配列
 */
export function getSongsData(queryParams: { venue_id?: string }): SongInfo[] {
  if (!queryParams.venue_id) {
    throw new Error('会場IDが指定されていません');
  }
  // ユーザーが参加した会場IDの配列を生成
  const participatedVenueIds = queryParams.venue_id.split(',').map((id) => id.trim());

  // songsSung のデータから、歌唱が行われたすべての会場IDの集合を取得
  const allVenueIdsInSongs = new Set(songsSung.map((record) => record.venueId));
  // venues.json から、歌唱記録のある会場のみを抽出し、ID順にソートする
  const relevantVenues = venues
    .filter((venue) => allVenueIdsInSongs.has(venue.id))
    .sort((a, b) => Number(a.id) - Number(b.id));

  // 各曲について、参加して歌唱された会場に対して ◯ を、その他は - を付与する
  return songs.map((song) => {
    let count = 0;
    // songData の型を Partial<Record<keyof SongInfo, string | number>> に変更
    const songData: Partial<Record<keyof SongInfo, string | number>> = {
      name: song.title,
      count: 0,
    };

    // for...of を使用してループ処理を実施
    for (const venue of relevantVenues) {
      // venue.json の shortId プロパティを利用してキーを生成（存在しなければ name をフォールバック）
      const rawKey = venue.shortId ? venue.shortId : venue.name;
      const isSung = songsSung.some(
        (record) => record.songId === song.id && record.venueId === venue.id,
      );
      if (participatedVenueIds.includes(venue.id) && isSung) {
        songData[rawKey as keyof SongInfo] = '◯';
        count += 1;
      }
    }
    songData.count = count;
    return songData as SongInfo;
  });
}
