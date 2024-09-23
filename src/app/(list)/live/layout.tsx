import type { Metadata } from 'next';

type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: 'ライブ一覧',
  description:
    '今まで実施したライブの一覧ページです。自分が参加したことあるライブを選択することができます。',
};

export default function RootLayout({ children }: Props) {
  return children;
}
