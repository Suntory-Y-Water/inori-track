import { Link } from 'react-router-dom';
import { Button } from './components/ui/button';

function Home() {
  return (
    <div className='md:w-3/4'>
      <h1 className='pb-4 font-bold text-2xl'>ライブチェッカー</h1>
      <div className='mb-4 space-y-1'>
        <p>
          いのなびはまだ水瀬いのりさんのライブで、まだ聴いたことのない曲を見つけることできるサービスです
          <br />
          <br />
          今すぐ始めるを押したあと、自分が参加したライブ名と会場名を選ぶことで、まだ聴いたことのない曲を一覧で表示することができます。
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
