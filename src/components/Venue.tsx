'use client';
import { useAtom } from 'jotai';
import { GroupedVenues, VenueDataProps } from '@/types/types';
import Button from '@/components/Button';
import Title from '@/components/Title';
import Checkbox from '@/components/CheckBox';
import { selectedLivesAtom, selectedVenuesAtom } from '@/state/atoms';
import useFetch from '@/hooks/useFetch';
import { useEffect, useState } from 'react';
import Loading from '@/components/Loading';

const groupVenuesByLiveName = (venues: VenueDataProps[]): GroupedVenues => {
  return venues.reduce<GroupedVenues>((acc, venue) => {
    (acc[venue.live_name] = acc[venue.live_name] || []).push(venue);
    return acc;
  }, {});
};

const Venue: React.FC = () => {
  const [selectedLives, setSelectedLives] = useAtom(selectedLivesAtom);
  const [selectedVenues, setSelectedVenues] = useAtom(selectedVenuesAtom);
  const [shouldFetch, setShouldFetch] = useState(false);

  // selectedLivesが設定された後にuseFetchを呼び出す
  const {
    data: venueLists,
    isLoading,
    isError,
  } = useFetch<VenueDataProps[]>({
    url: shouldFetch ? `api/venue?id=${selectedLives.join(',')}` : null,
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

  // localStorageからselectedLivesを読み込む
  useEffect(() => {
    const savedSelectedLives = localStorage.getItem('selectedLives');
    if (savedSelectedLives) {
      const parsedLives = JSON.parse(savedSelectedLives);
      setSelectedLives(parsedLives);

      // selectedLivesがある場合のみフェッチを許可
      setShouldFetch(parsedLives.length > 0);
    }
  }, []);

  // selectedVenuesが更新されたら、localStorageに保存する
  useEffect(() => {
    localStorage.setItem('selectedVenues', JSON.stringify(selectedVenues));
  }, [selectedVenues]);

  const groupedVenues = venueLists ? groupVenuesByLiveName(venueLists) : {};

  if (isLoading) return <Loading />;
  if (isError || !venueLists) return <Button text='最初に戻る' color='primary' href='/' />;

  return (
    <>
      {Object.keys(groupedVenues).map((live_name, index) => (
        <div key={live_name + index}>
          <Title text={live_name} titleFlag={true} />
          {groupedVenues[live_name].map((venue) => (
            <div key={venue.id} className='my-6'>
              <Checkbox id={venue.id} label={venue.name} onCheckboxChange={handleCheckboxChange} />
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
    </>
  );
};

export default Venue;
