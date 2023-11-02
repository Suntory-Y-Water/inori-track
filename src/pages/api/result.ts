import type { NextApiRequest, NextApiResponse } from 'next';
import { vercelPostgres } from '@/lib/db';

export default async function result(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    res.status(405).end('Method Not Allowed');
    return;
  }

  try {
    // venue_idをクエリパラメータから取得し、数値の配列に変換する
    const venueIdParam = req.query.venue_id;
    let venueIds: number[] = [];

    if (typeof venueIdParam === 'string') {
      // 文字列をカンマで分割し、各部分を数値に変換する
      venueIds = venueIdParam.split(',').map(Number);
    } else if (Array.isArray(venueIdParam)) {
      // それぞれの要素を数値に変換する
      venueIds = venueIdParam.map(Number);
    } else {
      // venue_idパラメータが提供されていない、または予期しない型である場合、エラーをスローする
      throw new Error('Invalid venue_id parameter');
    }

    const songPerformances = await vercelPostgres.query(
      `
      SELECT song_id 
      FROM "SongPerformance"
      WHERE venue_id = ANY($1::int[]); 
      `,
      [venueIds],
    );

    // 重複するsong_idを削除する
    const performedSongIds = Array.from(new Set(songPerformances.map((sp: any) => sp.song_id)));

    // performedSongIdsの長さに基づいてプレースホルダを生成する
    const placeholders = performedSongIds.map((_, index) => `$${index + 1}`).join(',');

    // プレースホルダを使用してクエリを実行する
    const unsungSongs = await vercelPostgres.query(
      `
      SELECT id, title
      FROM "Song"
      WHERE id NOT IN (${placeholders});
      `,
      performedSongIds, // 個々の数値を配列として格納する
    );

    res.status(200).json(unsungSongs);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
}
