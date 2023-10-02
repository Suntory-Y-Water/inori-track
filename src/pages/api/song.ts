import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const songs = req.body;
  const createPromises = songs.map((song: any) => prisma.song.create({ data: song }));
  const createdSongs = await prisma.$transaction(createPromises);
  res.json(createdSongs);
}
