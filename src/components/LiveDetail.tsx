import { useNavigate, useParams } from 'react-router-dom';
import { songsSung, songs, venues, liveNames } from '@/data';
import { useEffect } from 'react';

const LiveDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // 対応するライブデータが存在するかチェック
    const liveExists = liveNames.some((live) => live.id === id);
    if (!liveExists) {
      // データが存在しない場合は404ページにリダイレクト
      navigate('/404');
    }
  }, [id, navigate]);

  // URLのidからライブの名称を検索
  const liveName = liveNames.find((live) => live.id === id)?.name;

  // 会場ごとに曲をグループ化し、曲が存在する会場のみを表示
  const groupedSongs = venues
    .map((venue) => {
      const venueSongs = songsSung
        .filter((sung) => sung.venueId === venue.id && sung.liveNameId === id)
        .map((sung) => {
          const song = songs.find((song) => song.id === sung.songId);
          return song ? song.title : '曲が見つかりません';
        });

      return { venueName: venue.name, songs: venueSongs };
    })
    .filter((group) => group.songs.length > 0); // 曲が存在しない会場を除外

  return (
    <div>
      <div className='max-w-3xl '>
        <h1 className='text-3xl font-bold mb-4'>{liveName}</h1>
      </div>
      {groupedSongs.map((group, index) => (
        <div key={index} className='mb-8'>
          <h2 className='text-2xl font-semibold'>{group.venueName}</h2>
          <ul>
            {group.songs.map((song, songIndex) => (
              <li key={`${group.venueName}-${songIndex}`} className='py-0.5'>
                {song}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default LiveDetail;
