import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/pages/api/prisma';

export default async function getLiveNames(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    res.status(405).end('Method Not Allowed');
    return;
  }
  try {
    const liveNames = await prisma.liveName.findMany();
    res.status(200).json(liveNames);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
}
