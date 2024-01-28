/**
 * ヘッダー用の型
 * @interface HeaderNavigationProps
 */
export interface HeaderNavigationProps {
  href: string;
  title: string;
}

/**
 * 水瀬いのりさんのライブの種別を表す型
 *
 * 1: 水瀬いのり個人名義
 * 2: 町民集会
 * @interface LiveDetailType
 * @property {number} id - ライブの種別ID
 * @property {string} name - ライブの種別名
 */
export interface LiveDetailType {
  id: number;
  name: string;
}

/**
 * ユーザーが選択したライブの名前から、会場名とライブ名を取得するための型
 * @interface SelectLiveNameAndVenueProps
 */
export interface SelectLiveNameAndVenueProps {
  liveName: string;
  venues: {
    id: string;
    name: string;
  }[];
}

export interface FormValues {
  items: string[];
}
