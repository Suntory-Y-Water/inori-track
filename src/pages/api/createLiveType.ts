import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const posts = await prisma.liveType.create({
    data: {
      type: '個人名義',
    },
  });
  res.json(posts);
}
