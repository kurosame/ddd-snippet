# `store`

Global state

## Recoil

### 概要

- クライアントで生成した Global state は Recoil で管理する

### 実装方針

## SWR

### 概要

- サーバーから取得した Global state は SWR で管理する

### 実装方針

- SWR は Organisms で呼び出し、Command に cache と mutate を渡す
  - SWR はカスタムフックなので、関数コンポーネントのトップレベルで呼び出す必要がある
- Repository の実装で cache があれば cache を返し、cache がなければ fetch と mutate を行う
- cache を API のレスポンス値以外で更新したい場合は、mutate().then の中で更新値を return する
  - API のレスポンス値で更新するのであれば then の処理を書かなくても勝手に更新される
  - cache.set は使わない
- 他の関数で使用している cache を更新したい場合は、更新せずに cache.delete する
