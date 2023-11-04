'use client';
import { ResultDataProps } from '@/types/types';
import Button from '@/components/Button';
import useFetch from '@/hooks/useFetch';
import { useAtom } from 'jotai';
import { selectedVenuesAtom } from '@/state/atoms';
import Loading from './Loading';
import { useEffect, useState } from 'react';

const Result: React.FC = () => {
  const [selectedVenues, setSelectedVenues] = useAtom(selectedVenuesAtom);
  const [shouldFetch, setShouldFetch] = useState(false);

  const {
    data: resultLists,
    isLoading,
    isError,
  } = useFetch<ResultDataProps[]>({
    url: shouldFetch ? `api/result?venue_id=${selectedVenues.join(',')}` : null,
  });

  // localStorageからselectedVenuesを読み込む
  useEffect(() => {
    const savedSelectedVenues = localStorage.getItem('selectedVenues');
    if (savedSelectedVenues) {
      setSelectedVenues(JSON.parse(savedSelectedVenues));
      const parsedVenues = JSON.parse(savedSelectedVenues);
      // selectedLivesがある場合のみフェッチを許可
      setShouldFetch(parsedVenues.length > 0);
    }
  }, []);

  if (isLoading) return <Loading />;
  if (isError || !resultLists) return <Button text='最初に戻る' color='primary' href='/' />;

  const songsCount = resultLists.length;

  return (
    <>
      <p className='mr-2 text-xl font-medium'>聴いたことがない曲は{songsCount}曲です</p>
      <ul>
        {resultLists.map((song) => (
          <li key={song.id} className='py-1'>
            {song.title}
          </li>
        ))}
      </ul>
      <Button text='会場選択に戻る' color='primary' href='/venue' />
      <Button text='最初に戻る' color='secondary' href='/' />
    </>
  );
};

export default Result;
