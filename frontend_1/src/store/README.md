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

- SWR は organisms で呼び出し、Command に cache と mutate を渡す
  - SWR はカスタムフックなので、関数コンポーネントのトップレベルで呼び出す必要がある
- Repository の実装で cache があれば cache を返し、cache がなければ fetch と mutate を行う
