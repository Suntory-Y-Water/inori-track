import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/pages/api/prisma';

export default async function result(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    res.status(405).end('Method Not Allowed');
    return;
  }

  try {
    // venue_idをクエリパラメータから取得し、数値の配列に変換します
    const venueIdParam = req.query.venue_id;
    let venueIds: number[] = [];

    if (typeof venueIdParam === 'string') {
      // 文字列をカンマで分割し、各部分を数値に変換します
      venueIds = venueIdParam.split(',').map(Number);
    } else if (Array.isArray(venueIdParam)) {
      // それぞれの要素を数値に変換します
      venueIds = venueIdParam.map(Number);
    } else {
      // venue_idパラメータが提供されていない、または予期しない型である場合、エラーをスローします
      throw new Error('Invalid venue_id parameter');
    }

    // 指定されたvenue_idに対応するすべてのsong_idをsongPerformanceテーブルから取得します
    const songPerformances = await prisma.songPerformance.findMany({
      where: {
        venue_id: {
          in: venueIds,
        },
      },
      select: {
        song_id: true,
      },
    });

    // 重複するsong_idを削除します
    const performedSongIds = Array.from(new Set(songPerformances.map((sp) => sp.song_id)));

    // 取得したsong_id以外のsong_idをsongテーブルから取得します
    const unsungSongs = await prisma.song.findMany({
      where: {
        id: {
          notIn: performedSongIds,
        },
      },
      select: {
        id: true,
        title: true,
      },
    });

    res.status(200).json(unsungSongs);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
}
