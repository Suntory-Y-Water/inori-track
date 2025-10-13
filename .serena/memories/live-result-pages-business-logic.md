# ライブ・結果ページのビジネスロジック

## ファイル構成

- `src/app/(list)/live/page.tsx`: ライブ選択UI
- `src/app/(list)/result/page.tsx`: 未聴曲結果表示
- `src/data/venues.ts`: 会場・公演マスターデータ

## データ構造

### venues.ts
```typescript
{
  id: string,           // 一意のID（'1'〜'52'）
  name: string,         // 会場名・公演名
  liveNameId: string,   // ライブイベントの識別子
  shortId: string       // 短縮ID（クエリパラメータ用）
}
```

- 52件のライブ会場データ（一部コメントアウト53-59あり）
- 2018-2025年のライブツアー、周年ライブ、町民集会を網羅
- 同じライブでも日程・公演別に個別エントリ

## ビジネスロジック

### live/page.tsx
- `liveNames`から`LiveName[]`を取得
- ライブ選択用チェックボックスフォームを表示
- 実際のロジックは`LiveCheckBoxForm`コンポーネントに委譲

### result/page.tsx

#### 1. getResultSongs関数
- クエリパラメータ`venue_id`を基に未聴曲を算出
- 全曲未聴（選択ライブなし）の場合は404ページを表示

#### 2. generateMetadata関数
- 動的OGPメタデータ生成
- 未聴曲数を含むOGP画像URL生成
- Twitter Card設定
- `headers()`でホスト名取得し完全URL構築

#### 3. URL構築ロジック
```typescript
const httpPrefix = process.env.HTTP_PREFIX // 'http' or 'https'
const headersList = await headers()
const host = headersList.get('host')
const baseUrl = `${httpPrefix}://${host}`
```

#### 4. 表示制御
- 未聴曲0件: 見出し非表示
- それ以外: 曲リスト + 共有URL表示

## 処理フロー

```
venues.ts (マスターデータ)
    ↓
liveNames (ライブ名集約)
    ↓
live/page.tsx (ライブ選択UI)
    ↓
[ユーザー選択] → venue_id クエリパラメータ
    ↓
result/page.tsx → getResultSongs
    ↓
未聴曲算出
    ↓
ResultInfo (結果表示 + 共有機能)
```

## 技術的特徴

### Next.js App Router
- `export const dynamic = 'force-dynamic'` で動的レンダリング
- `searchParams`は非同期（Promise型）
- `generateMetadata`による動的OGP

### 型安全性
- `LiveName`型による型保証
- クエリパラメータの厳密な型定義

### エラーハンドリング
- 環境変数未設定時のエラー
- 不正なクエリパラメータ時の404処理

## 依存関係

- `LiveCheckBoxForm`: ライブ選択フォームコンポーネント
- `ResultInfo`: 結果表示コンポーネント
- `getResultSongs`: 未聴曲算出ロジック
- `liveNames`: ライブ名マスターデータ
- `venues`: 会場マスターデータ
