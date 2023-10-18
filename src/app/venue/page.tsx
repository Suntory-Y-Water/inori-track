'use client';
import { useAtom } from 'jotai';
import { selectedLivesAtom } from '../state/atoms';
import { VenueDataProps, stepLabel } from '@/types';
import Button from '../../components/Button';
import Header from '../../components/Header';
import StepNavigator from '../../components/StepNavigator';
import { useEffect, useState } from 'react';
import Checkbox from '@/components/CheckBox';

export default function Venue() {
  const [venueLists, setVenueLists] = useState<VenueDataProps[]>([]);
  const [selectedLives, setSelectedLives] = useAtom(selectedLivesAtom);

  const fetchData = async () => {
    const response = await fetch(`api/venue?id=${selectedLives.join(',')}`);
    const result: VenueDataProps[] = await response.json();
    setVenueLists(result);
  };

  useEffect(() => {
    fetchData();
    setVenueLists([]);
  }, []);

  const handleCheckboxChange = (id: number, checked: boolean) => {
    const updatedSelectedLives = checked
      ? [...selectedLives, id]
      : selectedLives.filter((selectedId) => selectedId !== id);
    setSelectedLives(updatedSelectedLives);
  };

  const uniqueLiveNames = Array.from(new Set(venueLists.map((venue) => venue.liveName)));

  return (
    <main className='flex flex-col items-center min-h-screen py-10'>
      <div className='space-y-4 w-80 md:w-full max-w-2xl'>
        <StepNavigator steps={stepLabel} currentStep={2} />
        {uniqueLiveNames.map((liveName) => (
          <div key={liveName}>
            <Header text={liveName} titleFlag={true} />
            {venueLists
              .filter((venue) => venue.liveName === liveName)
              .map((venue) => (
                <div key={venue.name} className='mt-4 mb-4'>
                  <Checkbox
                    id={venue.id}
                    label={venue.name}
                    onCheckboxChange={handleCheckboxChange}
                  />
                </div>
              ))}
          </div>
        ))}
        <Button text='結果を見る' color='primary' href='/result' />
        <Button text='ライブ選択に戻る' color='secondary' href='/live' />
      </div>
    </main>
  );
}
