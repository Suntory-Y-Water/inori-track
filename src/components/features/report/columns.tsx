'use client';

import type { SongInfo } from '@/types';
import type { ColumnDef } from '@tanstack/react-table';

export const columns: ColumnDef<SongInfo>[] = [
  { accessorKey: 'name', header: '曲名' },
  { accessorKey: 'count', header: '回数' },
  { accessorKey: 'rsgTokyo', header: 'RSG東京' },
  { accessorKey: 'bcAichi', header: 'BC愛知' },
  { accessorKey: 'bcIshikawa', header: 'BC石川' },
  { accessorKey: 'bcHyogo', header: 'BC兵庫' },
  { accessorKey: 'bcChiba', header: 'BC千葉' },
  { accessorKey: 'ctrOsaka', header: 'CtR大阪' },
  { accessorKey: 'ctrAichi', header: 'CtR愛知' },
  { accessorKey: 'ctrTokyo1', header: 'CtR東京1' },
  { accessorKey: 'ctrTokyo2', header: 'CtR東京2' },
  { accessorKey: 'sw', header: 'SW' },
  { accessorKey: 'hhOsaka', header: 'HH大阪' },
  { accessorKey: 'hhAichi', header: 'HH愛知' },
  { accessorKey: 'hhFukuoka', header: 'HH福岡' },
  { accessorKey: 'hhMiyagi', header: 'HH宮城' },
  { accessorKey: 'hhKanagawa', header: 'HH神奈' },
  { accessorKey: 'glowAichi', header: 'glow愛知' },
  { accessorKey: 'glowMiyagi', header: 'glow宮城' },
  { accessorKey: 'glowFukuoka', header: 'glow福岡' },
  { accessorKey: 'glowKanagawa', header: 'glow神奈' },
  { accessorKey: 'glowHyogo', header: 'glow兵庫' },
  { accessorKey: 'saHyogo', header: 'SA兵庫' },
  { accessorKey: 'saMiyagi', header: 'SA宮城' },
  { accessorKey: 'saAichi', header: 'SA愛知' },
  { accessorKey: 'saFukuoka', header: 'SA福岡' },
  { accessorKey: 'saKanagawa1', header: 'SA神奈1' },
  { accessorKey: 'saKanagawa2', header: 'SA神奈2' },
  { accessorKey: 'hbHyogo', header: 'HB兵庫' },
  { accessorKey: 'hbHiroshima', header: 'HB広島' },
  { accessorKey: 'hbAichi', header: 'HB愛知' },
  { accessorKey: 'hbFukuoka', header: 'HB福岡' },
  { accessorKey: 'hbHokkaido', header: 'HB北海道' },
  { accessorKey: 'hbChiba1', header: 'HB千葉1' },
  { accessorKey: 'hbChiba2', header: 'HB千葉2' },
  { accessorKey: 'chomin2018TokyoDay', header: '町18東昼' },
  { accessorKey: 'chomin2018TokyoNight', header: '町18東夜' },
  { accessorKey: 'chomin2019HyogoDay', header: '町19兵昼' },
  { accessorKey: 'chomin2019HyogoNight', header: '町19兵夜' },
  { accessorKey: 'chomin2019TokyoDay', header: '町19東昼' },
  { accessorKey: 'chomin2019TokyoNight', header: '町19東夜' },
  { accessorKey: 'chomin2021YokohamaDay', header: '町21横昼' },
  { accessorKey: 'chomin2021YokohamaNight', header: '町21横夜' },
  { accessorKey: 'chomin2023TokyoDay', header: '町23東昼' },
  { accessorKey: 'chomin2023TokyoNight', header: '町23東夜' },
  { accessorKey: 'chomin2024SaitamaDay', header: '町24埼昼' },
  { accessorKey: 'chomin2024SaitamaNight', header: '町24埼夜' },
  { accessorKey: 'chomin2024Shiga', header: '町24滋賀' },
  { accessorKey: 'chomin2024Aichi', header: '町24愛知' },
];
