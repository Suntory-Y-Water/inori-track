import type { Metadata } from 'next';

type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: 'お問い合わせ',
  description: 'いのなびのお問い合わせページです。',
  openGraph: {
    title: 'お問い合わせ',
    description: 'いのなびのお問い合わせページです。',
  },
};

export default function RootLayout({ children }: Props) {
  return children;
}
