'use client';
import { useAtom } from 'jotai';
import { selectedLivesAtom } from '../state/atoms';
import { VenueDataProps, stepLabel } from '@/types';
import Button from '../components/Button';
import Header from '../components/Header';
import StepNavigator from '../components/StepNavigator';
import { useEffect, useState } from 'react';

export default function Venue() {
  const [venueLists, setVenueLists] = useState<VenueDataProps[]>([]);
  const [selectedLives] = useAtom(selectedLivesAtom);

  const fetchData = async () => {
    const response = await fetch(`http://localhost:3000/api/venue?id=${selectedLives.join(',')}`);
    const result: VenueDataProps[] = await response.json();
    setVenueLists(result);
  };

  useEffect(() => {
    fetchData();
    setVenueLists([]);
  }, []);

  const venueNames = venueLists.filter((venue) => venue.name);

  return (
    <main className='flex flex-col items-center min-h-screen py-10'>
      <div className='space-y-4 w-80 md:w-full max-w-2xl'>
        <Header text='LIVE TOUR 2019 Catch the Rainbow!' titleFlag={false} />
        <StepNavigator steps={stepLabel} currentStep={2} />
        {venueNames.map((venue) => (
          <p>{venue.name}</p>
        ))}
        <Button text='結果を見る' color='primary' href='/result' />
        <Button text='ライブ選択に戻る' color='secondary' href='/live' />
      </div>
    </main>
  );
}
