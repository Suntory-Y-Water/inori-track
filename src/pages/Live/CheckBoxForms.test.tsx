import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { liveNames } from '@/data/live';

import CheckBoxForms from './CheckBoxForms';
describe('CheckBoxForms コンポーネント', () => {
  test('正しくレンダリングされる', () => {
    render(
      <MemoryRouter>
        <CheckBoxForms params={liveNames} />
      </MemoryRouter>,
    );
  });
});
