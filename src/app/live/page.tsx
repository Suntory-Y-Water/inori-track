import Button from '../components/Button';
import Header from '../components/Header';
import { stepLabel } from '@/types';
import StepNavigator from '../components/StepNavigator';

export default function Live() {
  return (
    <main className='flex flex-col items-center min-h-screen py-10'>
      <div className='space-y-4 w-80 md:w-full max-w-2xl'>
        <Header text='参加したライブを選択してください' />
        <StepNavigator steps={stepLabel} currentStep={1} />
        <Button text='会場を選択する' color='primary' href='/venue' />
        <Button text='最初に戻る' color='secondary' href='/' />
      </div>
    </main>
  );
}
