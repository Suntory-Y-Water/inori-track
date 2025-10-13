# コードベース構造

## ディレクトリ構成

```
.
├── .github/             # CI/CD設定
├── .claude/             # Claude固有の設定
├── .serena/             # Serena MCP関連
├── .vscode/             # VSCode設定
├── public/              # 静的アセット
├── src/                 # アプリケーションのメインソース
│   ├── app/             # Next.js App Routerディレクトリ
│   │   ├── (list)/      # ライブ・会場・結果表示など一覧系のページ
│   │   │   ├── contact/   # お問い合わせページ
│   │   │   ├── live/      # ライブ選択ページ
│   │   │   ├── venue/     # 会場選択ページ
│   │   │   └── result/    # 未聴曲結果ページ
│   │   ├── report/      # 聴いたことがある曲一覧ページ
│   │   └── api/og/      # OGイメージ生成API
│   ├── components/      # UIコンポーネント
│   │   ├── ui/          # 基本UIコンポーネント (shadcn/ui)
│   │   └── features/    # 機能別コンポーネント
│   │       ├── result/  # 結果表示用
│   │       ├── live/    # ライブ選択用
│   │       ├── venue/   # 会場選択用
│   │       └── report/  # レポート表示用
│   ├── data/            # 静的データ (TypeScript定数)
│   │   ├── songs.ts     # 楽曲情報
│   │   ├── venues.ts    # 会場情報
│   │   ├── liveNames.ts # ライブ名情報
│   │   ├── songsSung.ts # 楽曲と会場の紐付け情報
│   │   └── index.ts     # データのエクスポート
│   ├── lib/             # 汎用ユーティリティ関数
│   ├── test/            # テストコード
│   │   ├── app/         # ページコンポーネントのテスト
│   │   └── components/  # UIコンポーネントのテスト
│   └── types.ts         # 共通型定義
├── package.json
├── tsconfig.json        # TypeScript設定
├── biome.json           # Biome設定
├── vitest.config.mts    # Vitest設定
├── tailwind.config.ts   # Tailwind CSS設定
└── CLAUDE.md            # AI開発ガイドライン
```

## 主要ファイルの説明

### データファイル (src/data/)
- 楽曲、ライブ、会場情報をTypeScriptの定数として管理
- 以前はJSON形式だったが、TypeScriptに移行

### 型定義 (src/types.ts)
- `FormValues`: フォーム値の型
- `LiveAndVenuesInfo`: ライブと会場の情報
- `LiveName`: ライブ名の型
- `SongInfo`: 楽曲情報の型
- `Venue`: 会場情報の型

### ユーティリティ (src/lib/utils.ts)
- `cn`: クラス名結合用のユーティリティ (clsx + tailwind-merge)
- `getResultSongs`: 未聴曲を計算する関数
- `getSongsData`: レポート用の楽曲データを取得する関数