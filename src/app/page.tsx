import Link from 'next/link';
export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex'>
        <p>Hello Home</p>
        <div>
          <Link href='/live'>
            <button type='button'>Go to Live Page</button>
          </Link>
        </div>
        <div>
          <Link href='/venue'>
            <button type='button'>Go to Venue Page</button>
          </Link>
        </div>
        <div>
          <Link href='/result'>
            <button type='button'>Go to Result Page</button>
          </Link>
        </div>
      </div>
    </main>
  );
}
