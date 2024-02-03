import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { links } from '@/data/links';
import { liveNames } from '@/data/live';
import Aside from './Aside';

describe('Aside コンポーネントのテスト', () => {
  test('正しい内容が表示されている', () => {
    render(
      <MemoryRouter>
        <Aside />
      </MemoryRouter>,
    );

    // セトリ一覧が正しく表示されている
    expect(screen.getByText('セトリ一覧')).toBeInTheDocument();

    // links内のリンクが正しく表示されている
    // linksからのリンクのテスト
    links.forEach((link) => {
      expect(screen.getByText(link.title)).toBeInTheDocument();
    });

    // liveNamesからのリンクのテスト
    liveNames.forEach((liveName) => {
      expect(screen.getByText(liveName.name)).toBeInTheDocument();
    });
  });
});
