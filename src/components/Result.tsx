import { useSearchParams } from 'react-router-dom';
import { songs, songsSung } from '@/data';
import ResultShare from './ResultShare';

const Result = () => {
  const [searchParams] = useSearchParams();
  const venueIds = searchParams.getAll('venue_id');

  const sungSongIds = songsSung
    .filter((songSung) => venueIds.includes(songSung.venueId))
    .map((songSung) => songSung.songId);

  const uniqueSungSongIds = Array.from(new Set(sungSongIds));
  const unsungSongs = songs.filter((song) => !uniqueSungSongIds.includes(song.id));

  return (
    <div className='md:w-2/3'>
      <h1 className='pb-4 font-bold text-2xl'>聴いたことない曲一覧</h1>
      <ResultShare params={unsungSongs} />
    </div>
  );
};

export default Result;
