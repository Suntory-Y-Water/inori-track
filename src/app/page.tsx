import Button from '@/components/Button';
import Title from '@/components/Title';

export default function Home() {
  return (
    <>
      <Title text='水瀬いのりライブチェッカー' titleFlag={false} />
      <p className='mb-12 font-sans pb-12 text-base'>
        自分がまだライブで聴いたことのない曲を一覧で表示することができます。
        <br />
        <br />
        ライブを選択するを押したあと、ガイドに従って入力してください。
      </p>
      <Button text='ライブを選択する' color='primary' href='/live' />
    </>
  );
}
