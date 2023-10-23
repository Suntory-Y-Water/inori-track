'use client';

import React, { useEffect } from 'react';
import Button from '../../components/Button';
import Header from '../../components/Header';
import StepNavigator from '../../components/StepNavigator';
import CheckBox from '../../components/CheckBox';
import useFetch from '@/hooks/useFetch';
import { useAtom } from 'jotai';
import { LiveDataProps, stepLabel } from '@/types';
import { selectedLivesAtom } from '@/state/atoms';

export default function Live() {
  const { data: liveLists, isError } = useFetch<LiveDataProps[]>({ url: 'api/live' });
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

  if (isError) return;
  if (!liveLists) return;

  const inoriMinaseLive = liveLists.filter((live) => live.live_type_id === 1);
  const townMeetingLive = liveLists.filter((live) => live.live_type_id === 2);

  return (
    <main className='flex flex-col items-center min-h-screen py-10'>
      <div className='space-y-4 w-80 md:w-full max-w-2xl'>
        <Header text='参加したライブを選択してください' titleFlag={false} />
        <StepNavigator steps={stepLabel} currentStep={1} />
        <Header text='水瀬いのり個人名義' titleFlag={true} />
        {inoriMinaseLive &&
          inoriMinaseLive.map((liveList) => (
            <div key={liveList.id}>
              <CheckBox
                id={liveList.id}
                label={liveList.name}
                onCheckboxChange={handleCheckboxChange}
              />
            </div>
          ))}
        <Header text='町民集会' titleFlag={true} />
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
      </div>
    </main>
  );
}
