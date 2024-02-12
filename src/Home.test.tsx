import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';

describe('Home コンポーネントのテスト', () => {
  test('正しい内容が表示される', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );

    // ヘッダーのテキストをチェック
    expect(screen.getByText('ライブチェッカー')).toBeInTheDocument();

    // 説明文のテキストをチェック
    expect(
      screen.getByText(
        /水瀬いのりさんの曲で、自分がまだライブで聴いたことのない曲を一覧で表示することができます。今すぐ始めるを押したあと、ガイドに従って入力してください。/,
      ),
    ).toBeInTheDocument();

    // ボタンのテキストをチェック
    expect(screen.getByText('今すぐ始める')).toBeInTheDocument();
  });
});
