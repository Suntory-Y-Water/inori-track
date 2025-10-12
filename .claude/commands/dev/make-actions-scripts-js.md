---
description: GitHub ActionsのスクリプトをJavaScriptで生成するコマンド
argument-hint: [スクリプトの内容] [ワークフローファイル名(オプション)]
allowed-tools: Read, Write, Edit, Bash(ls:*), Bash(cat:*), mcp__serena
---

# GitHub Actions JavaScript スクリプト作成

以下の手順でGitHub ActionsのスクリプトをJavaScriptで実装してください。

## 引数の解釈

- `$1`: スクリプトで実現したい機能の説明
- `$2`: (オプション) ワークフローファイル名（例: `ci.yml`）。指定がない場合はユーザーに確認してください。

## 実装手順

### 1. 依存関係の確認

以下のパッケージが`package.json`にインストールされているか確認してください:
- `@actions/core`
- `@actions/github`

インストールされていない場合は、ユーザーに確認してからインストールしてください。

### 2. 型定義の作成・更新

`.github/types/actions.ts`に型定義を作成または更新してください。

既存ファイルがある場合は追記、ない場合は以下の基本構造で作成:

```typescript
import type { context } from '@actions/github';
import type * as core from '@actions/core';
import type { getOctokit } from '@actions/github';

export type Context = typeof context;
export type Core = typeof core;
export type GitHub = ReturnType<typeof getOctokit>;

export type ActionOptions = {
  github: GitHub;
  context: Context;
  core: Core;
};
```

必要に応じて追加の型定義を作成してください。

### 3. スクリプトファイルの作成

`.github/scripts/{適切なslug}.cjs`としてスクリプトを作成してください。

スクリプトの構造:
```javascript
/**
 * @typedef {import("../types/actions").ActionOptions} ActionOptions
 */

/**
 * スクリプトの説明
 * @param {ActionOptions} options
 */
module.exports = async ({ github, context, core }) => {
  // 実装内容
};
```

### 4. ワークフローへの追加

`$2`でワークフローファイルが指定されている場合、または既存のワークフローに追加する場合:

`.github/workflows/{ワークフローファイル名}`に新しいジョブを追加してください。

ジョブの構造例:
```yaml
job-name:
  timeout-minutes: 5
  runs-on: ubuntu-latest
  permissions:
    contents: read
    # 必要に応じて追加の権限
  steps:
    - uses: actions/checkout@11bd71901bbe5b1630ceea73d27597364c9af683 # v4.2.2
      with:
        persist-credentials: false
    - uses: ./.github/actions/setup
    - uses: actions/github-script@f28e40c7f34bde8b3046d885e986cb6290c5673b # v7.1.0
      with:
        script: |
          const scriptFunction = require('./.github/scripts/{slug}.cjs');
          await scriptFunction({ github, context, core });
```

**重要**: スクリプトのパスは`./.github/scripts/{slug}.cjs`のようにフルパスで指定する必要があります。

### 5. 確認事項

- スクリプトが正しい権限を持っているか確認
- 必要に応じて`permissions`セクションを調整
- スクリプトのエラーハンドリングが適切か確認
- JSDocコメントが適切に記述されているか確認

## 注意事項

- CommonJS形式（`.cjs`）でスクリプトを作成してください
- TypeScriptの型定義をJSDocで参照してください
- `module.exports`で関数をエクスポートしてください
- スクリプトは`async`関数として定義してください
- エラー時は`core.setFailed()`を使用してください

<!-- ## 実装例の参照
`gh pr view 58`で実装例を確認すること -->