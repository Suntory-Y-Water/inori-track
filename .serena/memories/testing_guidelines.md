# テスト方針とガイドライン

## テストフレームワーク
- **単体・結合テスト**: Vitest + Testing Library
- **テスト環境**: happy-dom
- **E2Eテスト**: Playwright (削除済み)

## テスト方針

### 基本原則
- **TDD (Test-Driven Development)** を実施する
- コードを生成するときは、それに対応するユニットテストを常に生成する
- コードを追加で修正したとき、`pnpm run test`がパスすることを常に確認する

### テストパターン
- **Given-When-Thenパターン** に基づいて実装する
- メソッドの**事前条件、事後条件、不変条件**を検証するテストであること

### テストの配置
- テストファイルは `src/test/` 配下に配置
  - `src/test/app/`: ページコンポーネントのテスト
  - `src/test/components/`: UIコンポーネントのテスト

### テストの実行対象
- Include: `src/test/app/**/*.test.tsx`, `src/test/components/**/*.test.tsx`
- E2Eテストは除外 (Playwrightの設定自体が削除済み)

## テスト例

```ts
function add(a: number, b: number) { 
  return a + b 
}

test("1+2=3", () => {
  expect(add(1, 2)).toBe(3);
});
```