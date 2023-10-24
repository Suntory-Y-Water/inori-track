import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/pages/api/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const songIds = [73, 6, 59, 68, 18, 44, 27, 65, 47, 69, 13, 71, 38, 10, 14, 42, 11, 50, 49, 53];

    try {
      for (let songId of songIds) {
        await prisma.songPerformance.create({
          data: {
            song_id: songId,
            live_name_id: 1,
            venue_id: 1,
            times_sung: 1,
          },
        });
      }
      res.status(200).json({ success: true, message: 'Song performances added successfully.' });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Internal server error.',
        error: (error as Error).message,
      });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method not allowed.' });
  }
}
