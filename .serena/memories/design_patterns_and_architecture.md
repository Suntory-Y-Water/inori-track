# 設計パターンとアーキテクチャ

## アプリケーションフロー

1. **トップページ** (`src/app/(list)/page.tsx`)
   - いのなびの紹介と「今すぐ始める!」ボタン

2. **ライブ選択ページ** (`src/app/(list)/live/page.tsx`)
   - 過去に開催されたライブの一覧を表示
   - ユーザーが参加したライブにチェック

3. **会場選択ページ** (`src/app/(list)/venue/page.tsx`)
   - 選んだライブごとに会場一覧を表示
   - ユーザーが参加した会場にチェック

4. **未聴曲の結果ページ** (`src/app/(list)/result/page.tsx`)
   - まだ聴いたことのない曲を一覧表示
   - 全て聴いていた場合はお祝いメッセージ

5. **聴いたことのある曲の一覧ページ** (`src/app/report/page.tsx`)
   - 参加したライブ・会場で実際に聴いた楽曲のリストと回数

## Next.js App Router構成

### Route Groups
- `(list)`: ライブ・会場選択と結果表示の一連のフローをグループ化

### レイアウト階層
```
app/layout.tsx (ルートレイアウト)
  ├── app/(list)/layout.tsx (リストグループレイアウト)
  │   ├── app/(list)/page.tsx (トップページ)
  │   ├── app/(list)/live/layout.tsx
  │   │   └── app/(list)/live/page.tsx (ライブ選択)
  │   ├── app/(list)/venue/layout.tsx
  │   │   └── app/(list)/venue/page.tsx (会場選択)
  │   ├── app/(list)/result/layout.tsx
  │   │   └── app/(list)/result/page.tsx (未聴曲結果)
  │   └── app/(list)/contact/layout.tsx
  │       └── app/(list)/contact/page.tsx (お問い合わせ)
  └── app/report/layout.tsx
      └── app/report/page.tsx (聴いた曲レポート)
```

## データフロー

### 状態管理
- URLクエリパラメータを使用して選択状態を管理
  - ライブ選択 → `live_id` パラメータ
  - 会場選択 → `venue_id` パラメータ
- サーバーサイドでクエリパラメータを読み取り、結果を計算

### データ構造
- 静的データはTypeScriptの定数として管理 (`src/data/`)
- 以前はJSON形式だったが、型安全性向上のためTypeScriptに移行

## コンポーネント設計

### UIコンポーネント (`src/components/ui/`)
- shadcn/uiベースの再利用可能なコンポーネント
- Radix UIをベースに構築

### 機能コンポーネント (`src/components/features/`)
- ドメイン固有のロジックを含むコンポーネント
- 機能別にディレクトリを分割:
  - `live/`: ライブ選択機能
  - `venue/`: 会場選択機能
  - `result/`: 結果表示機能
  - `report/`: レポート表示機能

## ユーティリティ関数 (`src/lib/utils.ts`)

主要な関数:
- `cn`: クラス名を結合するユーティリティ (clsx + tailwind-merge)
- `getResultSongs`: 選択された会場IDから未聴曲を計算
- `getSongsData`: レポート用に楽曲データを集計

## API Routes

### OG画像生成 (`src/app/api/og/route.tsx`)
- 動的にOGイメージを生成するAPI
- Next.jsのImageResponseを使用