import Button from '@/components/Button';

export default function NotFound() {
  return (
    <div className='fixed inset-0 flex items-center justify-center'>
      <div className='bg-white p-4 rounded-lg shadow-lg text-center'>
        <h1 className='text-3xl font-bold text-gray-800 mb-4'>404 Not Found</h1>
        <p className='text-gray-700 mb-4 text-2xl'>ページが見つかりませんでした</p>
        <Button text='最初の画面に戻る' color='primary' href='/' />
      </div>
    </div>
  );
}
