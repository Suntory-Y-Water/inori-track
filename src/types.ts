export type FormValues<T> = {
  items: T[];
};

/**
 * ユーザーが選択したライブに関連する会場とライブ名の型
 */
export type LiveAndVenuesInfo = {
  liveName: string;
  venues: {
    id: string;
    name: string;
  }[];
};

export type LiveName = {
  id: string;
  name: string;
  liveType: string;
};

export type Venue = {
  id: string;
  name: string;
};

/**
 * ユーザーが選択したライブに関連する会場とライブ名の型
 */
export type SongInfo = {
  name: string;
  count: number;
  rsgTokyo: string;
  bcAichi: string;
  bcIshikawa: string;
  bcHyogo: string;
  bcChiba: string;
  ctrOsaka: string;
  ctrAichi: string;
  ctrTokyo1: string;
  ctrTokyo2: string;
  sw: string;
  hhOsaka: string;
  hhAichi: string;
  hhFukuoka: string;
  hhMiyagi: string;
  hhKanagawa: string;
  glowAichi: string;
  glowMiyagi: string;
  glowFukuoka: string;
  glowKanagawa: string;
  glowHyogo: string;
  saHyogo: string;
  saMiyagi: string;
  saAichi: string;
  saFukuoka: string;
  saKanagawa1: string;
  saKanagawa2: string;
  hbHyogo: string;
  hbHiroshima: string;
  hbAichi: string;
  hbFukuoka: string;
  hbHokkaido: string;
  hbChiba1: string;
  hbChiba2: string;
  chomin2018TokyoDay: string;
  chomin2018TokyoNight: string;
  chomin2019HyogoDay: string;
  chomin2019HyogoNight: string;
  chomin2019TokyoDay: string;
  chomin2019TokyoNight: string;
  chomin2021YokohamaDay: string;
  chomin2021YokohamaNight: string;
  chomin2023TokyoDay: string;
  chomin2023TokyoNight: string;
  chomin2024SaitamaDay: string;
  chomin2024SaitamaNight: string;
  chomin2024Shiga: string;
  chomin2024Aichi: string;
};
