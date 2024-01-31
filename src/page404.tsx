import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const Page404 = () => {
  return (
    <div className='md:w-2/3'>
      <h1 className='pb-4 font-bold text-2xl'>404 Not Found</h1>
      <p className='font-bold'>お探しのページが見つかりませんでした。</p>
      <Link to='/' style={{ textDecoration: 'none' }}>
        <Button
          variant='default'
          className='w-full items-center justify-center p-6 my-2 tracking-tight'
        >
          ホームに戻る
        </Button>
      </Link>
    </div>
  );
};
