import type { Metadata } from 'next';

type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: '聴いたことがない曲一覧',
  description: 'あなたがまだライブで聴いたことがない曲を一覧で表示します。',
};

export default function RootLayout({ children }: Props) {
  return children;
}
