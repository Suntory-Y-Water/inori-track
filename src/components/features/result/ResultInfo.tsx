import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { songs } from '@/data';

type props = {
  params: {
    id: string;
    title: string;
  }[];
};

export default function ResultInfo({ params }: props) {
  return (
    <div>
      <div className='mt-4 mb-2'>
        <h2 className='font-bold text-xl'>
          あなたが聴いたことのない曲は{songs.length}曲中、{params.length}曲でした！
        </h2>
      </div>
      {params.map((param) => (
        <div key={param.id} className='flex flex-row items-start space-x-3 space-y-0 py-1'>
          <p className='font-normal'>{param.title}</p>
        </div>
      ))}

      <Button
        variant='default'
        className='w-full items-center justify-center p-6 my-2 tracking-tight'
      >
        結果をX(Twitter)で共有する
      </Button>
      <Link href='/'>
        <Button
          variant='secondary'
          className='w-full items-center justify-center p-6 my-2 tracking-tight'
        >
          最初に戻る
        </Button>
      </Link>
      <div className='mt-4 text-sm'>
        <p>
          ※コンテンツブロッカー(広告ブロッカー)を使用している場合、X(Twitter)への共有機能が制限されることがあります。
        </p>
      </div>
    </div>
  );
}
