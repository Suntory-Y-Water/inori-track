# プロジェクト概要

## プロジェクト名
inori-track (いのなび)

## 目的
水瀬いのりさんのライブで**まだ聴いたことのない曲**や**聴いたことがある曲**を見つけられるサービス。

## 主な機能
1. まだ聴いたことのない曲の一覧表示
   - 参加したライブ・会場をチェックすると、未聴の楽曲が一覧で表示
2. 聴いたことのある曲の一覧表示
   - 参加したライブ・会場で実際に聴いた楽曲のリストと回数を確認

## 技術スタック
- **フレームワーク**: Next.js 15 (App Router)
- **言語**: TypeScript (strict mode)
- **UIライブラリ**: React 19
- **スタイリング**: Tailwind CSS
- **コンポーネント**: Radix UI, shadcn/ui
- **フォーム**: React Hook Form + Zod
- **テーブル**: TanStack Table
- **テスト**: 
  - 単体・結合テスト: Vitest + Testing Library
  - E2Eテスト: Playwright (削除済み)
- **Linter/Formatter**: Biome
- **パッケージマネージャー**: pnpm 9系

## ランタイム要件
- Node.js 22.0.0以上

## リポジトリブランチ構成
- メインブランチ: `main`
- 現在のブランチ: `feature-data-json-convert-ts`