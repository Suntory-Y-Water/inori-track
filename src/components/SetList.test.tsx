import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SetList from './SetList';

describe('SetListコンポーネントのテスト', () => {
  test('正しくレンダリングされる', () => {
    render(
      <MemoryRouter>
        <SetList />
      </MemoryRouter>,
    );
  });
});
