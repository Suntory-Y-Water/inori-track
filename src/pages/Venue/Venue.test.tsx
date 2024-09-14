import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Venue from './Venue';

describe('Venueコンポーネントのテスト', () => {
  test('正しくレンダリングされる', () => {
    render(
      <MemoryRouter>
        <Venue />
      </MemoryRouter>,
    );
  });
});
