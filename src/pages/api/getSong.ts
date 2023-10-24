import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/pages/api/prisma';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const songs = await prisma.song.findMany();

      return res.status(200).json(songs);
    } catch (error) {
      return res.status(500).json({ error: 'Failed to fetch songs' });
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
};

export default handler;
