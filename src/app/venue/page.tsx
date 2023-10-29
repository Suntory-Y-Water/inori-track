'use client';
import { useAtom } from 'jotai';
import { VenueDataProps, stepLabel } from '@/types';
import Button from '@/components/Button';
import Header from '@/components/Header';
import Checkbox from '@/components/CheckBox';
import { selectedLivesAtom, selectedVenuesAtom } from '@/state/atoms';
import StepNavigator from '@/components/StepNavigator';
import useFetch from '@/hooks/useFetch';
import { useEffect } from 'react';

export default function Venue() {
  const [selectedLives] = useAtom(selectedLivesAtom);
  const [selectedVenues, setSelectedVenues] = useAtom(selectedVenuesAtom);

  const { data: venueLists, isError } = useFetch<VenueDataProps[]>({
    url: `api/venue?id=${selectedLives.join(',')}`,
  });

  const handleCheckboxChange = (id: number, checked: boolean) => {
    const updatedSelectedVenues = checked
      ? [...selectedVenues, id]
      : selectedVenues.filter((selectedId) => selectedId !== id);
    setSelectedVenues(updatedSelectedVenues);
  };

  useEffect(() => {
    setSelectedVenues([]);
  }, []);

  if (isError) return;
  if (!venueLists) return;

  const uniqueLiveNames = Array.from(new Set(venueLists.map((venue) => venue.liveName)));

  return (
    <main className='flex flex-col items-center min-h-screen py-10'>
      <div className='space-y-4 w-80 md:w-full max-w-2xl'>
        <Header text='☘参加した会場を選ぼう☘' titleFlag={true} />
        <StepNavigator steps={stepLabel} currentStep={2} />
        {uniqueLiveNames.map((liveName) => (
          <div key={liveName}>
            <Header text={liveName} titleFlag={true} />
            {venueLists
              .filter((venue) => venue.liveName === liveName)
              .map((venue) => (
                <div key={venue.name} className='my-6'>
                  <Checkbox
                    id={venue.id}
                    label={venue.name}
                    onCheckboxChange={handleCheckboxChange}
                  />
                </div>
              ))}
          </div>
        ))}
        <Button
          text='結果を見る'
          color='primary'
          href='/result'
          disabled={selectedVenues.length === 0}
        />
        <Button text='ライブ選択に戻る' color='secondary' href='/live' />
      </div>
    </main>
  );
}
