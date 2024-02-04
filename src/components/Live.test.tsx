import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Live from './Live';

vi.mock('./CheckBoxForms', () => {
  return {
    __esModule: true,
    default: vi.fn(() => <div>Mocked CheckBoxForms</div>),
  };
});

describe('Liveコンポーネントのテスト', () => {
  test('正しくレンダリングされる', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Live />
      </MemoryRouter>,
    );

    // モック化された CheckBoxForms のテキストがレンダリングされていることを確認
    expect(getByText('Mocked CheckBoxForms')).toBeInTheDocument();

    expect(getByText('参加したライブを選ぼう')).toBeInTheDocument();
  });
});
