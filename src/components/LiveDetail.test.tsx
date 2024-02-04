import { render, screen } from '@testing-library/react';
import LiveDetail from './LiveDetail';
import { MemoryRouter } from 'react-router-dom';
import { liveNames, songsSung, songs, venues } from 'mocks';
import { useParams } from 'react-router-dom';

vi.mock('react-router-dom', async () => {
  const originalModule = await vi.importActual('react-router-dom');
  return {
    ...originalModule,
    useParams: vi.fn(),
  };
});

describe('LiveDetail コンポーネント', () => {
  liveNames.forEach((live) => {
    test(`${live.name} の詳細が正しく表示される`, () => {
      vi.mocked(useParams).mockReturnValue({ id: live.id });

      render(
        <MemoryRouter>
          <LiveDetail />
        </MemoryRouter>,
      );

      // ライブ名の確認
      expect(screen.getByText(live.name)).toBeInTheDocument();

      // 会場ごとの曲の確認
      venues.forEach((venue) => {
        const venueSongs = songsSung
          .filter((sung) => sung.venueId === venue.id && sung.liveNameId === live.id)
          .map((sung) => songs.find((song) => song.id === sung.songId)?.title);

        if (venueSongs.length > 0) {
          expect(screen.getByText(venue.name)).toBeInTheDocument();
          venueSongs.forEach((songTitle) => {
            if (songTitle) {
              // getAllByTextを使用して複数の要素を処理
              const allMatchingElements = screen.getAllByText(songTitle);
              expect(allMatchingElements.length).toBeGreaterThan(0);
              allMatchingElements.forEach((element) => {
                expect(element).toBeInTheDocument();
              });
            }
          });
        }
      });
    });
  });
});
