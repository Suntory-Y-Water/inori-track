'use client';
import { useAtom } from 'jotai';
import { GroupedVenues, VenueDataProps, stepLabel } from '@/types/types';
import Button from '@/components/Button';
import Header from '@/components/Header';
import Checkbox from '@/components/CheckBox';
import { selectedLivesAtom, selectedVenuesAtom } from '@/state/atoms';
import StepNavigator from '@/components/StepNavigator';
import useFetch from '@/hooks/useFetch';
import { useEffect } from 'react';

const groupVenuesByLiveName = (venues: VenueDataProps[]): GroupedVenues => {
  return venues.reduce<GroupedVenues>((acc, venue) => {
    (acc[venue.live_name] = acc[venue.live_name] || []).push(venue);
    return acc;
  }, {});
};

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

  const groupedVenues = venueLists ? groupVenuesByLiveName(venueLists) : {};

  if (isError) return;
  if (!venueLists) return;

  return (
    <main className='flex flex-col items-center min-h-screen py-10'>
      <div className='space-y-4 w-80 md:w-full max-w-2xl'>
        <Header text='☘参加した会場を選ぼう☘' titleFlag={true} />
        <StepNavigator steps={stepLabel} currentStep={2} />
        {Object.keys(groupedVenues).map((live_name, index) => (
          <div key={live_name + index}>
            <Header text={live_name} titleFlag={true} />
            {groupedVenues[live_name].map((venue) => (
              <div key={venue.id} className='my-6'>
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
