'use client';
import { ResultDataProps, stepLabel } from '@/types';
import Button from '@/components/Button';
import Header from '@/components/Header';
import StepNavigator from '@/components/StepNavigator';
import useFetch from '@/hooks/useFetch';
import { useAtom } from 'jotai';
import { selectedVenuesAtom } from '@/state/atoms';

export default function Result() {
  const [selectedVenues] = useAtom(selectedVenuesAtom);

  const { data: resultLists, isError } = useFetch<ResultDataProps[]>({
    url: `api/result?venue_id=${selectedVenues.join(',')}`,
  });

  if (isError) return;
  if (!resultLists) return;
  const songsCount = resultLists.length;

  return (
    <main className='flex flex-col items-center min-h-screen py-10'>
      <div className='space-y-4 w-80 md:w-full max-w-2xl'>
        <Header text='聴いたことがない曲一覧' titleFlag={true} />
        <StepNavigator steps={stepLabel} currentStep={3} />
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
      </div>
    </main>
  );
}
