import Button from '../components/Button';
import Header from '../components/Header';

export default function Home() {
  return (
    <main className='flex flex-col items-center min-h-screen py-10'>
      <div className='space-y-4 w-80 md:w-full max-w-2xl'>
        <Header text='水瀬いのりライブチェッカー' titleFlag={false} />
        <p className='mb-12 font-sans pb-12 text-base'>
          自分がまだライブで聴いたことのない曲を一覧で表示することができます。
          <br />
          <br />
          ライブを選択するを押したあと、ガイドに従って入力してください。
        </p>
        <Button text='ライブを選択する' color='primary' href='/live' />
      </div>
    </main>
  );
}
