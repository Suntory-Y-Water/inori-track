import { Button } from '@/components/ui/button';
import Link from 'next/link';
import liveNames from '@/data/liveNames.json';

export default function Home() {
  return (
    <div className='relative min-h-screen flex flex-col'>
      <div className='flex flex-col flex-1'>
        <div className='flex flex-col'>
          <p className='text-lg py-2'>
            いのなびはまだ水瀬いのりさんのライブで、まだ聴いたことのない曲を見つけることできるサービスです
          </p>
          <p className='text-lg py-2'>
            今すぐ始めるを押したあと、自分が参加したライブ名と会場名を選ぶことで、まだ聴いたことのない曲を一覧で表示することができます。
          </p>
          <Link href='/live'>
            <Button className='w-full items-center justify-center p-6 my-4 tracking-tight'>
              今すぐ始める！
            </Button>
          </Link>
        </div>
        <div className='w-full bg-white rounded-t-3xl flex-1'>
          <h1 className='text-xl md:text-2xl font-bold text-primary-foreground'>よくある質問</h1>
          <div className='py-2'>
            <h2 className='text-lg font-semibold'>Q. ネタバレは含みますか？</h2>
            <p className='py-1'>
              A.
              一部会場(ライブツアー期間中)であれば、ネタバレを含む場合がございますが、必ず確認メッセージが表示されます。
            </p>
          </div>
          <div className='py-2'>
            <h2 className='text-lg font-semibold'>Q. 対象のライブを教えてください。</h2>
            <p className='py-1'>
              現在(2024年9月16日時点)は以下のライブ、町民集会が対象になっております。
            </p>
            <ul className='list-disc list-outside mt-1 ml-6 text-left'>
              {liveNames.map((liveName) => (
                <li key={liveName.id} className='py-2 marker:text-primary'>
                  {liveName.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
