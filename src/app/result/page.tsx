import { stepLabel } from '@/types';
import Button from '../components/Button';
import Header from '../components/Header';
import StepNavigator from '../components/StepNavigator';

export default function Result() {
  return (
    <main className='flex flex-col items-center min-h-screen py-10'>
      <div className='space-y-4 w-80 md:w-full max-w-2xl'>
        <Header text='結果' />
        <StepNavigator steps={stepLabel} currentStep={3} />
        <Button text='結果を共有する' color='primary' href='/' />
        <Button text='会場選択に戻る' color='secondary' href='/venue' />
        <Button text='最初に戻る' color='tertiary' href='/' />
      </div>
    </main>
  );
}
