import type { Metadata } from 'next';

type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: '会場一覧',
  description:
    '各ライブの会場一覧ページです。自分が参加したことあるライブの会場を選択することができます。',
};

export default function RootLayout({ children }: Props) {
  return children;
}
