import { SongsDataTable } from '@/components/features/report/SongsDataTable';
import { getSongsData } from '@/lib/utils';
import { notFound } from 'next/navigation';

type Props = {
  searchParams?: Promise<{
    venue_id?: string;
  }>;
};

export default async function Home({ searchParams }: Props) {
  const params = await searchParams;
  if (!params?.venue_id) {
    notFound();
  }

  const data = getSongsData({ venue_id: params.venue_id });

  return <SongsDataTable data={data} />;
}
