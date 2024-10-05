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
