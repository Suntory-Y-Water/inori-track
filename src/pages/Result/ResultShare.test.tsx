import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ResultShare from './ResultShare';

describe('ResultShareコンポーネント', () => {
  test('正しくレンダリングされる', () => {
    const mockParams = [
      { id: '1', title: '思い出のカケラ' },
      { id: '2', title: 'While We Walk' },
    ];
    render(
      <MemoryRouter>
        <ResultShare params={mockParams} />
      </MemoryRouter>,
    );
    // テキストの確認
    expect(
      screen.getByText(`あなたが聴いたことのない曲は${mockParams.length}曲でした！`),
    ).toBeInTheDocument();
    mockParams.forEach((param) => {
      expect(screen.getByText(param.title)).toBeInTheDocument();
    });

    expect(screen.getByText(/^結果をX\(Twitter\)で共有する$/)).toBeInTheDocument();
    expect(screen.getByText('最初に戻る')).toBeInTheDocument();
    expect(
      screen.getByText(/※コンテンツブロッカー\(広告ブロッカー\)を使用している場合/),
    ).toBeInTheDocument();

    // Tweet URL の検証
    const expectedTweetText = encodeURIComponent(
      `あなたが聴いたことのない曲は77曲中${mockParams.length}曲でした!\r\nhttps://inori-track.vercel.app/\r\n#水瀬いのりライブチェッカー`,
    );
    const tweetButton = screen.getByText(/^結果をX\(Twitter\)で共有する$/).closest('a');
    expect(tweetButton).toHaveAttribute(
      'href',
      `https://twitter.com/intent/tweet?text=${expectedTweetText}`,
    );
  });
});
