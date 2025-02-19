import type { Metadata } from 'next';

type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: 'サマリー',
  description: 'あなたがライブで聞いたことのある曲を一覧で表示します。',
};

export default function RootLayout({ children }: Props) {
  return (
    <div className='container-wrapper'>
      <div className='container py-6 text-baseblack'>{children}</div>
    </div>
  );
}
