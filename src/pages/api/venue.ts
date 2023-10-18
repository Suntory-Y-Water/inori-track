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
    include: {
      liveName: true, // liveName の情報も取得
    },
  });

  const modifiedVenues = venues.map((venue) => ({
    id: venue.id,
    name: venue.name,
    live_name_id: venue.live_name_id,
    liveName: venue.liveName.name,
  }));

  res.status(200).json(modifiedVenues);
}
