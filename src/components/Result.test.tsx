import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Result from './Result';

describe('Resultコンポーネント', () => {
  test('正しくレンダリングされる', () => {
    render(
      <MemoryRouter>
        <Result />
      </MemoryRouter>,
    );
  });
});
