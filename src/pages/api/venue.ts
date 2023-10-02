import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

/**
 * @description ライブ会場名とライブIDを紐付けるAPI
 * @export
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */
export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const venues = req.body;
  const createPromises = venues.map((venue: any) =>
    prisma.venue.create({
      data: {
        name: venue.name,
        live_name_id: parseInt(venue.live_name_id, 10),
      },
    }),
  );
  const createdvenues = await prisma.$transaction(createPromises);
  res.json(createdvenues);
}
