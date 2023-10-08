import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function getVenues(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    res.status(405).end('Method Not Allowed');
    return;
  }

  const { id } = req.query;

  // idが提供されていることを確認し、カンマで分割して数値の配列に変換
  if (!id || Array.isArray(id)) {
    res.status(400).end('Bad Request');
    return;
  }

  const ids = id.split(',').map(Number);
  if (ids.some(isNaN)) {
    res.status(400).end('Bad Request');
    return;
  }

  const venues = await prisma.venue.findMany({
    where: {
      live_name_id: {
        in: ids, // inオペレータを使用して、一致するいずれかのIDでデータベースクエリを作成
      },
    },
  });

  res.status(200).json(venues);
}
