import { Link } from 'react-router-dom';
import { Button } from './components/ui/button';

function Home() {
  return (
    <div className='md:w-2/3'>
      <h1 className='pb-4 font-bold text-2xl'>ライブチェッカー</h1>
      <div className='mb-4 space-y-1'>
        <p>
          水瀬いのりさんの曲で、自分がまだライブで聴いたことのない曲を一覧で表示することができます。
          <br />
          今すぐ始めるを押したあと、ガイドに従って入力してください。
        </p>
      </div>
      <Link to='/live' style={{ textDecoration: 'none' }}>
        <Button variant='default' className='w-full items-center justify-center p-6 tracking-tight'>
          今すぐ始める
        </Button>
      </Link>
    </div>
  );
}

export default Home;
