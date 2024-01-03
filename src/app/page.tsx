'use client';
import { redirect } from 'next/navigation';
import Button from '@/components/Button';
import Title from '@/components/Title';

export default function Home() {
  const redirectUrl = () => {
    redirect('http://localhost:3000//live');
  };
  return (
    <>
      <Title text='水瀬いのりライブチェッカー' titleFlag={false} />
      <p className='mb-12 font-sans text-2xl rounded-md'>
        こちらのサイトは移動しました。
        <br />
        ボタンを押して新しいサイトで開いてください。
      </p>
      <Button
        text='新しいサイトで開く'
        color='primary'
        href='https://my-portfolio-rouge-phi.vercel.app/live-checker'
      />
    </>
  );
}
