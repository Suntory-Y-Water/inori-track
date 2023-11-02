import { vercelPostgres } from '@/lib/db';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
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

  // id文字列をカンマで分割し、文字列の配列を数値の配列に変換
  const ids = id.split(',').map((id) => parseInt(id, 10));
  if (ids.some(isNaN)) {
    res.status(400).end('Bad Request');
    return;
  }

  try {
    // idのリストに一致するクエリ文字列を作成
    const placeholders = ids.map((_, index) => `$${index + 1}`).join(',');
    const query = `
      SELECT "Venue".*, "LiveName".name as live_name
      FROM "Venue"
      JOIN "LiveName" ON "Venue".live_name_id = "LiveName".id
      WHERE "LiveName".id IN (${placeholders});
    `;

    // Execute the query using pg-promise
    const venues = await vercelPostgres.any(query, ids);

    res.status(200).json(venues);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
}
