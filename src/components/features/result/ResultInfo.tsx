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
        <ul key={param.id} className='list-disc list-outside mt-1 ml-6 py-1'>
          <li className='marker:text-primary'>{param.title}</li>
        </ul>
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
