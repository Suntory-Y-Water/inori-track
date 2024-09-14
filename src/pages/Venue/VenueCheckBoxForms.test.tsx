import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import VenueCheckBoxForms from './VenueCheckBoxForms';
import { SelectLiveNameAndVenueProps } from '@/types';

describe('VenueCheckBoxFormsコンポーネントのテスト', () => {
  test('正しくレンダリングされる', () => {
    const mockParams: SelectLiveNameAndVenueProps[] = [
      {
        liveName: 'ライブ名1',
        venues: [
          {
            id: '1',
            name: '会場名1',
          },
          {
            id: '2',
            name: '会場名2',
          },
        ],
      },
      {
        liveName: 'ライブ名2',
        venues: [
          {
            id: '3',
            name: '会場名3',
          },
          {
            id: '4',
            name: '会場名4',
          },
        ],
      },
    ];
    render(
      <MemoryRouter>
        <VenueCheckBoxForms params={mockParams} />
      </MemoryRouter>,
    );
  });
});
