import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <header className='border-b'>
      <div className='mx-auto w-[calc(100%-40px)] max-w-[720px] py-4 flex items-center'>
        <Link
          href='/'
          className='flex items-center space-x-2 ease duration-300 hover:-translate-y-0.5'
          aria-label='最初の画面に戻る'
        >
          <Image src='/favicon.ico' width={40} height={40} alt='icon' className='rounded-full' />
          <span className='text-2xl font-bold text-primary-foreground'>いのなび</span>
        </Link>
      </div>
    </header>
  );
}
