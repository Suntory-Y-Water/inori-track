export const dynamic = 'force-dynamic';

import ResultInfo from '@/components/features/result/ResultInfo';
import songs from '@/data/songs.json';
import { getResultSongs } from '@/lib/utils';

import { headers } from 'next/headers';
import { notFound } from 'next/navigation';

type Props = {
  searchParams?: {
    venue_id?: string;
  };
};

function currentUrl(): string {
  const headersList = headers();
  const host = headersList.get('host');
  if (!host) {
    throw new Error('host is not defined');
  }
  const prefix = process.env.HTTP_PREFIX;
  if (!prefix) {
    throw new Error('HTTP_PREFIX is not set');
  }
  return prefix + host;
}

export function generateMetadata({ searchParams }: Props) {
  const unsungSongs = getResultSongs({ searchParams });
  const apiUrl = currentUrl();
  return {
    openGraph: {
      url: apiUrl,
      title: '聴いたことがない曲一覧',
      siteName: '聴いたことがない曲一覧',
      type: 'article',
      images: {
        // 作ったAPIのURLを指定
        url: `${apiUrl}/api/og?count=${unsungSongs.length}`,
        width: 1200,
        height: 630,
      },
    },
  };
}

export default function Home({ searchParams }: Props) {
  const unsungSongs = getResultSongs({ searchParams });
  // クエリパラメータが設定されているが、該当するライブがない場合は、404 ページを表示
  // 1回もライブに参加していない場合(そもそも直アクセスや不正なパラメータの場合にしか発生しない)、404 ページを表示
  if (unsungSongs.length === songs.length) {
    notFound();
  }

  const pathname = '/result';
  const queryString = new URLSearchParams(searchParams).toString();
  const apiUrl = currentUrl();
  const url = `${apiUrl + pathname}?${queryString}`;

  return (
    <div>
      {unsungSongs.length === 0 ? (
        ''
      ) : (
        <h1 className='pb-4 font-bold text-2xl'>聴いたことない曲一覧</h1>
      )}
      <ResultInfo params={unsungSongs} url={url} />
    </div>
  );
}
