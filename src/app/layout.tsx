import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import './globals.css';
import Header from './Header';

const notoSansJp = Noto_Sans_JP({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://sui-portfolio.vercel.app/'),
  title: {
    template: '%s - いのなび',
    default: 'いのなび',
  },
  description:
    'いのなびは水瀬いのりさんの曲で、ライブでまだ聴いたことがない曲を見つけることができるサービスです。',
  openGraph: {
    title: 'いのなび',
    description:
      'いのなびは水瀬いのりさんの曲で、ライブでまだ聴いたことがない曲を見つけることができるサービスです。あなたがまだ聴いたことがない曲を見つけて、もっとライブを楽しみましょう',
    images: '/opengraph-image.png',
  },
  twitter: {
    title: 'いのなび',
    description:
      'いのなびは水瀬いのりさんの曲で、ライブでまだ聴いたことがない曲を見つけることができるサービスです。あなたがまだ聴いたことがない曲を見つけて、もっとライブを楽しみましょう',
    card: 'summary_large_image',
    images: '/opengraph-image.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ja'>
      <body className={notoSansJp.className}>
        <Header />
        <main className='mx-auto w-full px-4 max-w-[768px] py-6 text-baseblack'>{children}</main>
      </body>
    </html>
  );
}
