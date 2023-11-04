'use client';
import React, { useEffect, useState } from 'react';
import Button from '@/components/Button';
import Title from '@/components/Title';
import CheckBox from '@/components/CheckBox';
import useFetch from '@/hooks/useFetch';
import { useAtom } from 'jotai';
import { LiveDataProps } from '@/types/types';
import { selectedLivesAtom } from '@/state/atoms';
import Loading from '@/components/Loading';

const Live: React.FC = () => {
  const { data: liveLists, isLoading, isError } = useFetch<LiveDataProps[]>({ url: 'api/live' });
  const [selectedLives, setSelectedLives] = useAtom(selectedLivesAtom);

  const handleCheckboxChange = (id: number, checked: boolean) => {
    const updatedSelectedLives = checked
      ? [...selectedLives, id]
      : selectedLives.filter((selectedId) => selectedId !== id);
    setSelectedLives(updatedSelectedLives);
  };

  useEffect(() => {
    setSelectedLives([]);
  }, []);

  useEffect(() => {
    localStorage.setItem('selectedLives', JSON.stringify(selectedLives));
  }, [selectedLives]);

  if (isLoading) return <Loading />;
  if (isError) return;
  if (!liveLists) return;

  const inoriMinaseLive = liveLists.filter((live) => live.live_type_id === 1);
  const townMeetingLive = liveLists.filter((live) => live.live_type_id === 2);

  return (
    <>
      <Title text='水瀬いのり個人名義' titleFlag={false} />
      {inoriMinaseLive &&
        inoriMinaseLive.map((liveList) => (
          <div key={liveList.id} className='my-6'>
            <CheckBox
              id={liveList.id}
              label={liveList.name}
              onCheckboxChange={handleCheckboxChange}
            />
          </div>
        ))}
      <Title text='町民集会' titleFlag={false} />
      {townMeetingLive &&
        townMeetingLive.map((liveList) => (
          <div key={liveList.id}>
            <CheckBox
              id={liveList.id}
              label={liveList.name}
              onCheckboxChange={handleCheckboxChange}
            />
          </div>
        ))}
      <Button
        text='会場を選択する'
        color='primary'
        href='/venue'
        disabled={selectedLives.length === 0}
      />
      <Button text='最初に戻る' color='secondary' href='/' />
    </>
  );
};

export default Live;
