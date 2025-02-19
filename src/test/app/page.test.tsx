import Home from '@/app/(list)/page';
import liveNames from '@/data/liveNames.json';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('page tests', () => {
  it('ページがレンダリングされる', () => {
    render(<Home />);

    // ボタンのテキストをチェック
    expect(screen.getByText('今すぐ始める！')).toBeInTheDocument();
  });

  it('対象のライブ一覧が表示される', () => {
    render(<Home />);

    // ライブ名が表示される
    for (const liveName of liveNames) {
      expect(screen.getByText(liveName.name)).toBeInTheDocument();
    }
  });
});
