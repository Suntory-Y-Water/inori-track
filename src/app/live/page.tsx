import Top from '../components/Top/Top';

export default function Live() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex'>
        <p>Hello Live</p>
        <Top />
      </div>
    </main>
  );
}
