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
