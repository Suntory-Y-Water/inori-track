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

    // ボタンのテキストをチェック
    expect(screen.getByText('今すぐ始める')).toBeInTheDocument();
  });
});
