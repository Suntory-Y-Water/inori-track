import { render, screen, fireEvent } from '@testing-library/react';
import MobileMenu from './MobileMenu';
import { MemoryRouter } from 'react-router-dom';

describe('MobileMenu コンポーネント', () => {
  test('正しくレンダリングされる', () => {
    render(
      <MemoryRouter>
        <MobileMenu />
      </MemoryRouter>,
    );

    expect(screen.getByText('Menu')).toBeInTheDocument();
  });

  test('ボタンを押すとメニューが表示される', () => {
    render(
      <MemoryRouter>
        <MobileMenu />
      </MemoryRouter>,
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);
  });
});
