import { expect, describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from '@/app/page';
import liveNames from '@/data/liveNames.json';

describe('page tests', () => {
  it('ページがレンダリングされる', () => {
    render(<Home />);

    expect(
      screen.getByText(
        'いのなびはまだ水瀬いのりさんのライブで、まだ聴いたことのない曲を見つけることできるサービスです',
      ),
    );

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
