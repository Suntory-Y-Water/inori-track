---
description: GitHub Actionsの静的検査を行い、エラーを修正します。
---

以下のコマンドはGitHub Actionsの構文を静的解析するツールです。
コマンドを実行後、GitHub Actionsの構文エラーを修正する。
ツールは正常終了時に出力が無い。または成功の出力が出力されます。
`zsh: command not found:`のようなコマンド自体が無い場合でも、ユーザーに報告のみを行い、次のコマンドを実行してください。

1. `pinact run`
2. `actionlint -format '{{json .}}'`
3. `ghalint run`
4. `zizmor .github/`