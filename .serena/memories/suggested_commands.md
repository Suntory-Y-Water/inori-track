# 推奨コマンド一覧

## パッケージ管理

```bash
# 依存関係のインストール
pnpm install
```

## 開発コマンド

```bash
# 開発サーバーの起動 (http://localhost:3000)
pnpm dev

# 本番ビルド
pnpm build

# 本番サーバーの起動
pnpm start
```

## 品質チェック

```bash
# 型チェック
pnpm typecheck
# または
tsc --noEmit

# Lintチェック
pnpm lint

# Lint自動修正
pnpm lint:fix

# フォーマットチェック
pnpm format
```

## テスト

```bash
# 単体・結合テストの実行 (Vitest)
pnpm test

# E2Eテスト (削除済み)
# pnpm e2e

# Playwrightコード生成 (削除済み)
# pnpm codegen
```

## AI開発用コマンド

CLAUDE.mdに記載の通り、コード生成後に以下を実行することが推奨されています:

```bash
# AI開発後のチェック (Lint + 型チェック)
pnpm run ai-check
```

注: `ai-check`はpackage.jsonに未定義のため、以下のコマンドを個別に実行する必要があります:

```bash
pnpm lint && pnpm typecheck
```

## システムユーティリティ (macOS/Darwin)

プロジェクトはDarwin (macOS)環境で開発されています。標準的なUnixコマンドが使用可能です:

```bash
# ファイル操作
ls, cd, mkdir, rm, mv, cp

# ファイル検索・内容検索
find, grep, rg (ripgrep)

# Git操作
git status, git add, git commit, git push, git pull

# ファイル表示
cat, less, head, tail
```