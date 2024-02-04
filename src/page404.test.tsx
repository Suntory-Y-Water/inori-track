import { MemoryRouter } from 'react-router-dom';
import { Page404 } from './page404';
import { render } from '@testing-library/react';

describe('Page404', () => {
  test('正しくレンダリングされる', () => {
    render(
      <MemoryRouter>
        <Page404 />
      </MemoryRouter>,
    );
  });
});
