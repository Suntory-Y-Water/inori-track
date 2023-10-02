import { stepLabel } from '@/types';
import Button from '../components/Button';
import Header from '../components/Header';
import StepNavigator from '../components/StepNavigator';

export default function Venue() {
  return (
    <main className='flex flex-col items-center min-h-screen py-10'>
      <div className='space-y-4 w-80 md:w-full max-w-2xl'>
        <Header text='LIVE TOUR 2019 Catch the Rainbow!' />
        <StepNavigator steps={stepLabel} currentStep={2} />
        <Button text='結果を見る' color='primary' href='/result' />
        <Button text='ライブ選択に戻る' color='secondary' href='/live' />
      </div>
    </main>
  );
}
