import Button from './components/Button';
import Header from './components/Header';

export default function Home() {
  return (
    <main className='flex flex-col items-center min-h-screen py-10'>
      <div className='space-y-4 w-80 md:w-full max-w-2xl'>
        <Header text='LIVE TOUR 2019 Catch the Rainbow!' />
        <Button text='結果を共有する' color='primary' />
        <Button text='会場選択に戻る' color='secondary' />
        <Button text='最初に戻る' color='tertiary' />
      </div>
    </main>
  );
}
