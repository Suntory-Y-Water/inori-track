import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';

describe('Header コンポーネント', () => {
  test('正しくレンダリングされる', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );
  });
});
