import { ImageResponse } from 'next/og';
import type { NextRequest } from 'next/server';

export const runtime = 'edge';

type OgImageProps = {
  count: string;
};

const OgImage = ({ count }: OgImageProps) => (
  <div
    style={{
      position: 'relative',
      fontSize: 128,
      background: 'linear-gradient(to bottom right, #9BD4FF, #FFFA9B)', // 背景グラデーション
      width: '100%',
      height: '100%',
      display: 'flex',
      textAlign: 'left',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '16px', // 角を丸く
      padding: '32px', // 外枠の余白
      fontFamily: "'Noto Sans JP', sans-serif", // フォントファミリー
      color: '#333333', // テキストの色
    }}
  >
    {/* 背景の白いボックス */}
    <div
      style={{
        position: 'absolute',
        display: 'flex',
        top: '32px',
        left: '32px',
        right: '32px',
        bottom: '32px',
        backgroundColor: 'white',
        borderRadius: '16px', // 背景ボックスの角を丸く
        zIndex: 0, // テキストの下に配置
      }}
    />

    {/* 中央のテキスト */}
    <div
      style={{
        display: 'flex',
        position: 'relative',
        zIndex: 1, // テキストを前面に
      }}
    >
      <p
        style={{
          margin: 32,
          fontSize: '64px',
          fontWeight: 'bold',
        }}
      >
        あなたがまだ聴いたことがない曲は{count}曲でした！
      </p>
    </div>
  </div>
);

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  return new ImageResponse(<OgImage count={searchParams.get('count') ?? ''} />);
}
