import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import './globals.css';

const notoSansJp = Noto_Sans_JP({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s - いのなび',
    default: 'いのなび',
  },
  description:
    'いのなびは水瀬いのりさんの曲で、ライブでまだ聴いたことがない曲を見つけることができるサービスです。',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ja'>
      <body className={`${notoSansJp.className}`}>
        <main className='mx-auto w-[calc(100%-40px)] max-w-[1280px] my-8'>{children}</main>
      </body>
    </html>
  );
}
