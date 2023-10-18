'use client';
import { useAtom } from 'jotai';
import { selectedLivesAtom } from '../state/atoms';
import React, { useEffect, useState } from 'react';
import Button from '../../components/Button';
import Header from '../../components/Header';
import { LiveDataProps, stepLabel } from '@/types';
import StepNavigator from '../../components/StepNavigator';
import CheckBox from '../../components/CheckBox';

export default function Live() {
  const [liveLists, setLiveLists] = useState<LiveDataProps[]>([]);
  const [selectedLives, setSelectedLives] = useAtom(selectedLivesAtom);

  const fetchData = async () => {
    const response = await fetch('api/live');
    const result: LiveDataProps[] = await response.json();
    setLiveLists(result);
  };

  useEffect(() => {
    fetchData();
    setSelectedLives([]);
  }, []);

  const handleCheckboxChange = (id: number, checked: boolean) => {
    const updatedSelectedLives = checked
      ? [...selectedLives, id]
      : selectedLives.filter((selectedId) => selectedId !== id);
    setSelectedLives(updatedSelectedLives);
  };

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
        <Button text='会場を選択する' color='primary' href='/venue' />
        <Button text='最初に戻る' color='secondary' href='/' />
      </div>
    </main>
  );
}
